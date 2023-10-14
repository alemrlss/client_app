"use client"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import TableCareCenter from '@/components/careCenter/TableCareCenter';
import AddCareCenter from '@/components/careCenter/AddCareCenter';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
type CentroDeSalud = {
    id: number;
    nombre: string;
    tipo: string;
    municipio: string;
    direccion: string;
    director: string;
    telefonoResponsable: string;
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

export default function CentrosDeSaludPage() {
    const [centrosDeSalud, setCentrosDeSalud] = useState<CentroDeSalud[]>([]);
    const [nuevoCentro, setNuevoCentro] = useState<CentroDeSalud>({
        id: 0,
        nombre: '',
        tipo: '',
        municipio: '',
        direccion: '',
        director: '',
        telefonoResponsable: '',
    });

    useEffect(() => {
        // Datos de ejemplo
        const dataEjemplo: CentroDeSalud[] = [
            {
                id: 1,
                nombre: 'ANDREA MARTINEZ',
                tipo: 'Tipo 1',
                municipio: 'Maracaibo',
                direccion: 'Dirección 1',
                director: 'Director 1',
                telefonoResponsable: '123-456-7890',
            },
            {
                id: 2,
                nombre: 'Centro de Salud B',
                tipo: 'Tipo 2',
                municipio: 'Municipio 2',
                direccion: 'Dirección 2',
                director: 'Director 2',
                telefonoResponsable: '987-654-3210',
            },
            {
                id: 3,
                nombre: 'Centro de Salud C',
                tipo: 'Tipo 3',
                municipio: 'Municipio 3',
                direccion: 'Dirección 3',
                director: 'Director 3',
                telefonoResponsable: '555-555-5555',
            },
            {
                id: 4,
                nombre: 'Centro de Salud D',
                tipo: 'Tipo 4',
                municipio: 'Municipio 4',
                direccion: 'Dirección 4',
                director: 'Director 4',
                telefonoResponsable: '777-777-7777',
            },
            {
                id: 5,
                nombre: 'Centro de Salud E',
                tipo: 'CDI',
                municipio: 'Municipio 5',
                direccion: 'Dirección 5',
                director: 'Director 5',
                telefonoResponsable: '999-999-9999',
            },
            {
                id: 6,
                nombre: 'Centro de Salud F',
                tipo: 'CDI',
                municipio: 'Municipio 6',
                direccion: 'Dirección 6',
                director: 'Director 6',
                telefonoResponsable: '111-111-1111',
            },
            {
                id: 7,
                nombre: 'Centro de Salud G',
                tipo: 'Tipo 7',
                municipio: 'Municipio 7',
                direccion: 'Dirección 7',
                director: 'Director 7',
                telefonoResponsable: '222-222-2222',
            },
            {
                id: 8,
                nombre: 'Centro de Salud G',
                tipo: 'Tipo 7',
                municipio: 'Municipio 7',
                direccion: 'Dirección 7',
                director: 'Director 7',
                telefonoResponsable: '222-222-2222',
            },
            {
                id: 9,
                nombre: 'Centro de Salud G',
                tipo: 'Tipo 7',
                municipio: 'Municipio 7',
                direccion: 'Dirección 7',
                director: 'Director 7',
                telefonoResponsable: '222-222-2222',
            }, {
                id: 10,
                nombre: 'Centro de Salud G',
                tipo: 'Tipo 7',
                municipio: 'Municipio 7',
                direccion: 'Dirección 7',
                director: 'Director 7',
                telefonoResponsable: '222-222-2222',
            }
        ]
        setCentrosDeSalud(dataEjemplo);
    }, []);

    const handleEdit = (centroId: number) => {
        // Implementa la lógica de edición aquí
    };

    const handleDelete = (centroId: number) => {
        const updatedCentros = centrosDeSalud.filter((centro) => centro.id !== centroId);
        setCentrosDeSalud(updatedCentros);
    };

    const handleAddCentro = () => {
        const newId = centrosDeSalud.length + 1;
        const nuevoCentroDeSalud = { ...nuevoCentro, id: newId };
        setCentrosDeSalud([...centrosDeSalud, nuevoCentroDeSalud]);
        setNuevoCentro({
            id: 0,
            nombre: '',
            tipo: '',
            municipio: '',
            direccion: '',
            director: '',
            telefonoResponsable: '',
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
                    <Tab label="Centros de Salud" {...a11yProps(0)} />
                    <Tab label="Agregar Centro" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TableCareCenter centrosDeSalud={centrosDeSalud} handleEdit={handleEdit} handleDelete={handleDelete} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} >
                <AddCareCenter nuevoCentro={nuevoCentro} setNuevoCentro={setNuevoCentro} handleAddCentro={handleAddCentro} />
            </CustomTabPanel>
        </Box>
    );
}
