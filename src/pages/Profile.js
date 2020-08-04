import React from "react"
import { Link } from "@reach/router"
import "../styles/App.scss"
//Components
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const Profile = () => {
  return (
    <>
      <Header />
      <h1>I'm Profile view</h1>
      <Footer />
    </>
  )
}

export default Profile
