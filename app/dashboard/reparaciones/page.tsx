"use client"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import LoaderTables from '@/components/Loaders/LoaderTables';
import { createEquipment, getEquipments, updateEquipment } from '@/utils/equipmentService';
import SnackBar from '@/components/equipment/SnackBar';
import { getCareCenters } from '@/utils/carecentersService';
import ModalEquipment from '@/components/equipment/ModalEquipment';
import Error from '@/components/equipment/Error';
import { initializeEquipmment } from '@/utils/Equipments/InitializeEquipment';
import { Pagination } from '@mui/material';
import { createRepair, getRepairs } from '@/utils/repairsService';
import { Repairs } from '@/types/Repairs';
import TableRepairs from '@/components/repairs/TableRepairs';
import { initializeRepair } from '@/utils/Repairs/initializeRepair';
import ModalDelete from '@/components/repairs/ModalDelete';
import ModalRepair from '@/components/repairs/ModalRepair';
import AddRepair from '@/components/repairs/AddRepair';

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

export default function ReparacionesPage() {
    //Repairs
    const [repairs, setRepairs] = useState<Repairs[]>([]);
    //Loader & Error
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const [repair, setRepair] = React.useState(initializeRepair())

    //Modals
    const [openModalDelete, setOpenModalDelete] = React.useState(false);
    const [openModalRepair, setOpenModalRepair] = React.useState(false);

    //Notifications 
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationSeverity, setNotificationSeverity] = useState('success');

    const openNotification = (message: string, severity: string) => {
        setNotificationMessage(message);
        setNotificationSeverity(severity);
        setNotificationOpen(true);
    };

    //Functions handlers modalDelete
    const handleOpenModalDelete = (id: string, repair: Repairs) => {
        setOpenModalDelete(true)
        setRepair(repair)
    };

    const handleCloseModalDelete = () => {
        setOpenModalDelete(false)
        setRepair(initializeRepair())
    };

    //Functions handlers modalDelete
    const handleOpenModalRepair = (id: string, repair: Repairs) => {
        setOpenModalRepair(true)
        setRepair(repair)
    };

    const handleCloseModalRepair = () => {
        setOpenModalRepair(false)
        setRepair(initializeRepair())
    };


    //UseEffect connect with backend
    useEffect(() => {
        getRepairs().then((response) => {
            setRepairs(response);
            setIsLoading(false);
            setError(true);
        }).catch((error) => {
            setIsLoading(false);
            setError(false);
        })
    }, []);

    const handleAddRepair = (newRepair: Repairs) => {
        createRepair(newRepair).then((response) => {
            newRepair.id = response.id;
            if (repairs.length >= 7) {
                const updatedRepairs = [...repairs];
                updatedRepairs.shift();
                updatedRepairs.push(newRepair);
                setRepairs(updatedRepairs);
            } else {
                setRepairs([...repairs, newRepair]);
            }
            openNotification('Reparacion agregada correctamente', 'success');
        }).catch((error) => {
            console.log(error);
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
                    <Tab label="Reparaciones" {...a11yProps(0)} />
                    <Tab label="Agregar Reparacion" {...a11yProps(1)} />
                    <Tab label="Buscar Reparacion" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {isLoading ? (
                    <LoaderTables />
                ) : (
                    (error) ? (
                        <Box className='flex flex-col space-y-4 items-center'>
                            <TableRepairs repairs={repairs} handleOpenModalDelete={handleOpenModalDelete} handleOpenModalRepair={handleOpenModalRepair} />
                            {/* <Pagination*/}
                        </Box>
                    ) : (
                        <Error />
                    )
                )}


                <ModalRepair handleCloseModal={handleCloseModalRepair} open={openModalRepair} repair={repair} setRepair={setRepair} />
                <ModalDelete
                    handleCloseModal={handleCloseModalDelete}
                    open={openModalDelete}
                    repair={repair}
                    openNotification={openNotification}
                    setRepairs={setRepairs}
                    repairs={repairs}
                />
                <SnackBar notificationOpen={notificationOpen} notificationMessage={notificationMessage} setNotificationOpen={setNotificationOpen} notificationSeverity={notificationSeverity} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} >
                <AddRepair handleAddRepair={handleAddRepair} openNotification={openNotification} />
                <SnackBar notificationOpen={notificationOpen} notificationMessage={notificationMessage} setNotificationOpen={setNotificationOpen} notificationSeverity={notificationSeverity} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} >
                <h2>Buscar reparacion</h2>
            </CustomTabPanel>
        </Box >
    );
}