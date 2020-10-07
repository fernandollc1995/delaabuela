import React from 'react';
import Card from '@material-ui/core/Card';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './Comentario.css'

function Comentario(props){
    const {comentario} = props;
    return(
        <Card className="tabla--column comentario">
            <TextareaAutosize class="form-nombre"defaultValue={comentario} />
        </Card>
    )
}

export default Comentario;