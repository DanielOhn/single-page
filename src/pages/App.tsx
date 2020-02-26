import * as React from "react"
import "../styles/App.css"

import Section from '../components/Section'

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="heavy">Shapes</p>
        <p className="light">Make The World Round</p>
      </header>
      <Section 
        title="Rectangles"
        body="They are one of the most fasinating shapes on the planet."
        side="left"
      />
      <Section
        title="Triangles"
        body="This pointy bois are some of the best shapes."
        side="right"
      />
    </div>
  )
}

export default App
