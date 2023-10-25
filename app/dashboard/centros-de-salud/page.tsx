"use client"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import TableCareCenter from '@/components/careCenter/TableCareCenter';
import AddCareCenter from '@/components/careCenter/AddCareCenter';
import LoaderTables from '@/components/Loaders/LoaderTables';
import axios from 'axios'
import { CareCenter } from '@/types/CareCenter';
import ModalCareCenter from '@/components/careCenter/ModalCareCenter';
import { initializeCareCenter } from '@/utils/CareCenters/initializeCareCenter';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

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
    const [careCenters, setCareCenters] = useState<CareCenter[]>([]);
    const [newCenter, setNewCenter] = useState<CareCenter>(initializeCareCenter());
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/carecenters`)
            .then((response) => {
                setCareCenters(response.data);
                setIsLoading(false);
                setError(true);
                console.log(response.data)
            })
            .catch((error) => {
                setIsLoading(false);
                setError(false);
                console.error('Error al cargar los centros de salud', error);
            });
    }, []);

    const [openModalCareCenter, setOpenModalCareCenter] = React.useState(false);
    const [careCenter, setCareCenter] = useState(initializeCareCenter())
    const [idCareCenter, setIdCareCenter] = useState("")

    const handleOpenModalCareCenter = (id: string) => {
        setOpenModalCareCenter(true)
        setIdCareCenter(id)

    };
    const handleCloseModalCareCenter = () => {
        setOpenModalCareCenter(false)
        setIdCareCenter('')
    };

    const handleEdit = (centerId: string) => {
        // Implementa la lógica de edición aquí
    };

    const handleDelete = (centerId: string) => {
        const updatedCentros = careCenters.filter((center) => center.id !== centerId);
        setCareCenters(updatedCentros);
    };

    const handleAddCenter = () => {
        const newId = careCenters.length + 1;
        const newCareCenter = { ...newCenter, id: newId.toString() };
        setCareCenters([...careCenters, newCareCenter]);
        setNewCenter(initializeCareCenter());
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
                    <Tab label="Buscar Centro" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {isLoading ? (
                    <LoaderTables />
                ) : (
                    (error) ? (
                        <TableCareCenter careCenters={careCenters} handleEdit={handleEdit} handleDelete={handleDelete} handleOpenModalCareCenter={handleOpenModalCareCenter} />
                    ) : (
                        <div className='text-center text-red-500 font-bold mt-4'>
                            <h1>Hubo un error al cargar los centros de salud</h1>
                            <p>Por favor, intente mas tarde</p>
                        </div>
                    )
                )}
                <ModalCareCenter
                    handleCloseModal={handleCloseModalCareCenter}
                    open={openModalCareCenter} careCenter={careCenter}
                    idCareCenter={idCareCenter} setCareCenter={setCareCenter} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} >
                <AddCareCenter newCenter={newCenter} setNewCenter={setNewCenter} handleAddCenter={handleAddCenter} />
            </CustomTabPanel>
        </Box>
    );
}