import React from 'react';
import Card from '@material-ui/core/Card';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './Nombre.css'

function Nombre(props){
    const {nombre} = props;
    return(
        <Card className="tabla--column nombre">
            <TextareaAutosize class="form-nombre"defaultValue={nombre} />
            
        </Card>
    )
}

export default Nombre;