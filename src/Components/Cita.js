import React from 'react'
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text">Dueño: {cita.dueno}</p>
            <p className="card-text">Fecha: {cita.fecha}</p>
            <p className="card-text">Hora: {cita.hora}</p>
            <p className="card-text">Sintomas: {cita.sintomas}</p>

            <button 
                className="btn btn-danger"
                onClick={() => eliminarCita(cita.id)}
            >X</button>
        </div>
    </div>
)

Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default Cita