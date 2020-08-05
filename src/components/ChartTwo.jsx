import React, { useEffect } from "react"
import { Link } from "@reach/router"
import "../styles/App.scss"
import Chart from "chart.js"
import sapal from "../static/sapal.png"
import sierraOne from "../static/sierra-1.jpg"
import sierraTwo from "../static/sierra-2.jpg"
// Components (.jsx) ./components

const ChartTwo = () => {
  useEffect(() => {
    let ctx = document.getElementById("otherChart")
    ctx.height = 65
    ctx.width = 125
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [1, 2],
        datasets: [
          {
            label: "Valor",
            data: [72, 0],
            backgroundColor: [
              "rgba(71, 164, 207, 0.85)",
              "rgba(71, 164, 207, 0.85)",
              "rgba(71, 164, 207, 0.85)",
            ],
            borderColor: [
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
                //Incluye el simbolo del porcentaje
                callback: function (value, index, values) {
                  return value + ".00%"
                },
                beginAtZero: true,
              },
            },
          ],
        },
      },
    })
  }, [])

  return (
    <>
      <h3 className="chart-title-2">Indice General de Cumplimiento</h3>
      <div className="elements-2">
        <div className="buttons-2">
          <Link to="/notas/">
            <span>Notas de Cumplimiento</span>
            <img src={sierraOne} alt="notas de cumplimiento" />
          </Link>
          <Link to="/notas/">
            <span>Notas de Incumplimiento</span>
            <img src={sierraTwo} alt="notas de incumplimiento" />
          </Link>
        </div>
        <div className="chart-container-2">
          {/* <img className="sapal-opacity-2" src={sapal} alt="sapal logo" /> */}
          <canvas id="otherChart"></canvas>
        </div>
      </div>
    </>
  )
}

export default ChartTwo
