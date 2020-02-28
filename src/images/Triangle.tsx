import * as React from "react"

let Triangle = (): JSX.Element => {
  return (
    <div className="tri-container">
      <svg height="500" width="350">
        <polygon className="triangle" points="160,15 10,310 310,310" />
      </svg>
    </div>
  )
}

export default Triangle
