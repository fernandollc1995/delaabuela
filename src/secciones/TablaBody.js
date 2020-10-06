import React from 'react';
import ordenes from '../datos/ordenes.json'
import Id from './Id'
import Nombre from './Nombre'
import Comentario from './Comentario'
import Ordenes from './Ordenes';
import CuentaTotal from './CuentaTotal';
import Recibido from './Recibido';
import Cancelado from './Cancelado';

function Row(props) {
    const { cliente } = props
    return (
        <div className="tabla--row-cliente">
            <Id id={cliente.id} />
            <Nombre nombre={cliente.nombre} />
            <Comentario comentario={cliente.comentario} />
            <Ordenes ordenes={cliente.ordenes}/>
            <CuentaTotal cuentaTotal={cliente.p_total}/>
            <Recibido recibido={cliente.recibido}/>
            <Cancelado cancelado={cliente.cancelado}/>
        </div>
    )
}



function TablaBody() {
    // const ordenes = ordenes;
    return (
        <div className="tabla--body">
            {
                ordenes.data.map((cliente) =>
                    (
                        <Row cliente={cliente} />
                    )
                )
            }
        </div>
    )

}

export default TablaBody;