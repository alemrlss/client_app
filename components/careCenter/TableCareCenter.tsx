import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CareCenter } from '@/types/CareCenter';
import AddCommentIcon from '@mui/icons-material/AddComment';

type Props = {
    careCenters: CareCenter[];
    handleEdit: (id: string) => void;
    handleDelete: (id: string) => void;
    handleOpenModalCareCenter: (id: string) => void;
};

function TableCareCenter({ careCenters, handleEdit, handleDelete, handleOpenModalCareCenter }: Props) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: '20%' }}>Nombre</TableCell>
                        <TableCell sx={{ width: '5%' }}>Tipo</TableCell>
                        <TableCell sx={{ width: '10%' }}>Director</TableCell>
                        <TableCell sx={{ width: '10%' }}>Estado</TableCell>
                        <TableCell sx={{ width: '10%' }}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {careCenters.map((center) => (
                        <TableRow key={center.id}>
                            <TableCell>{center.name}</TableCell>
                            <TableCell>{center.typeCenter}</TableCell>
                            <TableCell>{center.director ? center.director : 'NO ASIGNADO'}</TableCell>
                            <TableCell>{center.State.name}</TableCell>
                            <TableCell>
                                <IconButton color='primary' aria-label="info"
                                    onClick={() => {
                                        //handleOpenModalEquipment(equipment.id, equipment)
                                        console.log(center.id)

                                        handleOpenModalCareCenter(center.id)

                                    }}>
                                    <AddCommentIcon sx={{ color: 'gray' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableCareCenter;
