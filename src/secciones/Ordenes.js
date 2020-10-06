import React from 'react';
import './ordenes.css';


function Orden(props){
    const {orden} = props;
    return(
        <div className="orden">
            <div>{orden.orden}</div>
            <div>{orden.precio}</div>
            <div>{orden.ensalada?"Si" :"No"}</div>
            <div>{orden.arroz?"Si" :"No"}</div>
            <div>{orden.mayonesa?"Si" :"No"}</div>
            <div>{orden.mostaza?"Si" :"No"}</div>
            <div>{orden.ketchup?"Si" :"No"}</div>
            <div>{orden.tartara?"Si" :"No"}</div>
            <div>{orden.aji?"Si" :"No"}</div>
            <div>{orden.golf?"Si" :"No"}</div>
            <div>{orden.aceituna?"Si" :"No"}</div>
            <div>{orden.ocopa?"Si" :"No"}</div>
            <div>{orden.perejil?"Si" :"No"}</div>
        </div>
    )
}



function Ordenes(props) {
    const { ordenes } = props;
    return (
        <div className="tabla--column ordenes">
            {ordenes.map(orden =>
                (
                    <Orden orden={orden}/>
                )
            )
            }
        </div>
    )
}

export default Ordenes;


