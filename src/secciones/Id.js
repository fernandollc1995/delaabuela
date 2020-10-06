import React from 'react';

function Id(props){
    const {id} = props;
    return(
        <div className="tabla--column id">
            {id}
        </div>
    )
}

export default Id;