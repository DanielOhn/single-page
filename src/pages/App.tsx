import * as React from "react"
import "../styles/App.css"

import Section from "../components/Section"
import Triangle from "../images/Triangle"
import Square from "../images/Square"
import Circle from "../images/Circle"

import earth from "../images/earth.svg"

function App() {
  return (
    <div className="App">
      <header className="header" style={{ backgroundImage: `url(${earth})` }}>
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
