import React, { Component } from 'react'

/* COMPONENTES */
import Header from './Components/Header'
import NuevaCita from './Components/NuevaCita'

export default class App extends Component {
  
  state ={
    citas: []
  }

  crearNuevaCita = datos => {
    // copiar el state actual
    const citas = [...this.state.citas, datos]

    // agregar el nuevo state
    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo="Administrador Pacientes Veterinaria"
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita = {this.crearNuevaCita}
            />  
          </div>  
        </div>
      </div>
    )
  }
}

