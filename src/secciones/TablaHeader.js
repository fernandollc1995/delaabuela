import React from 'react';

function TablaHeader (){
    const headers=["N°","Cliente","Comentario","Orden","Ens/Arr","May","Most","Ket","Tart","Aji",
    "Golf","Ace","Ocop","Per","C.Unid","C.Total","Recibido","Cancelado"]
    return(
        <div className="tabla--header">
            {
                headers.map( header=>{
                    return(
                        <div>{header}</div>
                    )
                }
                    
                )
            }
        </div>
    )

}

export default TablaHeader;