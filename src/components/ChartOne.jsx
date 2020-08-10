import React, { useEffect } from "react"
import { Link } from "@reach/router"
import "../styles/App.scss"
import Chart from "chart.js"
import sapal from "../static/sapal.png"
import sierraOne from "../static/sierra-1.jpg"
import sierraTwo from "../static/sierra-2.jpg"
// Components (.jsx) ./components

const ChartOne = props => {
  useEffect(() => {
    let ctx = document.getElementById("myChart")
    ctx.height = 95
    ctx.width = 165
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Registro de Personal de IMSS",
          "Verificación Médica incluido COVID",
          "Equipo de protección personal",
          "Certificados DC3 en actividades",
          "Calidad de la maquinaria y herramienta",
          "Uso adecuado",
          "Mantenimiento",
          "Limpieza y Orden",
          "Procesos Constructivos",
        ],
        datasets: [
          {
            label: props.draw[0].label,
            data: props.draw[0].data,
            backgroundColor: [
              "rgba(71, 164, 207, 0.85)",
              "rgba(71, 164, 207, 0.85)",
              "rgba(71, 164, 207, 0.85)",
              "rgba(71, 164, 207, 0.85)",
              "rgba(71, 164, 207, 0.85)",
              "rgba(71, 164, 207, 0.85)",
              "rgba(71, 164, 207, 0.85)",
              "rgba(71, 164, 207, 0.85)",
              "rgba(71, 164, 207, 0.85)",
            ],
            borderColor: [
              "rgba(38, 138, 192, 1)",
              "rgba(38, 138, 192, 1)",
              "rgba(38, 138, 192, 1)",
              "rgba(38, 138, 192, 1)",
              "rgba(38, 138, 192, 1)",
              "rgba(38, 138, 192, 1)",
              "rgba(38, 138, 192, 1)",
              "rgba(38, 138, 192, 1)",
              "rgba(38, 138, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          labels: {
            fontColor: "black",
            fontFamily: "Arial, sans-serif",
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                //Incluye el símbolo del porcentaje
                callback: function (value, index, values) {
                  return value + "%"
                },
                beginAtZero: true,
              },
            },
          ],
        },
      },
    })
  }, [props])

  return (
    <>
      <h3 className="chart-title">Cumplimiento Semanal por Factores</h3>
      <div className="elements">
        <div className="buttons">
          <Link to="/notas/">
            <span>Notas de Cumplimiento</span>
            <img src={sierraOne} alt="notas de cumplimiento" />
          </Link>
          <Link to="/notas/">
            <span>Notas de Incumplimiento</span>
            <img src={sierraTwo} alt="notas de incumplimiento" />
          </Link>
        </div>
        <div className="chart-container">
          {/* <img className="sapal-opacity" src={sapal} alt="sapal logo" /> */}
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  )
}

export default ChartOne
