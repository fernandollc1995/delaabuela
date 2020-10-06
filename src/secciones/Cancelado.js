import React from 'react';

function Cancelado(props){
    const {cancelado} = props;
    return(
        <div className="tabla--column cancelado">
            {cancelado? "Si":"No"}
        </div>
    )
}

export default Cancelado;