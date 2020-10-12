import React from 'react';
import Card from '@material-ui/core/Card';

function Id(props){
    return(
        <Card className={props.estilo}>
            {props.id}
        </Card>
    )
}

export default Id;