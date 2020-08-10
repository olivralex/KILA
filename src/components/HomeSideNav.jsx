import React from "react"
import { Link } from "@reach/router"
import user from "../static/construction.jpg"
import trees from "../static/trees-1.jpg"
import kila from "../static/kila.png"

const HomeSideNav = () => {
  return (
    <div>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={trees} width="300" height="300" alt="background" />
            </div>
            <div className="user-img">
              <Link to="/perfil/">
                <img className="circle" src={user} alt="user" />
              </Link>
              <img className="kila-logo" src={kila} alt="kila-logo" />
            </div>
            <Link to="/perfil/">
              <span className="white-text usuario">Nombre de Usuario</span>
            </Link>
            <Link to="/perfil/">
              <span className="white-text email obra">Nombre de la Obra</span>
            </Link>
          </div>
        </li>
        <li>
          <span className="contract">
            <i className="material-icons">book</i>Número de Contrato: 546321
          </span>
        </li>
        <li>
          <span className="contract">
            <i className="material-icons">assessment</i>Indice de Cumplimiento:
            1
          </span>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <span>
            <Link className="goto" to="/perfil/">
              Ver Perfil de Mi Empresa
              <span role="img" aria-label="tree">
                &nbsp;🌳
              </span>
            </Link>
          </span>
        </li>
        <li>
          <span>
            <Link className="logout" to="/">
              <i className="material-icons">reply</i>Cerrar Sesión
            </Link>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default HomeSideNav
