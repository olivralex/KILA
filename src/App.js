import React from "react"
import { Router } from "@reach/router"
import "./styles/App.scss"
// Components (.jsx) ./components
// Pages
import Form from "./pages/Form"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Profile path="perfil" />
      </Router>
    </div>
  )
}

export default App
