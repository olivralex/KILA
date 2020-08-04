import React from "react"
import { Link } from "@reach/router"
import "../styles/App.scss"
//Components
import Header from "../components/Header.jsx"
import Search from "../components/Search.jsx"
import Card from "../components/Card.jsx"
import Footer from "../components/Footer.jsx"

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Card />
      <Footer />
    </>
  )
}

export default Home
