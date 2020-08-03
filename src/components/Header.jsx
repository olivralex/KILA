import React from "react"
import "../styles/App.scss"
import sapal from "../static/sapal.png"
import kila from "../static/kila.png"

const Img = ({ source, styling }) => {
  return (
    <>
      <img className={styling} src={source.src} alt={source.alt} />
    </>
  )
}

const Header = () => {
  return (
    <div className="header">
      <span>
        <i className="fas fa-bars fa-2x"></i>
        <Img styling={"kila"} source={{ src: kila, alt: "kila" }} />
      </span>
      <Img styling={"sapal"} source={{ src: sapal, alt: "sapal" }} />
    </div>
  )
}

export default Header
