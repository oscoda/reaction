import React, { Component } from "react"
import { ToolTip } from "./ToolTip"
import { OverlayTrigger } from "../../OverlayTrigger"
import PropTypes from "prop-types"
import styled from "styled-components"
import Colors from "Assets/Colors"
interface Props {
  url: string
  showMarketData?: boolean
  hideOnLeaveTimeout?: number
}

interface State {
  show: boolean
}

export class LinkWithTooltip extends Component<Props, State> {
  tooltipHovered = false
  linkHovered = false

  static contextTypes = {
    tooltipsData: PropTypes.object,
  }

  state = {
    show: false,
  }

  urlToEntityType(): { entityType: string; slug: string } {
    const urlComponents = new URL(this.props.url).pathname.split("/")
    urlComponents.shift()

    return {
      entityType: urlComponents[0],
      slug: urlComponents[1],
    }
  }

  entityTypeToEntity() {
    const { entityType, slug } = this.urlToEntityType()
    const data = this.context.tooltipsData
    const collectionKey = entityType + "s"

    if (!data || !data[collectionKey]) return null

    return {
      entityType,
      entity: data[collectionKey][slug],
    }
  }

  render() {
    const toolTipData = this.entityTypeToEntity()
    const { showMarketData } = this.props

    const toolTip = toolTipData ? (
      <div>
        <ToolTip
          entity={toolTipData.entity}
          model={toolTipData.entityType}
          showMarketData={showMarketData}
          onHovered={hovered => {
            this.tooltipHovered = hovered

            if (!hovered && !this.linkHovered) {
              this.setState({ show: false })
            }
          }}
        />
      </div>
    ) : (
      <div />
    )

    const { show } = this.state
    return (
      <OverlayTrigger show={show} placement="top" overlay={toolTip}>
        <Link
          target="_blank"
          onMouseEnter={() =>
            new Promise((resolve, reject) => {
              this.linkHovered = true
              this.setState({ show: true }, resolve)
            })
          }
          onMouseLeave={() => {
            // Give user enough time to move from link to tooltip
            // before hiding
            return new Promise((resolve, reject) =>
              setTimeout(() => {
                this.linkHovered = true

                if (!this.tooltipHovered) {
                  this.setState({ show: false }, resolve)
                } else {
                  resolve()
                }
              }, this.props.hideOnLeaveTimeout || 1000)
            )
          }}
        >
          {this.props.children}
        </Link>
      </OverlayTrigger>
    )
  }
}

export const Link = styled.a`
  background-image: none !important;
  border-bottom: 1.5px dashed ${Colors.graySemibold};
  display: inline-block;
  line-height: 23px;

  &:hover {
    border-bottom-color: ${Colors.grayDark};
  }
`
