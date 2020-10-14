import React, { useState, useEffect } from 'react';
import ordenes from '../datos/ordenes.json'
import Id from './Id/Id'
import Nombre from './Nombre/Nombre'
import Comentario from './Comentario/Comentario'
import Ordenes from './Ordenes/Ordenes';
import CuentaTotal from './CuentaTotal/CuentaTotal';
import Recibido from './Recibido/Recibido';
import Cancelado from './Cancelado/Cancelado';
import { makeStyles } from '@material-ui/core/styles';
import db from "../firebase";


const useStyles = makeStyles({
    root: isActive => ({
        display: 'grid',
        alignItems: 'center',
        margin: '0.2em',
        backgroundColor: isActive ? 'steelblue' : 'gray',
        color: 'white',
        padding: '3px',
    }),
});


function Row(props) {
    const [ cliente, setCliente] = useState(props.cliente)
    // const { cliente } = props;
    const isActive = cliente.cancelado == null ? true : false;
    const classes = useStyles(isActive);
    return cliente? (
        <div className="tabla--row-cliente">
            <Id estilo={classes.root} id={cliente.id} />
            <Nombre estilo={classes.root} nombre={cliente.nombre} />
            <Comentario estilo={classes.root} comentario={cliente.comentario} />
            <Ordenes estilo={classes.root} ordenes={cliente.ordenes} />
            <CuentaTotal estilo={classes.root} cuentaTotal={cliente.p_total} />
            <Recibido estilo={classes.root} recibido={cliente.recibido} />
            <Cancelado estilo={classes.root} cancelado={cliente.cancelado} />
        </div>
    ) :"No hay cliente"
}



function TablaBody() {
    const [clientes, setClientes] = useState();
    useEffect(() => {

        const db_clientes = db.collection("pedidos").doc("48KyXajWGqvJwJUhsYcI").collection("datos");
        db_clientes.onSnapshot(function (doc) {
            let clientes_object = [];
            doc.forEach((cliente) => {
                let cliente_object = {};
                cliente_object = cliente.data();
                cliente_object.id = cliente.id;
                let cliente_ordenes_object = [];
                db_clientes.doc(cliente.id).collection("ordenes").get().then(function (doc2) {
                    doc2.forEach( orden =>{
                        let orden_object = {};
                        orden_object = orden.data();
                        orden_object.id = orden.id;
                        cliente_ordenes_object.push(orden_object);
                    })
                })
                cliente_object.ordenes = cliente_ordenes_object;
                clientes_object.push(cliente_object);
            })
            setClientes(clientes_object);
            console.log(clientes_object);
        })
}, []);

return (
    <div className="tabla--body">
        {   
            clientes?
            (clientes.map((cliente) =>
                (
                    <Row cliente={cliente} />
                )
            )) : "No hay datos"
        }
    </div>
)

}

export default TablaBody;