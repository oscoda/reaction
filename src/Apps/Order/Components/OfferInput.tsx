import Input from "Components/Input"
import React from "react"

export interface OfferInputProps {
  id: string
  showError?: boolean
  onChange: (value: number) => void
}

export class OfferInput extends React.Component<OfferInputProps> {
  inputRef = React.createRef<HTMLInputElement>()

  render() {
    const { id, showError } = this.props

    return (
      <Input
        id={id}
        title="Your offer"
        type="text"
        pattern="[0-9]"
        innerRef={this.inputRef}
        defaultValue={null}
        error={showError ? "Offer amount missing or invalid." : null}
        onChange={ev => {
          const currentValue = ev.currentTarget.value
          const nonDigitMatch = currentValue.match(/\D/)

          if (nonDigitMatch) {
            const cursorOffset = currentValue.indexOf(nonDigitMatch[0])
            const nextValue = currentValue.replace(/\D/g, "")
            ev.currentTarget.value = nextValue
            ev.currentTarget.setSelectionRange(cursorOffset, cursorOffset)
          }

          this.props.onChange(Number(ev.currentTarget.value || "0"))
        }}
        block
      />
    )
  }
}
