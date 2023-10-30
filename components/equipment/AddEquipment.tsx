"use client"
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Equipments } from '@/types/Equipment';
import { getCareCenters, getMedicalServicesByIdCareCenter } from '@/utils/carecentersService';
import LoaderForm from '../Loaders/LoaderForm';
import { initializeEquipmment } from '@/utils/Equipments/InitializeEquipment';

type Props = {
    handleAddEquipment: (newEquipment: any) => void;
    openNotification: (message: string, severity: 'success' | 'error') => void;
};

function AddEquipment({ handleAddEquipment, openNotification }: Props) {
    const [newEquipment, setNewEquipment] = useState<Equipments>(initializeEquipmment());
    const [careCenters, setCareCenters] = useState([]);
    const [medicalServices, setMedicalServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMedicalServices, setLoadingMedicalServices] = useState(false);

    const handleLimpiarDatos = () => {
        setNewEquipment(initializeEquipmment());
        openNotification('Datos limpiados', 'success');
    };

    const loadMedicalServices = (careCenterId: string) => {
        setLoadingMedicalServices(true);
        getMedicalServicesByIdCareCenter(careCenterId)
            .then((response) => {
                setMedicalServices(response.MedicalService);
                setLoadingMedicalServices(false);
            })
            .catch((error) => {
                console.error('Error al cargar los servicios médicos:', error);
                setLoadingMedicalServices(false);
            });
    };

    useEffect(() => {
        setLoading(true);
        getCareCenters()
            .then((response) => {
                setCareCenters(response);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al cargar los centros de salud:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="bg-white rounded-md shadow-md p-4">
            {loading ? (
                <LoaderForm />
            ) : (
                <Box>
                    <h2 className="text-3xl font-semibold p-4 text-center">Nuevo Equipo Tecnológico</h2>
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
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Condicion</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                label="Condicion"
                                value={newEquipment.condition}
                                onChange={(e) => {
                                    const selectedValue = e.target.value;
                                    setNewEquipment({
                                        ...newEquipment,
                                        condition: selectedValue
                                    });
                                }}
                            >
                                <MenuItem value="bad">bad(Malo)</MenuItem>
                                <MenuItem value="regular">regular(Regular)</MenuItem>
                                <MenuItem value="good">good(Bueno)</MenuItem>
                            </Select>
                        </FormControl>
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
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Centro de Salud</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                label="Centro de Salud"
                                onChange={(e) => {
                                    const selectedCenterName = e.target.value as string;
                                    const selectedCenter = careCenters.find(
                                        (center: { id: string; name: string }) => center.name === selectedCenterName
                                    );
                                    if (selectedCenter) {
                                        setNewEquipment({
                                            ...newEquipment,
                                            CareCenterId: selectedCenter.id,
                                            CareCenter: selectedCenter
                                        });
                                        console.log('Hacer la petición');
                                        loadMedicalServices(selectedCenter.id);
                                    }
                                }}
                            >
                                {careCenters.map((center: { id: string; name: string }) => (
                                    <MenuItem key={center.id} value={center.name}>
                                        {center.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Servicios Medicos</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                label="Servicios medicos"
                                onChange={(e) => {
                                    const selectedServiceName = e.target.value as string;
                                    const selectedService = medicalServices.find(
                                        (service: { id: string; service: string }) => service.service === selectedServiceName
                                    );
                                    if (selectedService) {
                                        setNewEquipment({
                                            ...newEquipment,
                                            MedicalServiceId: selectedService.id,
                                            MedicalService: selectedService
                                        });
                                    }
                                }}
                            >
                                {medicalServices.length === 0 ? (
                                    <MenuItem value="Sin servicios medicos" disabled>
                                        Sin servicios medicos
                                    </MenuItem>
                                ) : null}
                                {loadingMedicalServices ? (
                                    <MenuItem value="" disabled>
                                        Cargando servicios médicos...
                                    </MenuItem>
                                ) : (
                                    medicalServices.map((medicalService) => (
                                        <MenuItem key={medicalService.id} value={medicalService.service}>
                                            {medicalService.service}
                                        </MenuItem>
                                    ))
                                )}
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
                                variant="contained"
                                endIcon={<AddCircleOutlineIcon />}
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
                                        setNewEquipment(initializeEquipmment());
                                        handleAddEquipment(newEquipment);
                                    }
                                }}
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

export default AddEquipment;
