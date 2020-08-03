import React from "react"
import "../styles/App.scss"
import sapal from "../static/sapal.png"
import kila from "../static/kila.png"

const Img = ({ source, style }) => {
  return (
    <>
      <img className={style} src={source.src} alt={source.alt} />
    </>
  )
}

const Header = () => {
  return (
    <div className="header">
      <Img style={"kila"} source={{ src: kila, alt: "kila" }} />
      <Img style={"sapal"} source={{ src: sapal, alt: "sapal" }} />
    </div>
  )
}

export default Header
