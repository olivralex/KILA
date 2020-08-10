import React from "react"
import "../styles/App.scss"
import { MdSearch } from "react-icons/md"

const Search = props => {
  return (
    <div className="container">
      <textarea
        type="text"
        value={props.inputValue}
        onChange={props.cardFilter}
        placeholder=" Buscar ej. Nombre de la Empresa"
      />
      <a href="#!">
        <MdSearch className="search" size={30} />
      </a>
    </div>
  )
}

export default Search
