import React, { useState, useEffect } from "react"
import "../styles/App.scss"
import { Link } from "@reach/router"
import M from "materialize-css"
import Sidenav from "./Sidenav"
import sapal from "../static/sapal.png"
import kila from "../static/kila.png"

const Img = ({ source, styling }) => {
  return (
    <>
      <img className={styling} src={source.src} alt={source.alt} />
    </>
  )
}

const Header = props => {
  const [weeks, setWeeks] = useState([1, 2, 3, 4, 5])

  //Sidenav Function
  const sidenav = () => {
    let elems = document.querySelectorAll(".sidenav")
    M.Sidenav.init(elems, "left")

    let elem = document.querySelector(".sidenav")
    let hamburger = document.querySelector(".hamburger")
    let instance = M.Sidenav.getInstance(elem)

    hamburger.addEventListener("click", () => {
      instance.open()
    })
  }

  useEffect(() => {
    //Sidenav Event
    sidenav()

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
    <>
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
      <Sidenav data={props.data} weeks={weeks} />
    </>
  )
}

export default Header
