import React from 'react'
import PropTypes from 'prop-types'

//COMPONENTES
import Cita from './Cita'

const ListaCitas = ({citas, eliminarCita}) => {

    //Imprimir mensaje si hay o no
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : ''

    return(
        <div className="card">
            <div className="card-header text-center">
                <h2>Administra las citas aqui</h2>
            </div>
            <div className="card-body">
                <h5 className="text-center">{mensaje}</h5>
                {citas.map(cita => (
                    <Cita
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}
                    />
                ))}
            </div>
        </div>
    )
}

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default ListaCitas