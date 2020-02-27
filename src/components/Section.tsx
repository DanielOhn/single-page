import * as React from "react"
import "../styles/Section.css"

interface Props {
  title: string
  body: string
  side: string
  color: string
  children: JSX.Element
}

let Section = (props: Props): JSX.Element => {
  let sectionClass = "section " + props.side
  let title = "heavy " + props.color

  return (
    <div className={sectionClass}>
      <div className="content">
        <p className={title}>{props.title}</p>
        <p className="light">{props.body}</p>
      </div>
      <div className="image">{props.children}</div>
    </div>
  )
}

export default Section
