import React from "react"
import { Link } from "@reach/router"
import "../styles/App.scss"
//Components
import Header from "../components/Header.jsx"
import Search from "../components/Search.jsx"

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <h2>This is the homepage</h2>
    </div>
  )
}

export default Home
