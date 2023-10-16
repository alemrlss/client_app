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
import { deleteEquipment, getEquipments, updateEquipment } from '@/utils/equipmentService';
import SnackBar from '@/components/equipment/SnackBar';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

type Equipments = {
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

    //Equipments
    const [equipments, setEquipments] = useState<Equipments[]>([]);
    const [newEquipment, setNewEquipment] = useState<Equipments>({
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

    //Loader & Error
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    //Modal Delete - idEquipment selected - nameEquipment selected
    const [openModalDelete, setOpenModalDelete] = React.useState(false);
    const [openModalEdit, setOpenModalEdit] = React.useState(false);
    const [idEquipment, setIdEquipment] = React.useState("");
    const [equipment, setEquipment] = React.useState({
        id: '',
        name: '',
        model: '',
        brand: '',
        key: '',
        nationalKey: '',
        status: '',
        centroDeSalud: '',
        description: ''

    })

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
    const handleOpenModalDelete = (id: string, equipment: Equipments) => {
        setOpenModalDelete(true)
        setIdEquipment(id)
        setEquipment(equipment)
    };
    const handleCloseModalDelete = () => setOpenModalDelete(false);

    //Functions handlers modalEdit
    const handleOpenModalEdit = (id: string, equipment: Equipments) => {
        setOpenModalEdit(true)
        setIdEquipment(id)
        setEquipment(equipment)
    };
    const handleCloseModalEdit = () => setOpenModalEdit(false);
    //UseEffect connect with backend
    useEffect(() => {
        getEquipments().then((response) => {
            setEquipments(response)
            setIsLoading(false)
            setError(true)
        }).catch((error) => {
            setIsLoading(false)
            setError(false)
            console.error('Error al cargar los equipos tecnologicos', error)
        })
    }, []);


    //Logic for edit a equipment
    const handleEdit = (equipoId: string, updatedEquipment: Equipments) => {
        // Encuentra el equipo correspondiente en el estado actual y actualiza sus datos
        updateEquipment(equipoId, updatedEquipment).then((response) => {
            console.log(response)
            handleCloseModalEdit()
            openNotification('Equipo editado con éxito', 'success');
            setEquipments((prevEquipments) => {
                return prevEquipments.map((equipo) => {
                    if (equipo.id === equipoId) {
                        return { ...equipo, ...updatedEquipment };
                    }
                    return equipo;
                });

            });
        }).catch((error) => {
            handleCloseModalEdit()
            openNotification('Error al editar el equipo', 'error');
        })
    };
    //Logic for delete a equipment
    const handleDelete = (equipoId: string) => {
        deleteEquipment(equipoId).then((response) => {
            console.log(response)
            handleCloseModalDelete()
            openNotification('Equipo eliminado con éxito', 'success');
            const updatedEquipments = equipments.filter((equipo) => equipo.id !== equipoId);
            setEquipments(updatedEquipments);
        }).catch((error) => {
            openNotification('Error al eliminar el equipo', 'error');
            handleCloseModalDelete()

        })

    };

    //Logic for a create new equipment
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
                            handleOpenModalDelete={handleOpenModalDelete}
                            handleOpenModalEdit={handleOpenModalEdit}
                        />

                    ) : (
                        <div className='text-center text-red-500 font-bold mt-4'>
                            <h1>Hubo un error al cargar los centros de salud</h1>
                            <p>Por favor, intente mas tarde</p>
                        </div>
                    )
                )}

                <ModalDelete handleCloseModal={handleCloseModalDelete} open={openModalDelete} equipment={equipment} idEquipment={idEquipment} handleDelete={handleDelete} />
                <ModalEdit handleCloseModal={handleCloseModalEdit} open={openModalEdit} equipment={equipment} setEquipment={setEquipment} idEquipment={idEquipment} handleEdit={handleEdit} />
                <SnackBar notificationOpen={notificationOpen} notificationMessage={notificationMessage} setNotificationOpen={setNotificationOpen} notificationSeverity={notificationSeverity} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} >

                <AddEquipment newEquipment={newEquipment} handleAddEquipment={handleAddEquipment} setNewEquipment={setNewEquipment} />
            </CustomTabPanel>
        </Box>
    );
}