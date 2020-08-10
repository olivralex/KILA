import React from "react"
import { Link } from "@reach/router"
import "../styles/App.scss"
import construction from "../static/construction.jpg"

const Card = props => {
  return (
    <div className="items-container">
      {props.items.length > 0 ? (
        <div className="card-container">
          {props.items.map((item, i) => (
            <div key={i} className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={construction} alt="obra" />
              </div>
              <div className="card-content">
                <span className="title card-title activator grey-text text-darken-4">
                  {item}
                  <i className="material-icons right">more_vert</i>
                </span>
                <p className="link">
                  <Link to="/perfil/">Ver mas &rarr;</Link>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  {item}
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  Aquí va alguna descripción referente a cada empresa o
                  constructora. Aquí va alguna descripción referente a cada
                  empresa o constructora.
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="notfound">No hemos encontrado ese resultado :(</h1>
      )}
    </div>
  )
}

export default Card
