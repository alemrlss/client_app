import { getEquipment } from '@/utils/equipmentService';
import { Backdrop, Box, CircularProgress, Fade, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Equipments } from '@/types/Equipment';
import { Repairs } from '@/types/Repairs';
import { getRepair } from '@/utils/repairsService';
import { formatDateTime } from '@/utils/formatDate';


type Props = {
    handleCloseModal: () => void;
    open: boolean;
    repair: Repairs;
    setRepair: (repair: Repairs) => void;
    // idRepair: string
}

function ModalRepair({ handleCloseModal, open, repair, setRepair }: Props) {
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
            getRepair(repair.id)
                .then((response) => {
                    console.log(response)
                    setRepair(response);
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
                                Datos de la Reparacion
                            </Typography>
                            <Box id="transition-modal-description" sx={{ textAlign: 'left' }}>

                                <Typography><strong>Nombre:</strong> {repair.Equipments.name}</Typography>
                                <Typography><strong>Descripcion:</strong> {repair.description}</Typography>
                                <Typography><strong>Tipo de Reparacion:</strong> {repair.TypeRepair}</Typography>
                                <Typography><strong>Fecha:</strong> {formatDateTime(repair.date)}</Typography>
                                <Typography sx={{ fontSize: '16px' }}><strong>DATOS DEL OPERADOR</strong></Typography>
                                <Typography><strong>Nombre:</strong> {repair.Operator?.name}</Typography>
                                <Typography><strong>Cedula:</strong> {repair.Operator?.nationalId}</Typography>
                                <Typography><strong>Email:</strong> {repair.Operator?.email}</Typography>
                                <Typography><strong>Numero:</strong> {repair.Operator?.phoneNumber}</Typography>
                            </Box>
                        </Box>
                    )}
                </Box>

            </Fade>
        </Modal>
    );
}

export default ModalRepair;
