import React from "react"
import { Router } from "@reach/router"
import "./styles/App.scss"
// Components (.jsx) ./components
// Pages
import Form from "./pages/Form"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <Router>
        <Home path="/" />
      </Router>
    </div>
  )
}

export default App
