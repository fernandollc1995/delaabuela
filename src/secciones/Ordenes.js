import React from 'react';
import './ordenes.css';
import Card from '@material-ui/core/Card';
import Orden from './ordenes/Orden';

function RowOrden(props){
    const {orden} = props;
    return(
        <div className="orden">
            <Orden orden={orden.orden}/>
            <Card>{orden.precio}</Card>
            <Card>{orden.ensalada?"Si" :"No"}</Card>
            <Card>{orden.arroz?"Si" :"No"}</Card>
            <Card>{orden.mayonesa?"Si" :"No"}</Card>
            <Card>{orden.mostaza?"Si" :"No"}</Card>
            <Card>{orden.ketchup?"Si" :"No"}</Card>
            <Card>{orden.tartara?"Si" :"No"}</Card>
            <Card>{orden.aji?"Si" :"No"}</Card>
            <Card>{orden.golf?"Si" :"No"}</Card>
            <Card>{orden.aceituna?"Si" :"No"}</Card>
            <Card>{orden.ocopa?"Si" :"No"}</Card>
            <Card>{orden.perejil?"Si" :"No"}</Card>
        </div>
    )
}



function Ordenes(props) {
    const { ordenes } = props;
    return (
        <div className="ordenes">
            {ordenes.map(orden =>
                (
                    <RowOrden orden={orden}/>
                )
            )
            }
        </div>
    )
}

export default Ordenes;


