import React from "react"
import "../styles/App.scss"
import { Link } from "@reach/router"
import { MdSearch } from "react-icons/md"

const Search = () => {
  return (
    <div className="container">
      <textarea type="text" placeholder=" Buscar ej. Nombre de la Obra" />
      <Link to="/">
        <MdSearch className="search" size={30} />
      </Link>
    </div>
  )
}

export default Search
