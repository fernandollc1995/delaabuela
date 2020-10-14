import React,{useState}from 'react';
import './ordenes.css';
import Card from '@material-ui/core/Card';
import Orden from '../Orden/Orden';

function RowOrden(props){
    const {orden} = props;
    return orden? (
        <div className="orden">
            <Orden orden={orden.orden} estilo={props.estilo}/>
            <Card className={props.estilo}>{orden.precio}</Card>
            <Card className={props.estilo}>{orden.ensalada?"Si" :"No"}</Card>
            <Card className={props.estilo}>{orden.arroz?"Si" :"No"}</Card>
            <Card className={props.estilo}>{orden.mayonesa?"Si" :"No"}</Card>
            <Card className={props.estilo}>{orden.mostaza?"Si" :"No"}</Card>
            <Card className={props.estilo}>{orden.ketchup?"Si" :"No"}</Card>
            <Card className={props.estilo}>{orden.tartara?"Si" :"No"}</Card>
            <Card className={props.estilo}>{orden.aji?"Si" :"No"}</Card>
            <Card className={props.estilo}>{orden.golf?"Si" :"No"}</Card>
            <Card className={props.estilo}>{orden.aceituna?"Si" :"No"}</Card>
            <Card className={props.estilo}>{orden.ocopa?"Si" :"No"}</Card>
            <Card className={props.estilo}>{orden.perejil?"Si" :"No"}</Card>
        </div>
    ) :"No hay esa orden"
}



function Ordenes(props) {
    const [ordenes, setOrdenes] = useState(props.ordenes)
    // const { ordenes } = props;
    return ordenes? (
        <div className="ordenes">
            {ordenes.map(orden =>
                (
                    <RowOrden orden={orden} estilo={props.estilo}/>
                )
            )
            }
        </div>
    ): "No hay ordenes del clientes"
}

export default Ordenes;


