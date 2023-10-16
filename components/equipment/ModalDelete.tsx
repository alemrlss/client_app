import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

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

type Props = {
    handleCloseModal: () => void;
    open: boolean;
    equipment: Equipments;
    idEquipment: string;
    handleDelete: (id: string) => void;
}


function ModalDelete({ handleCloseModal, open, equipment, idEquipment, handleDelete }: Props) {

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

                        Eliminar Equipo Tecnologico
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ m: 2, textAlign: 'center' }}>

                        ¿Estas seguro que quieres eliminar <strong>{equipment.name}</strong>?
                    </Typography>


                    <Box className="space-x-2" sx={{ display: "flex", justifyContent: "center", mt: 1, }}>

                        <Button variant="outlined" startIcon={<CancelPresentationIcon />} onClick={handleCloseModal}>
                            Cancelar
                        </Button>
                        <Button variant="outlined" color="error" onClick={() => {
                            handleDelete(idEquipment)
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