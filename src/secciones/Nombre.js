import React from 'react';

function Nombre(props){
    const {nombre} = props;
    return(
        <div className="tabla--column nombre">
            {nombre}
        </div>
    )
}

export default Nombre;