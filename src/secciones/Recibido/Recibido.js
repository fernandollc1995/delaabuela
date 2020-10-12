import React from 'react';
import Card from '@material-ui/core/Card';

function Recibido(props){
    const {recibido} = props;
    return(
        <Card className={props.estilo}>
            {recibido? "Si":"No"}
        </Card>
    )
}

export default Recibido;