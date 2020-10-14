import React,{useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Orden.css'
import db from "../../firebase";


function Orden(props) {
    const { orden } = props;
    const [listOrdenes, setListOrdenes] = useState([]);

    useEffect(() => {
        db.collection("productos")
            .onSnapshot(function (querySnapshot) {
                let productos = [];
                querySnapshot.forEach(function (doc) {
                    let datos = doc.data();
                    datos['id']=doc.id
                    productos.push(datos);
                });
                setListOrdenes(productos);
                console.log(productos);
            });
    }, []);


    return orden?(
        <Card className={props.estilo}>
            <Autocomplete
                size="small"
                options={listOrdenes? listOrdenes: [] }
                defaultValue={{ etiqueta: orden }}
                getOptionLabel={(option) => option.etiqueta}
                getOptionSelected={(option, value) => option.etiqueta === value.etiqueta}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Elige pedido"
                        variant="standard"
                        size="small"
                    />
                )}
            />

        </Card>
    ) : "no hay orden"
}

export default Orden;

// const listOrdenes2 = [
//     { code: 'BRPI50', etiqueta: 'Pierna 5.00', precio: '5.00' },
//     { code: 'BRPE50', etiqueta: 'Pecho 5.00', precio: '5.00' },
//     { code: 'BRAL40', etiqueta: 'Alita 4.00', precio: '4.00' },
//     { code: 'BTTR35', etiqueta: 'Trocitos 3.50', precio: '3.5' },
//     { code: 'BTTR40', etiqueta: 'Trocitos 4.00', precio: '4.00' },
//     { code: 'BTTR50', etiqueta: 'Trocitos 5.00', precio: '5.00' },
//     { code: 'ABUE35', etiqueta: 'Hamb. Abuela', precio: '3.50' },
//     { code: 'CHRZ40', etiqueta: 'Chorizo 4.00', precio: '4.00' }
// ]