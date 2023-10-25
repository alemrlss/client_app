import { getEquipment } from '@/utils/equipmentService';
import { Backdrop, Box, CircularProgress, Fade, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CareCenter } from '@/types/CareCenter';
import { getCareCenter } from '@/utils/carecentersService';


type Props = {
    handleCloseModal: () => void;
    open: boolean;
    idCareCenter: string;
    careCenter: CareCenter;
    setCareCenter: (careCenter: CareCenter) => void;
}

function ModalCareCenter({ handleCloseModal, open, idCareCenter, careCenter, setCareCenter }: Props) {
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
            getCareCenter(idCareCenter)
                .then((response) => {
                    console.log(response)
                    setCareCenter(response);
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
                                Datos del Centro de Salud
                            </Typography>
                            <Box id="transition-modal-description" sx={{ textAlign: 'left' }}>
                        
                                <Typography><strong>Nombre:</strong> {careCenter.name}</Typography>
                                <Typography><strong>Tipo:</strong> {careCenter.typeCenter}</Typography>
                                <Typography><strong>Director:</strong> {careCenter.director?careCenter.director:'NO ASIGNADO'}</Typography>
                                <Typography><strong>Telefono Responsable:</strong> {careCenter.phoneNumber?careCenter.phoneNumber:'SIN TELEFONO'}</Typography>
                                <Typography><strong>Estado:</strong> {careCenter.State.name}</Typography>
                                <Typography><strong>Municipio:</strong> {careCenter.municipality.name}</Typography>
                                <Typography><strong>Direccion:</strong> {careCenter.address?careCenter.address:"SIN DIRECCION"}</Typography>
                                <Typography><strong>SERVICIOS MEDICOS:</strong> aqui van los servicios medicos es un array</Typography>



                            </Box>
                        </Box>
                    )}
                </Box>

            </Fade>
        </Modal>
    );
}

export default ModalCareCenter;
