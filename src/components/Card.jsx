import React from "react"
import { Link } from "@reach/router"
import "../styles/App.scss"
import construction from "../static/construction.jpg"
import construction_2 from "../static/construction_2.jpg"

const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={construction} alt="obra" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Obra<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <Link to="/perfil/">Ver mas &rarr;</Link>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Obra<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={construction} alt="obra" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Obra<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <Link to="/perfil/">Ver mas &rarr;</Link>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Obra<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={construction} alt="obra" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Obra<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <Link to="/perfil/">Ver mas &rarr;</Link>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Obra<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={construction_2} alt="obra" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Obra<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <Link to="/">Ver mas &rarr;</Link>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Obra<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={construction_2} alt="obra" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Obra<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <Link to="/">Ver mas &rarr;</Link>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Obra<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={construction_2} alt="obra" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Obra<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <Link to="/">Ver mas &rarr;</Link>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Obra<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
