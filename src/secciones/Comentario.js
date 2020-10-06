import React from 'react';

function Comentario(props){
    const {comentario} = props;
    return(
        <div className="tabla--column comentario">
            {comentario}
        </div>
    )
}

export default Comentario;