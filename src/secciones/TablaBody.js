import React from 'react';
import ordenes from '../datos/ordenes.json'
import Id from './Id/Id'
import Nombre from './Nombre/Nombre'
import Comentario from './Comentario/Comentario'
import Ordenes from './Ordenes/Ordenes';
import CuentaTotal from './CuentaTotal/CuentaTotal';
import Recibido from './Recibido/Recibido';
import Cancelado from './Cancelado/Cancelado';

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