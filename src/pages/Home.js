import React, { useState } from "react"
import "../styles/App.scss"
import construction_2 from "../static/construction_2.jpg"
//Components
import HomeHeader from "../components/HomeHeader.jsx"
import Search from "../components/Search.jsx"
import Card from "../components/Card.jsx"
import Footer from "../components/Footer.jsx"

const Home = () => {
  /* Este estado almacena la información contenida en 
  las tarjetas de cada obra y también aquellos valores
  que determinan el estado del input. */
  const [state, setState] = useState({
    items: [
      "Nueva constructora IMEP S.A",
      "Otra nueva constructora",
      "Obra nueva en la ciudad de León",
      "Otra constructora de S.A de C.V",
      "Obra nueva en Guanajuato",
      "Obra tres en Guanajuato",
      "Constructora Benavides S.A.",
      "Constructora Álvaro Obregón",
      "Constructora REMEX S.A. de C.V.",
    ],
    item: {},
    isItemViewOn: false,
    sortValue: "",
    inputValue: "",
  })

  function cardFilter(event) {
    setState(elements => ({
      ...elements,
      inputValue: event.target.value,
    }))
    event.persist()
  }

  function sortItems(elements) {
    return elements.sort()
  }

  const filteredItems = state.items.filter(elem => {
    return elem.toLowerCase().includes(state.inputValue.toLowerCase())
  })

  return (
    <>
      <HomeHeader />
      <Search cardFilter={cardFilter} inputValue={state.inputValue} />
      <Card items={sortItems(filteredItems)} />
      <Footer />
    </>
  )
}

export default Home
