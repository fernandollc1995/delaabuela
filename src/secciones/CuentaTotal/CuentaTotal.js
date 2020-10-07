import React from 'react';
import Card from '@material-ui/core/Card';

function CuentaTotal(props){
    const {cuentaTotal} = props;
    return(
        <Card className="tabla--column cuenta-total">
            {cuentaTotal}
        </Card>
    )
}

export default CuentaTotal;