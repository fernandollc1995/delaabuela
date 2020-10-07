import React from 'react';
import Card from '@material-ui/core/Card';

function Id(props){
    const {id} = props;
    return(
        <Card className="tabla--column id">
            {id}
        </Card>
    )
}

export default Id;