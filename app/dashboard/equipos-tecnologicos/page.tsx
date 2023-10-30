"use client"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import LoaderTables from '@/components/Loaders/LoaderTables';
import TableEquipment from '@/components/equipment/TableEquipment';
import AddEquipment from '@/components/equipment/AddEquipment';
import ModalDelete from '@/components/equipment/ModalDelete';
import ModalEdit from '@/components/equipment/ModalEdit';
import { createEquipment, getEquipments, updateEquipment } from '@/utils/equipmentService';
import SnackBar from '@/components/equipment/SnackBar';
import { getCareCenters } from '@/utils/carecentersService';
import ModalEquipment from '@/components/equipment/ModalEquipment';
import { Equipments } from '@/types/Equipment';
import Error from '@/components/equipment/Error';
import { initializeEquipmment } from '@/utils/Equipments/InitializeEquipment';
import { Pagination } from '@mui/material';
import SearchEquipments from '@/components/equipment/SearchEquipments';

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

export default function EquiposTecnologicosPage() {
    //Equipments
    const [equipments, setEquipments] = useState<Equipments[]>([]);
    //Loader & Error
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    //Modal Delete - Modal Edit - Modal Equipment - idEquipment selected - nameEquipment selected
    const [openModalDelete, setOpenModalDelete] = React.useState(false);
    const [openModalEdit, setOpenModalEdit] = React.useState(false);
    const [openModalEquipment, setOpenModalEquipment] = React.useState(false);
    const [idEquipment, setIdEquipment] = React.useState("");
    const [equipment, setEquipment] = React.useState(initializeEquipmment())
    //Notifications 
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationSeverity, setNotificationSeverity] = useState('success');

    //Care Centers
    const [careCenters, setCareCenters] = useState([])


    //Pagination 
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    const openNotification = (message: string, severity: string) => {
        setNotificationMessage(message);
        setNotificationSeverity(severity);
        setNotificationOpen(true);
    };

    //Functions handlers modalDelete
    const handleOpenModalDelete = (id: string, equipment: Equipments) => {
        setOpenModalDelete(true)
        setEquipment(equipment)
        setIdEquipment(id)
    };
    const handleCloseModalDelete = () => {
        setOpenModalDelete(false)
        setEquipment(initializeEquipmment())
        setIdEquipment('')
    };

    //Functions handlers modalEdit
    const handleOpenModalEdit = (id: string, equipment: Equipments) => {
        setOpenModalEdit(true)
        setEquipment(equipment)
        setIdEquipment(id)
        getCareCenters().then((response) => {
            setCareCenters(response)
        }).catch((error) => {
        })
    };
    const handleCloseModalEdit = () => {
        setOpenModalEdit(false)
        setEquipment(initializeEquipmment())
        setIdEquipment('')
    };

    //Functions handlers modal equipment
    const handleOpenModalEquipment = (id: string, equipment: Equipments) => {
        setOpenModalEquipment(true)
        setIdEquipment(id)
    };
    const handleCloseModalEquipment = () => {
        setOpenModalEquipment(false)
        setIdEquipment('')
    };


    //UseEffect connect with backend
    useEffect(() => {
        const take = 7;
        const skip = (page - 1) * take;
        getEquipments({ skip, take })
            .then((response) => {
                setEquipments(response.equipments);
                setIsLoading(false);
                setError(true);
                // Calcula el número total de páginas basado en la respuesta del servidor.
                const calculatedTotalPages = Math.ceil(response.totalEquipments / take);
                setTotalPages(calculatedTotalPages);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(false);
                console.error('Error al cargar los equipos tecnológicos', error);
            });
    }, [page]);

    //Logic for a create new equipment
    const handleAddEquipment = (newEquipment: Equipments) => {
        createEquipment(newEquipment).then((response) => {
            newEquipment.id = response.id;
            if (equipments.length >= 7) {
                const updatedEquipments = [...equipments];
                updatedEquipments.shift();
                updatedEquipments.push(newEquipment);
                setEquipments(updatedEquipments);
            } else {
                setEquipments([...equipments, newEquipment]);
            }
            openNotification('Equipo creado correctamente', 'success');
        }).catch((error) => {
            console.log(error);
        });
    };

    const handlePageChange = (event: any, newPage: any) => {
        setPage(newPage);
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
                    <Tab label="Buscar Equipo" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {isLoading ? (
                    <LoaderTables />
                ) : (
                    (error) ? (

                        <Box className='flex flex-col space-y-4 items-center'>
                            <TableEquipment
                                equipments={equipments}
                                handleOpenModalDelete={handleOpenModalDelete}
                                handleOpenModalEdit={handleOpenModalEdit}
                                handleOpenModalEquipment={handleOpenModalEquipment}
                            />
                            <Pagination
                                count={totalPages}
                                page={page}
                                onChange={handlePageChange}
                                color="primary"
                            />
                        </Box>

                    ) : (
                        <Error />
                    )
                )}
                <ModalEquipment
                    handleCloseModal={handleCloseModalEquipment}
                    open={openModalEquipment} equipment={equipment}
                    idEquipment={idEquipment} setEquipment={setEquipment} />
                <ModalDelete handleCloseModal={handleCloseModalDelete} open={openModalDelete} equipment={equipment} idEquipment={idEquipment} openNotification={openNotification} setEquipments={setEquipments} equipments={equipments}
                />
                <ModalEdit handleCloseModal={handleCloseModalEdit} open={openModalEdit} equipment={equipment} idEquipment={idEquipment} setEquipment={setEquipment} careCenters={careCenters} setEquipments={setEquipments} openNotification={openNotification}
                />
                <SnackBar notificationOpen={notificationOpen} notificationMessage={notificationMessage} setNotificationOpen={setNotificationOpen} notificationSeverity={notificationSeverity} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} >
                <AddEquipment handleAddEquipment={handleAddEquipment} openNotification={openNotification} />
                <SnackBar notificationOpen={notificationOpen} notificationMessage={notificationMessage} setNotificationOpen={setNotificationOpen} notificationSeverity={notificationSeverity} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} >
                <SearchEquipments />
            </CustomTabPanel>
        </Box >
    );
}