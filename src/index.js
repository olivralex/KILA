import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const Global = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.render(<Global />, document.querySelector("#root"))
