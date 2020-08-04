import React from "react"
import "../styles/App.scss"

const Footer = () => {
  return (
    <footer>
      <small>
        ©2020 Kila Environmental Services{" "}
        <span role="img" aria-label="tree">
          🌳
        </span>
      </small>
      <div className="stripe"></div>
    </footer>
  )
}

export default Footer
