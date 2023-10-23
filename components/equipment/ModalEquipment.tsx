import { getEquipment } from '@/utils/equipmentService';
import { Backdrop, Box, CircularProgress, Fade, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Equipments } from '@/types/Equipment';


type Props = {
    handleCloseModal: () => void;
    open: boolean;
    idEquipment: string;
    equipment: Equipments;
    setEquipment: (equipment: Equipments) => void;
}

function ModalEquipment({ handleCloseModal, open, idEquipment, equipment, setEquipment }: Props) {
    const [loading, setLoading] = useState(false);

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
                    setEquipment(response);
                })
                .catch((error) => {
                    //PINTAR ERROR
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [open]);

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
                        <Box sx={{ m: 1 }}>
                            <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', mb: 2, fontSize: 20 }}>
                                Datos del Equipo Tecnologico
                            </Typography>
                            <Box id="transition-modal-description" sx={{ textAlign: 'left' }}>
                                <Typography><strong>Vensalud:</strong> #00000</Typography>
                                <Typography><strong>Nombre:</strong> {equipment.name}</Typography>
                                <Typography><strong>Modelo:</strong> {equipment.model}</Typography>
                                <Typography><strong>Marca:</strong> {equipment.brand}</Typography>
                                <Typography><strong>Serial:</strong> {equipment.key}</Typography>
                                <Typography><strong>Bien Nacional:</strong> {equipment.nationalKey}</Typography>
                                <Typography><strong>Operativo:</strong> {equipment.operative ? 'Sí' : 'No'}</Typography>
                                <Typography><strong>Condicion:</strong> {equipment.condition}</Typography>
                                <Typography><strong>Centro de Salud:</strong> {equipment.CareCenter?.name}</Typography>
                                <Typography><strong>Servicio Medico:</strong> {equipment.MedicalService?.service} <strong>Piso:</strong> {equipment.MedicalService?.floor} </Typography>
                                <Typography><strong>Descripción:</strong> {equipment.description ? equipment.description : 'Sin descripción'}</Typography>
                            </Box>
                        </Box>
                    )}
                </Box>

            </Fade>
        </Modal>
    );
}

export default ModalEquipment;
