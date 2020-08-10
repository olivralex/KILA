import React, { useState } from "react"
import "../styles/App.scss"
import profile from "../static/construction.jpg"
//Components
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import ChartOne from "../components/ChartOne.jsx"
import ChartTwo from "../components/ChartTwo.jsx"

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
  const [chart] = useState([
    {
      label: "Semana 1",
      data: [80, 80, 40, 40, 0, 0, 40, 80, 100],
    },
    {
      label: "Semana 3",
      data: [30, 70, 50, 70, 10, 0, 50, 75, 90],
    },
  ])

  return (
    <>
      <Header data={chart} />
      {/* Inicio del perfil | Datos Iniciales */}
      <h1>Nombre de la Empresa u Obra</h1>
      <ProfileImg />
      <ProfileBox />
      {/* Primer Gráfica */}
      <ChartOne draw={chart} />
      {/* Segunda Gráfica */}
      <ChartTwo />
      <Footer />
    </>
  )
}

export default Profile
