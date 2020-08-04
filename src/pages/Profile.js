import React from "react"
import { Link } from "@reach/router"
import "../styles/App.scss"
import profile from "../static/construction.jpg"
//Components
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const ProfileImg = () => {
  return (
    <div className="profile-container">
      <img className="profile-img" src={profile} alt="profile-img" />
    </div>
  )
}

const ProfileBox = () => {
  return (
    <div className="box">
      <div className="category-1">
        <p className="category-mobile">
          Supervisor: <span>Joaquín Gutierrez Ortega</span>
        </p>
        <p>
          Avance Físico: <span>23%</span>
        </p>
      </div>
      <div className="category-2">
        <p>
          Supervisor en seguridad e higiene: <span>Ariana Gómez Cruz</span>
        </p>
        <p>
          Avance Fínanciero: <span>28%</span>
        </p>
      </div>
      <div className="category-3">
        <p>
          Número de Contrato: <span>15432</span>
        </p>
        <p>
          Indice de Cumplimiento: <span>2</span>
        </p>
      </div>
      <div className="category-4">
        <p>
          Otra Información: <span>Contenido</span>
        </p>
        <p>
          Porcentaje de Avance: <span>25%</span>
        </p>
      </div>
    </div>
  )
}

const Profile = () => {
  return (
    <>
      <Header />
      <h1>Nombre de la Empresa | Nombre de la Obra</h1>
      <ProfileImg />
      <ProfileBox />
      <Footer />
    </>
  )
}

export default Profile
