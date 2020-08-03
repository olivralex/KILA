import React from "react"
import { Link } from "@reach/router"
import "../styles/App.scss"
//Components
import Header from "../components/Header.jsx"

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to KILA</h1>
      <h2>This is the homepage</h2>
    </div>
  )
}

export default Home
