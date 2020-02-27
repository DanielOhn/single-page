import * as React from "react"

let Circle = (): JSX.Element => {
  return (
    <div className="circle-container">
      <svg height="500" width="500" className="circle">
        <circle cx="200" cy="250" r="150" />
      </svg>
    </div>
  )
}

export default Circle
