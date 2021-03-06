import { Box, Button, Flex, Input, Modal, Sans } from "@artsy/palette"
import { CreateAppSecondFactorMutationResponse } from "__generated__/CreateAppSecondFactorMutation.graphql"
import { useSystemContext } from "Artsy"
import { Formik, FormikActions, FormikProps } from "formik"
import QRCode from "qrcode.react"
import React, { useState } from "react"
import * as Yup from "yup"
import { ApiError } from "../../ApiError"
import { EnableSecondFactor } from "../Mutation/EnableSecondFactor"
import { UpdateAppSecondFactor } from "./Mutation/UpdateAppSecondFactor"

export interface FormValues {
  name: string
  code: string
}

const presenceRegex = /.*\S+.*/

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Enter a name")
    .matches(presenceRegex, "Enter a name"),
  code: Yup.string()
    .required("Enter a code")
    .matches(presenceRegex, "Enter a code"),
})

interface AppSecondFactorModalProps {
  onClose: () => void
  show?: boolean
  onComplete: () => void
  secondFactor: CreateAppSecondFactorMutationResponse["createAppSecondFactor"]["secondFactorOrErrors"]
}

export const AppSecondFactorModal: React.FC<AppSecondFactorModalProps> = props => {
  const { secondFactor, onComplete } = props
  const { relayEnvironment } = useSystemContext()

  if (!secondFactor || secondFactor.__typename !== "AppSecondFactor") {
    return null
  }

  const handleMutationError = (
    actions: FormikActions<FormValues>,
    errors: ApiError[]
  ) => {
    if (!Array.isArray(errors)) {
      throw errors
    }

    let statusMessage = ""

    errors.forEach(error => {
      if (error.code === "invalid_otp") {
        actions.setFieldError("code", error.message)
      } else {
        statusMessage += `${error.message}\n`
      }
    })

    if (statusMessage.length) {
      actions.setStatus({ message: statusMessage })
    }
  }

  const handleSubmit = async (
    values: FormValues,
    actions: FormikActions<FormValues>
  ) => {
    try {
      await UpdateAppSecondFactor(relayEnvironment, {
        secondFactorID: secondFactor.internalID,
        attributes: {
          name: values.name,
        },
      })

      await EnableSecondFactor(relayEnvironment, {
        secondFactorID: secondFactor.internalID,
        code: values.code,
      })

      actions.setSubmitting(false)
      onComplete()
    } catch (error) {
      actions.setSubmitting(false)
      handleMutationError(actions, error)
    }
  }

  return (
    <Modal
      forcedScroll={false}
      title="Set up with app"
      show={props.show}
      onClose={props.onClose}
    >
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: secondFactor.name || "", code: "" }}
        onSubmit={handleSubmit}
        render={(formikProps: FormikProps<FormValues>) => (
          <InnerForm secondFactor={secondFactor} {...formikProps} />
        )}
      />
    </Modal>
  )
}

interface InnerFormProps extends FormikProps<FormValues> {
  secondFactor: CreateAppSecondFactorMutationResponse["createAppSecondFactor"]["secondFactorOrErrors"]
}

const InnerForm: React.FC<InnerFormProps> = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  values,
  secondFactor,
}) => {
  const [showSecret, setShowSecret] = useState(false)

  if (secondFactor.__typename !== "AppSecondFactor") {
    return null
  }

  return (
    <Box mt={2}>
      <Sans color="black60" size="3">
        An authenticator app lets you generate security codes.
      </Sans>
      <Box mt={1}>
        <Input
          autoComplete="off"
          name="name"
          error={touched.name && errors.name}
          value={values.name}
          onBlur={handleBlur}
          placeholder="Device Name"
          onChange={handleChange}
        />
      </Box>
      <Sans mt={2} color="black60" size="3">
        Use your app to scan the code below. If you can’t use a barcode, enter
        the secret code manually.
      </Sans>
      <Box mt={2} textAlign="center">
        <QRCode size={256} value={secondFactor.otpProvisioningURI} />
      </Box>
      <Sans mt={2} color="black60" size="3t">
        {showSecret ? (
          `secret: ${secondFactor.otpSecret}`
        ) : (
          <Button
            size="small"
            variant="secondaryGray"
            onClick={() => setShowSecret(true)}
          >
            Show secret
          </Button>
        )}
      </Sans>
      <Sans mt={2} color="black60" size="3">
        Enter the six-digit code from the application to complete the
        configuration.
      </Sans>
      <Box mt={2}>
        <Input
          error={touched.code && errors.code}
          onBlur={handleBlur}
          autoComplete="off"
          name="code"
          value={values.code}
          onChange={handleChange}
          placeholder="Authentication Code"
        />
      </Box>
      <Flex alignItems="center">
        <Button
          mt={2}
          loading={isSubmitting}
          width="100%"
          type="submit"
          onClick={handleSubmit}
        >
          Turn on
        </Button>
      </Flex>
    </Box>
  )
}
