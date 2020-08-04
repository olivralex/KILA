import React, { useEffect } from "react"
import "../styles/App.scss"
import Chart from "chart.js"
// Components (.jsx) ./components

const ChartOne = () => {
  useEffect(() => {
    let ctx = document.getElementById("myChart")
    ctx.height = 110
    ctx.width = 160
    let myChart = new Chart(ctx, {
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
            label: "Campos",
            data: [80, 80, 40, 40, 0, 0, 40, 80, 100],
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
                //Incluye el simbolo del porcentaje
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
  }, [])

  return (
    <div>
      <h3 className="chart-title">Cumplimiento Semanal por Factores</h3>
      <div className="chart-container">
        <div className="buttons">
          <button>Notas de Cumplimiento</button>
          <button>Notas de Incumplimiento</button>
        </div>
        <canvas id="myChart"></canvas>
      </div>
    </div>
  )
}

export default ChartOne
