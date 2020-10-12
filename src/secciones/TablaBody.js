import React, {useState, useEffect} from 'react';
import ordenes from '../datos/ordenes.json'
import Id from './Id/Id'
import Nombre from './Nombre/Nombre'
import Comentario from './Comentario/Comentario'
import Ordenes from './Ordenes/Ordenes';
import CuentaTotal from './CuentaTotal/CuentaTotal';
import Recibido from './Recibido/Recibido';
import Cancelado from './Cancelado/Cancelado';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: isActive =>( {
        display: 'grid',
        alignItems: 'center',
        margin: '0.2em',
        backgroundColor: isActive? 'steelblue' : 'gray',
        color: 'white',
        padding: '3px',
    }),
});


function Row(props) {
    const { cliente } = props;
    const isActive = cliente.cancelado == null ? true : false ;
    const classes = useStyles(isActive);
    return (
        <div className="tabla--row-cliente">
            <Id estilo={classes.root} id={cliente.id} />
            <Nombre estilo={classes.root} nombre={cliente.nombre} />
            <Comentario estilo={classes.root} comentario={cliente.comentario} />
            <Ordenes estilo={classes.root} ordenes={cliente.ordenes}/>
            <CuentaTotal estilo={classes.root} cuentaTotal={cliente.p_total} />
            <Recibido estilo={classes.root} recibido={cliente.recibido} />
            <Cancelado estilo={classes.root} cancelado={cliente.cancelado} />
        </div>
    )
}



function TablaBody() {
    const [clientes, setClientes] = useState();
    

    return (
        <div className="tabla--body">
            {
                ordenes.data.map((cliente) =>
                    (
                        <Row cliente={cliente}/>
                    )
                )
            }
        </div>
    )

}

export default TablaBody;