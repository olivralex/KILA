import React, { useEffect } from "react"
import M from "materialize-css"
import "../styles/App.scss"
import evidencia from "../static/construction_2.jpg"
import imagen from "../static/construction.jpg"
//Components
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const Compliance = () => {
  useEffect(() => {
    let elems = document.querySelectorAll(".materialboxed")
    M.Materialbox.init(elems, 200)

    let elem = document.querySelector(".materialboxed")
    let instance = M.Materialbox.getInstance(elem)

    elem.addEventListener("click", () => {
      instance.open()
    })
  }, [])

  return (
    <>
      <Header />
      {/* Notas de Cumplimiento */}
      <div className="note-compliance">
        <h1>Notas de Cumplimiento</h1>
        <div className="note-container">
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              porttitor lectus sed ex fermentum, tincidunt ullamcorper sem
              pellentesque. Sed nec pharetra dolor. Nullam ut accumsan dolor, a
              cursus urna. Maecenas convallis congue pulvinar.
            </li>
          </ul>
        </div>
        <div className="evidences">
          <div className="evidence">
            <img
              className="evidence-img materialboxed"
              src={evidencia}
              alt="evidencia"
            />
            <img
              className="evidence-img materialboxed"
              src={evidencia}
              alt="evidencia"
            />
            <img
              className="evidence-img materialboxed"
              src={evidencia}
              alt="evidencia"
            />
          </div>
          <div className="evidence">
            <img
              className="evidence-img materialboxed"
              src={evidencia}
              alt="evidencia"
            />
            <img
              className="evidence-img materialboxed"
              src={evidencia}
              alt="evidencia"
            />
            <img
              className="evidence-img materialboxed"
              src={evidencia}
              alt="evidencia"
            />
          </div>
        </div>
      </div>
      {/* Notas de Incumplimiento */}
      <div className="note-compliance">
        <h1>Notas de Incumplimiento</h1>
        <div className="note-container">
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              porttitor lectus sed ex fermentum, tincidunt ullamcorper sem
              pellentesque. Sed nec pharetra dolor. Nullam ut accumsan dolor, a
              cursus urna. Maecenas convallis congue pulvinar.
            </li>
          </ul>
        </div>
        <div className="evidences">
          <div className="evidence">
            <img
              className="evidence-img materialboxed"
              src={imagen}
              alt="evidencia"
            />
            <img
              className="evidence-img materialboxed"
              src={imagen}
              alt="evidencia"
            />
            <img
              className="evidence-img materialboxed"
              src={imagen}
              alt="evidencia"
            />
          </div>
          <div className="evidence">
            <img
              className="evidence-img materialboxed"
              src={imagen}
              alt="evidencia"
            />
            <img
              className="evidence-img materialboxed"
              src={imagen}
              alt="evidencia"
            />
            <img
              className="evidence-img materialboxed"
              src={imagen}
              alt="evidencia"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Compliance
