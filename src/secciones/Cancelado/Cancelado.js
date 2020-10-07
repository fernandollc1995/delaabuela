import React from 'react';
import Card from '@material-ui/core/Card';

function Cancelado(props){
    const {cancelado} = props;
    return(
        <Card className="tabla--column cancelado">
            {cancelado? "Si":"No"}
        </Card>
    )
}

export default Cancelado;