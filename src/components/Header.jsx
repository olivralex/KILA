import React, { useEffect } from "react"
import "../styles/App.scss"
import { Link } from "@reach/router"
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
  useEffect(() => {
    // Sticky Header Event
    window.onscroll = () => {
      getSticky()
    }

    let header = document.querySelector(".header")
    let sticky = header.offsetTop

    function getSticky() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky")
      }
    }
  }, [])

  return (
    <div className="header">
      <div>
        <span className="hamburger">
          <i className="fas fa-bars fa-2x"></i>
        </span>
        <Link to="/">
          <Img styling={"kila"} source={{ src: kila, alt: "kila" }} />
        </Link>
      </div>
      <Img styling={"sapal"} source={{ src: sapal, alt: "sapal" }} />
    </div>
  )
}

export default Header
