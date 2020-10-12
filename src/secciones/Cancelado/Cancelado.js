import React from 'react';
import Card from '@material-ui/core/Card';

function Cancelado(props){
    const {cancelado} = props;
    return(
        <Card className={props.estilo}>
            {cancelado? "Si":"No"}
        </Card>
    )
}

export default Cancelado;