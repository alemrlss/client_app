"use client"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import LoaderTables from '@/components/Loaders/LoaderTables';
import TableEquipment from '@/components/equipment/TableEquipment';
import axios from 'axios'
import AddEquipment from '@/components/equipment/AddEquipment';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
type EquiposTecnologicos = {
    id: string;
    name: string;
    model: string;
    brand: string;
    key: string;
    nationalKey: string;
    status: string;
    centroDeSalud: string;
    description: string;
};
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function EquiposTecnologicosPage() {
    const [equipments, setEquipments] = useState<EquiposTecnologicos[]>([]);
    const [newEquipment, setNewEquipment] = useState<EquiposTecnologicos>({
        id: '',
        name: '',
        model: '',
        brand: '',
        key: '',
        nationalKey: '',
        status: '',
        centroDeSalud: '',
        description: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/equipments`)
            .then((response) => {
                setEquipments(response.data);
                setIsLoading(false);
                setError(true);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(false);
                console.error('Error al cargar los equipos tecnologicos', error);
            });
    }, []);

    const handleEdit = (equipoId: string) => {
        // Implementa la lógica de edición aquí
    };
    const handleDelete = (equipoId: string) => {
        const updatedEquipements = equipments.filter((equipo) => equipo.id !== equipoId);
        setEquipments(updatedEquipements);
    };
    const handleAddEquipment = () => {
        console.log("agg")
        const newId = equipments.length + 1;
        const nuevoEquipoTecnologico = { ...newEquipment, id: newId.toString() };
        setEquipments([...equipments, nuevoEquipoTecnologico]);
        setNewEquipment({
            id: '',
            name: '',
            model: '',
            brand: '',
            key: '',
            nationalKey: '',
            status: "",
            centroDeSalud: '',
            description: '',
        });
    };
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 1 }}>
                <Tabs value={value} onChange={handleChange} centered variant='fullWidth' textColor='primary' indicatorColor="primary">
                    <Tab label="Equipos Tecnologicos" {...a11yProps(0)} />
                    <Tab label="Agregar Equipo" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {isLoading ? (
                    <LoaderTables />
                ) : (
                    (error) ? (
                        <TableEquipment
                            equipments={equipments}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete} />
                    ) : (
                        <div className='text-center text-red-500 font-bold mt-4'>
                            <h1>Hubo un error al cargar los centros de salud</h1>
                            <p>Por favor, intente mas tarde</p>
                        </div>
                    )
                )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} >

                <AddEquipment newEquipment={newEquipment} handleAddEquipment={handleAddEquipment} setNewEquipment={setNewEquipment} />
            </CustomTabPanel>
        </Box>
    );
}