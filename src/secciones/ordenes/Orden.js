import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Orden.css'

function Orden({ orden }) {
    return (
        <Card className="card-orden">
            <Autocomplete
                size="small"
                options={listOrdenes}
                defaultValue={{label:orden}}
                getOptionLabel={(option) => option.label}
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
    )
}

export default Orden;

const listOrdenes = [
    { code: 'BRPI50', label: 'Pierna 5.00', precio: '5.00' },
    { code: 'BRPE50', label: 'Pecho 5.00', precio: '5.00' },
    { code: 'BRAL40', label: 'Alita 4.00', precio: '4.00' },
    { code: 'BTTR35', label: 'Trocitos 3.50', precio: '3.5' },
    { code: 'BTTR40', label: 'Trocitos 4.00', precio: '4.00' },
    { code: 'BTTR50', label: 'Trocitos 5.00', precio: '5.00' },
    { code: 'ABUE35', label: 'Hamb. Abuela', precio: '3.50' },
    { code: 'CHRZ40', label: 'Chorizo', precio: '3.50' }
]