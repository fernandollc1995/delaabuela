import React from 'react';

function Recibido(props){
    const {recibido} = props;
    return(
        <div className="tabla--column recibido">
            {recibido? "Si":"No"}
        </div>
    )
}

export default Recibido;