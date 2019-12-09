import React, { Component } from 'react'

export default class NuevaCita extends Component {
    
    state = { 
        
    }

    render() {
        return (
            <div className="card my-3 shadow">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llenar el formulario
                    </h2>
                    
                    <form>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Mascota:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota..."
                                    name="mascota"
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
