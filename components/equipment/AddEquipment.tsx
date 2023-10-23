import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type Props = {
    setNewEquipment: React.Dispatch<React.SetStateAction<any>>;
    newEquipment: any;
    handleAddEquipment: () => void;
};

function AddEquipement({ setNewEquipment, newEquipment, handleAddEquipment }: Props) {
    const handleLimpiarDatos = () => {
        setNewEquipment({
            name: '',
            model: "",
            brand: '',
            key: '',
            nationalKey: '',
            status: '',
            centroDeSalud: '',
            description: '',
        });
    };

    return (
        <div className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-3xl font-semibold p-4 text-center">Nuevo Equipo Tecnologico</h2>
            <form className="grid grid-cols-2 gap-6 p-4">
                <TextField
                    variant="outlined"
                    label="Nombre"
                    fullWidth
                    value={newEquipment.name}
                    onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Marca"
                    fullWidth
                    value={newEquipment.brand}
                    onChange={(e) => setNewEquipment({ ...newEquipment, brand: e.target.value })}
                />
                <TextField
                    variant="outlined"
                    label="Modelo"
                    fullWidth
                    value={newEquipment.model}
                    onChange={(e) => setNewEquipment({ ...newEquipment, model: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Descripcion"
                    fullWidth
                    value={newEquipment.description}
                    onChange={(e) => setNewEquipment({ ...newEquipment, description: e.target.value })}
                />
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">Operativo</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        label="Operativo"
                        value={newEquipment.status}
                        onChange={(e) => setNewEquipment({ ...newEquipment, status: e.target.value })}
                    >
                        <MenuItem value="1">Si	</MenuItem>
                        <MenuItem value="2">No	</MenuItem>

                    </Select>
                </FormControl>

                <TextField
                    variant="outlined"
                    label="Condicion"
                    fullWidth
                    value={newEquipment.condition}
                    onChange={(e) => setNewEquipment({ ...newEquipment, condition: e.target.value })}
                />
                <TextField
                    variant="outlined"
                    label="Serial"
                    fullWidth
                    value={newEquipment.key}
                    onChange={(e) => setNewEquipment({ ...newEquipment, key: e.target.value })}
                />
                <TextField
                    variant="outlined"
                    label="Bien Nacional"
                    fullWidth
                    value={newEquipment.nationalKey}
                    onChange={(e) => setNewEquipment({ ...newEquipment, nationalKey: e.target.value })}
                />

                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">Centro de Salud</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        label="Centro de Salud"
                        value={newEquipment.centroDeSalud}
                        onChange={(e) => setNewEquipment({ ...newEquipment, centroDeSalud: e.target.value })}
                    >
                        <MenuItem value="1">HOSPITAL GENERAL DEL SUR Dr. PEDRO ITURBE	</MenuItem>
                        <MenuItem value="2">SERVICIO AUTÓNOMO HOSPITAL UNIVERSITARIO DE MARACAIBO	</MenuItem>
                        <MenuItem value="3">HOSPITAL COROMOTO</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">Servicio Medico</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        label="Centro de Salud"
                        value={newEquipment.centroDeSalud}
                        onChange={(e) => setNewEquipment({ ...newEquipment, centroDeSalud: e.target.value })}
                    >
                        <MenuItem value="1">HOSPITAL GENERAL DEL SUR Dr. PEDRO ITURBE	</MenuItem>
                        <MenuItem value="2">SERVICIO AUTÓNOMO HOSPITAL UNIVERSITARIO DE MARACAIBO	</MenuItem>
                        <MenuItem value="3">HOSPITAL COROMOTO</MenuItem>
                        <MenuItem value="1">HOSPITAL GENERAL DEL SUR Dr. PEDRO ITURBE	</MenuItem>
                        <MenuItem value="2">SERVICIO AUTÓNOMO HOSPITAL UNIVERSITARIO DE MARACAIBO	</MenuItem>
                        <MenuItem value="3">HOSPITAL COROMOTO</MenuItem>
                    </Select>
                </FormControl>

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
                        onClick={handleAddEquipment}
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

export default AddEquipement;
