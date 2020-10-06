import React from 'react';

function TablaHeaderOrden() {
    const headers_orden = ["Orden", "C.Unid", "Ens", "Arr", "May", "Most", "Ket", "Tart", "Aji",
        "Golf", "Ace", "Ocop", "Per"];
    return (
        <div className="tabla--column orden">
            {
                headers_orden.map(header => (
                    <div>{header}</div>
                ))
            }
        </div>
    )
}


function TablaHeader() {
    const headers = ["N", "Cliente", "Comentario","Ordenes", "C.Total", "Recibido", "Cancelado"];

    return (
        <div className="tabla--header">
            {
                headers.map(header => {
                    if(header === "Ordenes"){
                        return(
                        <TablaHeaderOrden/>
                        )
                    }
                    return (
                        <div className="tabla--column">{header}</div>
                    )
                }
                )
            }
        </div>
    )

}

export default TablaHeader;