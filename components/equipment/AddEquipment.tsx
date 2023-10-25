"use client"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Equipments } from '@/types/Equipment';
import { initializeEquipmment } from '@/utils/Equipments/InitializeEquipment';
import { getCareCenters } from '@/utils/carecentersService';
import LoaderForm from '../Loaders/LoaderForm';

type Props = {
    handleAddEquipment: (newEquipment: any) => void;
    openNotification: (message: string, severity: 'success' | 'error') => void;

};



function AddEquipement({ handleAddEquipment, openNotification }: Props) {
    const [newEquipment, setNewEquipment] = useState<Equipments>(initializeEquipmment());
    const [careCenters, setCareCenters] = useState([])
    const [loading, setLoading] = useState(true)

    const handleLimpiarDatos = () => {
        setNewEquipment(initializeEquipmment());
        // Opcional: Puedes establecer clearData en false si no deseas limpiar los campos nuevamente después de limpiar.
        openNotification("Datos limpiados", "success");
    };


    useEffect(() => {
        setLoading(true)
        getCareCenters().then((response) => {
            setCareCenters(response)
            setLoading(false)
        }).catch((error) => {
        })
    }, [])


    return (
        <div className="bg-white rounded-md shadow-md p-4">
            {loading ? (
                <LoaderForm />
            ) : (

                <Box>
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
                                onChange={(e) => setNewEquipment({ ...newEquipment, operative: e.target.value === "1" })}
                            >
                                <MenuItem value="1">Operativo</MenuItem>
                                <MenuItem value="2">Inoperativo</MenuItem>
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
                            value={newEquipment.serial}
                            onChange={(e) => setNewEquipment({ ...newEquipment, serial: e.target.value })}
                        />
                        <TextField
                            variant="outlined"
                            label="Bien Nacional"
                            fullWidth
                            value={newEquipment.nationalKey}
                            onChange={(e) => setNewEquipment({ ...newEquipment, nationalKey: e.target.value })}
                        />

                        <TextField
                            variant="outlined"
                            label="TEST KEY"
                            fullWidth
                            value={newEquipment.key}
                            onChange={(e) => setNewEquipment({ ...newEquipment, key: e.target.value })}
                        />
                        {/* Centros de salud*/}
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Centro de Salud</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                label="Centro de Salud"
                                value={newEquipment.CareCenter.name}
                                onChange={(e) => {
                                    newEquipment.CareCenter.name = e.target.value as string
                                    setNewEquipment({
                                        ...newEquipment, CareCenterId: careCenters.find((center: { id: string, name: string }) => center.name === e.target.value)?.id
                                    })
                                }
                                }
                            >
                                {careCenters.map((center: { id: string, name: string }) => (
                                    <MenuItem key={center.id} value={center.name}>
                                        {center.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        <div className="col-span-2 flex space-x-2">
                            <Button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                sx={{ width: '100%' }}
                                variant="contained"
                                endIcon={<AccessTimeFilledIcon />}
                                onClick={() => {
                                    if (
                                        !newEquipment.name &&
                                        !newEquipment.brand &&
                                        !newEquipment.model &&
                                        !newEquipment.description &&
                                        !newEquipment.condition &&
                                        !newEquipment.serial &&
                                        !newEquipment.nationalKey &&
                                        !newEquipment.key &&
                                        !newEquipment.CareCenterId
                                    ) {
                                        openNotification('Los datos ya están limpios', 'error');
                                    } else {
                                        handleLimpiarDatos();
                                    }
                                }}
                            >
                                Limpiar Datos
                            </Button>

                            <Button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                sx={{ width: '100%' }}
                                onClick={() => {
                                    if (
                                        !newEquipment.name ||
                                        !newEquipment.brand ||
                                        !newEquipment.model ||
                                        !newEquipment.description ||
                                        !newEquipment.condition ||
                                        !newEquipment.serial ||
                                        !newEquipment.nationalKey ||
                                        !newEquipment.key ||
                                        !newEquipment.CareCenterId
                                    ) {
                                        openNotification('Debes rellenar todos los campos', 'error');
                                    } else {

                                        // Agrega el equipo
                                        handleAddEquipment(newEquipment);
                                        openNotification('Equipo registrado con éxito', 'success');
                                    }
                                }}
                                variant="contained"
                                endIcon={<AddCircleOutlineIcon />}
                            >
                                Agregar
                            </Button>
                        </div>

                    </form>
                </Box>
            )}

        </div>
    );
}

export default AddEquipement;
