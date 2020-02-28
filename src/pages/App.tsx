import * as React from "react"
import "../styles/App.css"

import Section from "../components/Section"
import Triangle from "../images/Triangle"
import Square from "../images/Square"
import Circle from "../images/Circle"

import earth from "../images/earth.svg"
import { useState } from "react"

interface Shapes {
  num: number
}

const Tri = (): JSX.Element => {
  return (
    <div>
      <svg height="50" width="50">
        <polygon points="35,55 0,55 50,50" />
      </svg>
    </div>
  )
}

function App() {
  const [rand, setRand] = useState(0)

  const GetShapes = (): JSX.Element => {
    let minX = 100
    let maxX = 800

    let num = Math.floor(Math.random() * 2)

    let x = Math.floor(Math.random() * maxX) + minX

    let style = "translateX: (" + x + ");"
    let falling

    if (num === 1) {
      falling = "fallingLeft 10s linear infinite;"
    } else {
      falling = "fallingRight 10s linear infinite;"
    }

    let shapes = [
      <polygon className="shape" points="25,0 0,25 50,50" />,
      <polygon
        className="shape"
        points="25,25 -25,25 -25,-25 25,-25"
        style={{ animation: falling }}
      />,
    ]

    return shapes[num]
  }

  let MakeShapes = () => {
    const items = []

    for (let i = 0; i < 10; i++) {
      items.push(GetShapes())
    }
    return <svg className="shape-container">{items}</svg>
  }

  return (
    <div className="App">
      <header className="header" style={{ backgroundImage: `url(${earth})` }}>
        <MakeShapes />
        <p className="heavy title">Shapes</p>
        <p className="light">Makes The World Round</p>
      </header>
      <Section
        title="Rectangles"
        body="They are one of the most fasinating shapes on the planet."
        side="left"
        color="lite"
      >
        <Square />
      </Section>
      <Section
        title="Triangles"
        body="These pointy bois are some of the best shapes."
        side="right"
        color="dark"
      >
        <Triangle />
      </Section>
      <Section
        title="Circles"
        body="Smooth, Round, and have a THICC radius."
        side="left"
        color="lite"
      >
        <Circle />
      </Section>
    </div>
  )
}

export default App
