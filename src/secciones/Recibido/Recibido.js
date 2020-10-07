import React from 'react';
import Card from '@material-ui/core/Card';

function Recibido(props){
    const {recibido} = props;
    return(
        <Card className="tabla--column recibido">
            {recibido? "Si":"No"}
        </Card>
    )
}

export default Recibido;