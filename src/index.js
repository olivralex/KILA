import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const Global = () => {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  )
}

ReactDOM.render(<Global />, document.querySelector("#root"))
