import { Backdrop, Box, CircularProgress, Fade, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getEquipment, updateEquipment } from '@/utils/equipmentService';
import { Equipments } from '@/types/Equipment';
import FormEditEquipment from './FormEditEquipment';
import { getMedicalServicesByIdCareCenter } from '@/utils/carecentersService';

type Props = {
    handleCloseModal: () => void;
    open: boolean;
    equipment: Equipments;
    setEquipment: React.Dispatch<React.SetStateAction<Equipments>>;
    idEquipment: string;
    careCenters: any;
    setEquipments: React.Dispatch<React.SetStateAction<Equipments[]>>;
    openNotification: (message: string, severity: 'success' | 'error') => void;

}
function ModalEdit({ handleCloseModal, open, equipment, idEquipment, setEquipment, careCenters, setEquipments, openNotification }: Props) {
    const [loading, setLoading] = useState(false);
    const [editedEquipment, setEditedEquipment] = useState(equipment);

    const [medicalServices, setMedicalServices] = useState([]);
    const [loadingMedicalServices, setLoadingMedicalServices] = useState(false)

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: '#fff',
        boxShadow: 6,
        p: 3,

    };
    useEffect(() => {
        if (open) {

            setLoading(true);
            getEquipment(idEquipment)
                .then((response) => {
                    setEditedEquipment(response);
                    setLoading(false);
                    if (response.CareCenter.id) {
                        // Cargar el servicio médico al mismo tiempo que se obtienen los detalles del equipo
                        setLoadingMedicalServices(true)
                        getMedicalServicesByIdCareCenter(response.CareCenter.id)
                            .then((servicesResponse) => {
                                setMedicalServices(servicesResponse.MedicalService)
                                setLoadingMedicalServices(false)
                            })
                            .catch((error) => {
                                console.error('Error al cargar los servicios médicos:', error);
                            });
                    }
                })
                .catch((error) => {
                    // Manejar errores
                });
        }
    }, [open, idEquipment]);

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

    //Logic for edit a equipment
    const handleEdit = () => {
        updateEquipment(idEquipment, editedEquipment)
            .then(() => {
                handleCloseModal();
                openNotification('Equipo editado con éxito', 'success');
                setEquipments((prevEquipments) => {
                    return prevEquipments.map((equipment) => {
                        if (equipment.id === idEquipment) {
                            return { ...equipment, ...editedEquipment };

                        }
                        return equipment;
                    });
                });
            })
            .catch((error) => {
                handleCloseModal();
                openNotification('Error al editar el equipo', error);
            });
    };


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleCloseModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 0,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                            <CircularProgress color='primary' />
                        </Box>
                    ) : (
                        <Box>
                            <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                                Editar Equipo Tecnologico
                            </Typography>
                            <FormEditEquipment
                                idEquipment={idEquipment}
                                equipment={editedEquipment} // Usar editedEquipment en lugar de equipment
                                setEquipment={setEditedEquipment} // Usar setEditedEquipment en lugar de setEquipment
                                handleEdit={handleEdit}
                                handleCloseModal={handleCloseModal}
                                careCenters={careCenters}
                                medicalServices={medicalServices}
                                loadingMedicalServices={loadingMedicalServices}
                                loadMedicalServices={loadMedicalServices}
                            />
                        </Box>
                    )}
                </Box>
            </Fade>
        </Modal >
    )
}
export default ModalEdit