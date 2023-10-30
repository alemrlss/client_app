import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Equipments } from '@/types/Equipment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props = {
    equipments: Equipments[];
    handleOpenModalDelete: (id: string, equipment: Equipments) => void;
    handleOpenModalEdit: (id: string, equipment: Equipments) => void;
    handleOpenModalEquipment: (id: string, equipment: Equipments) => void;
};

function TableEquipement({ equipments, handleOpenModalEdit, handleOpenModalDelete, handleOpenModalEquipment }: Props) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: '10%' }}>VenSalud</TableCell>
                        <TableCell sx={{ width: '20%' }}>Nombre</TableCell>
                        <TableCell sx={{ width: '10%' }}>Marca</TableCell>
                        <TableCell sx={{ width: '5%' }}>Operativo</TableCell>
                        <TableCell sx={{ width: '40%' }}>Centro de Salud</TableCell>
                        <TableCell sx={{ width: '30%' }}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {equipments.map((equipment) => (
                        <TableRow key={equipment.id}>
                            <TableCell>0000</TableCell>
                            <TableCell>{equipment.name}</TableCell>
                            <TableCell>{equipment.brand}</TableCell>
                            <TableCell>{equipment.operative ? "Si" : "No"}</TableCell>
                            <TableCell>{equipment.CareCenter ? equipment.CareCenter.name : 'NO CENTRO'}</TableCell>
                            <TableCell>
                                <IconButton color='primary' aria-label="info" onClick={() => handleOpenModalEquipment(equipment.id, equipment)}>
                                    <AddCommentIcon sx={{ color: 'gray' }} />
                                </IconButton>
                                <IconButton color='primary' aria-label="edit" onClick={() => handleOpenModalEdit(equipment.id, equipment)}>
                                    <ModeEditIcon />
                                </IconButton>
                                <IconButton color='error' aria-label="delete" onClick={() => handleOpenModalDelete(equipment.id, equipment)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableEquipement;
