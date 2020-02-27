import * as React from "react"

let Square = (): JSX.Element => {
  return (
    <div className="square-container">
      <svg className="square" width="400" height="400">
        <rect x="40" y="50" width="300" height="300" />
      </svg>
    </div>
  )
}

export default Square
