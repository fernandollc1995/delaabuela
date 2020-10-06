import React from 'react';

function CuentaTotal(props){
    const {cuentaTotal} = props;
    return(
        <div className="tabla--column cuenta-total">
            {cuentaTotal}
        </div>
    )
}

export default CuentaTotal;