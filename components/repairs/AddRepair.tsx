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
import { initializeEquipmment } from '@/utils/Equipments/InitializeEquipment';
import { getCareCenters, getMedicalServicesByIdCareCenter } from '@/utils/carecentersService';
import LoaderForm from '../Loaders/LoaderForm';
import { Repairs } from '@/types/Repairs';
import { initializeRepair } from '@/utils/Repairs/initializeRepair';
import { getEquipments } from '@/utils/equipmentService';
import { getOperators } from '@/utils/operatorsService';

type Props = {
    handleAddRepair: (newRepair: any) => void;
    openNotification: (message: string, severity: 'success' | 'error') => void;
};

function AddRepair({ handleAddRepair, openNotification }: Props) {
    const [newRepair, setNewRepair] = useState<Repairs>(initializeRepair());
    const [equipments, setEquipments] = useState([]);
    const [operators, setOperators] = useState([]);
    const [loading, setLoading] = useState(false);

    const [selectedEquipment, setSelectedEquipment] = useState('');
    const [selectedOperator, setSelectedOperator] = useState('');
    const handleCleanData = () => {
        setNewRepair(initializeRepair());
        setSelectedEquipment('');
        setSelectedOperator('');
        openNotification('Datos limpiados', 'success');
    };

    useEffect(() => {
        const skip = 0;
        const take = 1000;
        setLoading(true);
        // Crear dos promesas para obtener equipos y operadores
        const getEquipmentsPromise = getEquipments({ skip, take });
        const getOperatorsPromise = getOperators();
        // Usar Promise.all para esperar a que ambas promesas se resuelvan
        Promise.all([getEquipmentsPromise, getOperatorsPromise])
            .then(([equipmentsResponse, operatorsResponse]) => {
                setEquipments(equipmentsResponse.equipments);
                setOperators(operatorsResponse);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="bg-white rounded-md shadow-md p-4">
            {loading ? (
                <LoaderForm />
            ) : (
                <Box>
                    <h2 className="text-3xl font-semibold p-4 text-center">Nueva Reparacion</h2>
                    <form className="grid grid-cols-2 gap-6 p-4">
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Equipo Tecnologico</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                label="Equipo Tecnologico"
                                value={selectedEquipment} // Usar el estado para el valor seleccionado
                                onChange={(e) => {
                                    const selectedEquipmentName = e.target.value as string;
                                    const selectedEquipment = equipments.find(
                                        (equipment: { id: string; name: string }) => equipment.name === selectedEquipmentName
                                    );
                                    if (selectedEquipment) {
                                        setNewRepair({
                                            ...newRepair,
                                            EquipmentsId: selectedEquipment.id,
                                            Equipments: selectedEquipment
                                        });
                                    }
                                    setSelectedEquipment(e.target.value);
                                }}
                            >
                                {equipments.map((equipment: { id: string; name: string }) => (
                                    <MenuItem key={equipment.id} value={equipment.name}>
                                        {equipment.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Operador</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                label="Operador"
                                value={selectedOperator} // Usar el estado para el valor seleccionado
                                onChange={(e) => {
                                    const selectedOperatorName = e.target.value as string;
                                    const selectedOperator = operators.find(
                                        (operator: { id: string; name: string }) => operator.name === selectedOperatorName
                                    );
                                    if (selectedOperator) {
                                        setNewRepair({
                                            ...newRepair,
                                            OperatorId: selectedOperator.id
                                        });
                                    }
                                    setSelectedOperator(e.target.value);
                                }}
                            >
                                {operators.map((operator: { id: string; name: string }) => (
                                    <MenuItem key={operator.id} value={operator.name}>
                                        {operator.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Tipo de Reparacion</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                label="Tipo de Reparacion"
                                value={newRepair.TypeRepair}
                                onChange={(e) => {
                                    const selectedValue = e.target.value;
                                    setNewRepair({
                                        ...newRepair,
                                        TypeRepair: selectedValue
                                    });
                                }}
                            >
                                <MenuItem value="preventive">Preventivo</MenuItem>
                                <MenuItem value="corrective">Correctivo</MenuItem>
                                <MenuItem value="technical_leave" disabled>Technical_leave</MenuItem>
                                <MenuItem value="technical_revision" disabled>Tecchnical_revision</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            variant="outlined"
                            label="Descripcion"
                            fullWidth
                            value={newRepair.description}
                            onChange={(e) => setNewRepair({ ...newRepair, description: e.target.value })}
                        />

                        <div className="col-span-2 flex space-x-2">
                            <Button
                                className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 rounded"
                                sx={{ width: '100%' }}
                                variant="contained"
                                endIcon={<AccessTimeFilledIcon />}
                                onClick={handleCleanData}
                            >
                                Limpiar Datos
                            </Button>
                            <Button
                                className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                sx={{ width: '100%' }}
                                variant="contained"
                                endIcon={<AddCircleOutlineIcon />}
                                onClick={() => {
                                    newRepair.date = new Date().toISOString();
                                    handleAddRepair(newRepair);
                                    setNewRepair(initializeRepair());
                                    setSelectedEquipment('');
                                    setSelectedOperator('');
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

export default AddRepair;
