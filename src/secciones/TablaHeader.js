import React from 'react';
import Card from '@material-ui/core/Card';
function TablaHeaderOrden() {
    const headers_orden = ["Orden", "C.Unid", "Ens", "Arr", "May", "Most", "Ket", "Tart", "Aji",
        "Golf", "Ace", "Ocop", "Per"];
    return (
        <div className="orden">
            {
                headers_orden.map(header => (
                    <Card>{header}</Card>
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
                        <Card className="tabla--column">{header}</Card>
                    )
                }
                )
            }
        </div>
    )

}

export default TablaHeader;