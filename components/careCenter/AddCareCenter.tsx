import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type Props = {
    setNewCenter: React.Dispatch<React.SetStateAction<any>>;
    newCenter: any;
    handleAddCenter: () => void;
};

function AddCareCenter({ setNewCenter, newCenter, handleAddCenter }: Props) {
    const handleLimpiarDatos = () => {
        // Restablecer todos los valores del nuevo centro a su estado inicial
        setNewCenter({
            name: '',
            typeCenter: 0,
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
                    value={newCenter.name}
                    onChange={(e) => setNewCenter({ ...newCenter, name: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Tipo"
                    fullWidth
                    value={newCenter.typeCenter}
                    onChange={(e) => setNewCenter({ ...newCenter, typeCenter: e.target.value })}
                />

                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">Municipio</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        label="Municipio"
                        value={newCenter.municipio}
                        onChange={(e) => setNewCenter({ ...newCenter, municipio: e.target.value })}
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
                    value={newCenter.direccion}
                    onChange={(e) => setNewCenter({ ...newCenter, direccion: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Director"
                    fullWidth
                    value={newCenter.director}
                    onChange={(e) => setNewCenter({ ...newCenter, director: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Número de Teléfono"
                    fullWidth
                    value={newCenter.telefonoResponsable}
                    onChange={(e) => setNewCenter({ ...newCenter, telefonoResponsable: e.target.value })}
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
                        onClick={handleAddCenter}
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
