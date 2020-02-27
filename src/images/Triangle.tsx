import * as React from "react"

let Triangle = (): JSX.Element => {
  return (
    <div className="tri-container">
      <svg height="500" width="500">
        <polygon className="triangle" points="200,55 50,350 350,350" />
      </svg>
    </div>
  )
}

export default Triangle
