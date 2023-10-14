import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type Props = {
    setNuevoCentro: React.Dispatch<React.SetStateAction<any>>;
    nuevoCentro: any;
    handleAddCentro: () => void;
};

function AddCareCenter({ setNuevoCentro, nuevoCentro, handleAddCentro }: Props) {
    const handleLimpiarDatos = () => {
        // Restablecer todos los valores del nuevo centro a su estado inicial
        setNuevoCentro({
            nombre: '',
            tipo: '',
            municipio: '',
            direccion: '',
            director: '',
            telefonoResponsable: '',
        });
    };

    return (
        <div className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-3xl font-semibold p-4 text-center">Nuevo Centro de Salud</h2>

            <form className="grid grid-cols-2 gap-6 p-4">
                <TextField
                    variant="outlined"
                    label="Nombre"
                    fullWidth
                    value={nuevoCentro.nombre}
                    onChange={(e) => setNuevoCentro({ ...nuevoCentro, nombre: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Tipo"
                    fullWidth
                    value={nuevoCentro.tipo}
                    onChange={(e) => setNuevoCentro({ ...nuevoCentro, tipo: e.target.value })}
                />

                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">Municipio</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        label="Municipio"
                        value={nuevoCentro.municipio}
                        onChange={(e) => setNuevoCentro({ ...nuevoCentro, municipio: e.target.value })}
                    >
                        <MenuItem value="Maracaibo">Maracaibo</MenuItem>
                        <MenuItem value="San Francisco">San Francisco</MenuItem>
                        <MenuItem value="Ciudad Ojeda">Ciudad Ojeda</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    variant="outlined"
                    label="Dirección"
                    fullWidth
                    value={nuevoCentro.direccion}
                    onChange={(e) => setNuevoCentro({ ...nuevoCentro, direccion: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Director"
                    fullWidth
                    value={nuevoCentro.director}
                    onChange={(e) => setNuevoCentro({ ...nuevoCentro, director: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Número de Teléfono"
                    fullWidth
                    value={nuevoCentro.telefonoResponsable}
                    onChange={(e) => setNuevoCentro({ ...nuevoCentro, telefonoResponsable: e.target.value })}
                />

                <div className="col-span-2 flex space-x-2">
                    <Button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        sx={{ width: '100%' }}
                        variant="contained"
                        endIcon={<AccessTimeFilledIcon />}
                        onClick={handleLimpiarDatos}
                    >
                        Limpiar Datos
                    </Button>
                    <Button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        sx={{ width: '100%' }}
                        onClick={handleAddCentro}
                        variant="contained"
                        endIcon={<AddCircleOutlineIcon />}
                    >
                        Agregar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default AddCareCenter;
