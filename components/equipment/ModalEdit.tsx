import { Backdrop, Box, Button, Fade, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
    setEquipment: React.Dispatch<React.SetStateAction<Equipments>>;
    idEquipment: string;
    handleEdit: (id: string, updatedEquipements: Equipments) => void;
}


function ModalEdit({ handleCloseModal, open, equipment, idEquipment, handleEdit, setEquipment }: Props) {


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

                        Editar Equipo Tecnologico
                    </Typography>

                    <form className="grid grid-cols-2 gap-6 p-4">
                        <TextField
                            variant="outlined"
                            label="Nombre"
                            fullWidth
                            value={equipment.name}
                            onChange={(e) => setEquipment({ ...equipment, name: e.target.value })}
                        />
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Estado</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                label="Estado"
                                value={equipment.status}
                                onChange={(e) => setEquipment({ ...equipment, status: e.target.value })}
                            >
                                <MenuItem value="operative">Operativo	</MenuItem>
                                <MenuItem value="inoperative">Inoperativo	</MenuItem>

                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            label="Modelo"
                            fullWidth
                            value={equipment.model}
                            onChange={(e) => setEquipment({ ...equipment, model: e.target.value })}
                        />
                        <TextField
                            variant="outlined"
                            label="Marca"
                            fullWidth
                            value={equipment.brand}
                            onChange={(e) => setEquipment({ ...equipment, brand: e.target.value })}
                        />
                        <TextField
                            variant="outlined"
                            label="Serial"
                            fullWidth
                            value={equipment.key}
                            onChange={(e) => setEquipment({ ...equipment, key: e.target.value })}
                        />
                        <TextField
                            variant="outlined"
                            label="Bien Nacional"
                            fullWidth
                            value={equipment.nationalKey}
                            onChange={(e) => setEquipment({ ...equipment, nationalKey: e.target.value })}
                        />

                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Centro de Salud</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                label="Centro de Salud"
                                value={equipment.centroDeSalud}
                                onChange={(e) => setEquipment({ ...equipment, centroDeSalud: e.target.value })}
                            >
                                <MenuItem value="1">HOSPITAL GENERAL DEL SUR Dr. PEDRO ITURBE	</MenuItem>
                                <MenuItem value="2">SERVICIO AUTÓNOMO HOSPITAL UNIVERSITARIO DE MARACAIBO	</MenuItem>
                                <MenuItem value="3">HOSPITAL COROMOTO</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            label="Descripcion"
                            fullWidth
                            value={equipment.description}
                            onChange={(e) => setEquipment({ ...equipment, description: e.target.value })}
                        />

                    </form>

                    <Box className="space-x-2" sx={{ display: "flex", justifyContent: "center", mt: 1, }}>

                        <Button variant="outlined" startIcon={<CancelPresentationIcon />} onClick={handleCloseModal}>
                            Cancelar
                        </Button>
                        <Button variant="outlined" color="success" onClick={() => {
                            handleEdit(idEquipment, equipment)
                        }}
                            startIcon={<DeleteIcon />}>
                            Guardar
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

export default ModalEdit