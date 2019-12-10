import React, { Component } from 'react'
import uuid from 'uuid'

export default class NuevaCita extends Component {
    
    state = { 
       cita : {
           mascota: '',
           dueno: '',
           fecha: '',
           hora: '',
           sintomas: ''

       },
       error: false
    }

    //cuando el usuario escribe em los inputs
    handleChange = e => {

        //colocar lo que el usuario escribe en el state 
        this.setState({
            cita : {
                //cuando estes escribiendo en el nombre de la mascota se va a escribir en el state de arriba en mascota segun su name
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    //cuando el usuario envia el formulario
    handleSubmit = e => {
        e.preventDefault()

        //extraer los valores del state
        const {mascota, dueno, fecha, hora, sintomas} = this.state.cita

        //Validar campos
        if(mascota === '' || dueno === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error: true
            })
            //detener ejecucion
            return
        }

        //generar objecto con los datos
        /* npm install --save uuid */
        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid();

        //agregar al state de App.js
        this.props.crearNuevaCita(nuevaCita)
    }

    render() {
        return (
            <div className="card my-3 shadow">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llenar el formulario
                    </h2>
                    
                    <form
                        onSubmit={this.handleSubmit}
                    >

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Mascota:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota..."
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Dueño:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre dueño..."
                                    name="dueno"
                                    onChange={this.handleChange}
                                    value={this.state.cita.dueno}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha:</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora:</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas:</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Sintomas que presenta..."
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                    ></textarea>
                            </div>
                        </div>

                        <input type="submit" className="btn btn-success btn-block" value="Agregar"/>

                    </form>
                </div>
            </div>
        )
    }
}
