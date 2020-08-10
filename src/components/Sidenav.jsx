import React, { useState } from "react"
import { Link } from "@reach/router"
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import user from "../static/construction.jpg"
import trees from "../static/trees-1.jpg"
import kila from "../static/kila.png"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}))

const Sidenav = props => {
  const classes = useStyles()
  const [week, setWeek] = useState("")
  const [value, setValue] = useState(props.data)

  const handleChange = event => {
    setWeek(event.target.value)
  }

  // Función para añadir gráfica
  const addChart = () => {
    setValue(obj => [
      ...obj,
      {
        label: "Semana 2",
        data: [30, 70, 50, 70, 10, 0, 50, 75, 90],
      },
    ])
    console.log(value)
  }

  // Función para remover gráfica
  const removeChart = () => {
    console.log("I should remove things")
  }

  return (
    <>
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
          <a href="#!" className="subheader">
            Opciones
          </a>
        </li>
        <li className="weeks">
          <FormControl className={classes.formControl}>
            <Select
              value={week}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Seleccionar Semana</em>
              </MenuItem>
              {props.weeks.map((item, key) => (
                <MenuItem key={key} value={item}>
                  Semana {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </li>
        <li>
          <button onClick={addChart} className="options-1">
            <span>Añadir Semana +</span>
          </button>
        </li>
        <li>
          <button onClick={removeChart} className="options-2">
            <span>Eliminar Semana -</span>
          </button>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <span className="logout">
            <i className="material-icons">reply</i>Cerrar Sesión
          </span>
        </li>
      </ul>
      <a href="#!" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </>
  )
}

export default Sidenav
