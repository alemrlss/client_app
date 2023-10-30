import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Equipments } from '@/types/Equipment';
import { deleteEquipment } from '@/utils/equipmentService';
import { Repairs } from '@/types/Repairs';
import { deleteRepair } from '@/utils/repairsService';

type Props = {
    handleCloseModal: () => void;
    open: boolean;
    repair: Repairs;

    openNotification: (message: string, severity: 'success' | 'error') => void;
    setRepairs: React.Dispatch<React.SetStateAction<Repairs[]>>;
    repairs: Repairs[];
}

function ModalDelete({ handleCloseModal, open, repair, openNotification, repairs, setRepairs }: Props) {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#fff',
        boxShadow: 6,
        p: 3,

    };
    //Logic for delete a equipment
    const handleDelete = (repairId: string) => {
        deleteRepair(repairId).then(() => {
            handleCloseModal()
            openNotification('Reparacion eliminada con éxito', 'success');
            const updatedRepairs = repairs.filter((equipo) => equipo.id !== repairId);
            setRepairs(updatedRepairs);
        }).catch((error) => {
            openNotification('Error al eliminar el equipo', 'error');
            handleCloseModal()

        })
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
                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                        Eliminar Reparacion
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ m: 2, textAlign: 'center' }}>
                        ¿Estas seguro que quieres eliminar la reparacion del equipo <strong>{repair.Equipments.name}</strong>?
                    </Typography>

                    <Box className="space-x-2" sx={{ display: "flex", justifyContent: "center", mt: 1, }}>
                        <Button variant="outlined" startIcon={<CancelPresentationIcon />} onClick={handleCloseModal}>
                            Cancelar
                        </Button>
                        <Button variant="outlined" color="error" onClick={() => {
                            handleDelete(repair.id)
                        }}
                            startIcon={<DeleteIcon />}>
                            Eliminar
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

export default ModalDelete