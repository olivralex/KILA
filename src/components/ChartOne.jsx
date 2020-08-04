import React, { useEffect } from "react"
import "../styles/App.scss"
import Chart from "chart.js"
// Components (.jsx) ./components

const ChartOne = () => {
  useEffect(() => {
    let ctx = document.getElementById("myChart")
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Blue",
          "Blue",
          "Blue",
          "Blue",
          "Blue",
          "Blue",
          "Blue",
          "Blue",
          "Blue",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [8, 8, 4, 4, 0, 0, 4, 8, 4],
            backgroundColor: [
              "rgba(71, 164, 207, 0.75)",
              "rgba(71, 164, 207, 0.75)",
              "rgba(71, 164, 207, 0.75)",
              "rgba(71, 164, 207, 0.75)",
              "rgba(71, 164, 207, 0.75)",
              "rgba(71, 164, 207, 0.75)",
              "rgba(71, 164, 207, 0.75)",
              "rgba(71, 164, 207, 0.75)",
              "rgba(71, 164, 207, 0.75)",
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
        scales: {
          yAxes: [
            {
              ticks: {
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
      <h1 className="chart-title">Cumplimiento Semanal por Factores</h1>
      <div className="chart-container">
        <canvas id="myChart" width="50" height="50"></canvas>
      </div>
    </div>
  )
}

export default ChartOne
