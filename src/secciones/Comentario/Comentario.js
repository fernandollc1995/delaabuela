import React from 'react';
import Card from '@material-ui/core/Card';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './Comentario.css'

function Comentario(props){
    const {comentario} = props;
    return(
        <Card className={props.estilo}>
            <TextareaAutosize className="form-nombre"defaultValue={comentario} />
        </Card>
    )
}

export default Comentario;