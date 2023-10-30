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
import { Repairs } from '@/types/Repairs';
import { formatDateTime } from '@/utils/formatDate';

type Props = {
    repairs: Repairs[];
    handleOpenModalDelete: (id: string, repair: Repairs) => void;
    //handleOpenModalEdit: (id: string, equipment: Equipments) => void;
    handleOpenModalRepair: (id: string, repair: Repairs) => void;
};

function TableRepairs({ repairs, handleOpenModalDelete, handleOpenModalRepair }: Props) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: '30%' }}>Nombre del Equipo Reparado</TableCell>
                        <TableCell sx={{ width: '20%' }}>Fecha</TableCell>

                        <TableCell sx={{ width: '10%' }}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {repairs.map((repair) => (
                        <TableRow key={repair.id}>
                            <TableCell>{repair.Equipments.name}</TableCell>
                            <TableCell>{formatDateTime(repair.date)}</TableCell>

                            <TableCell>
                                <IconButton color='primary' aria-label="info"
                                    onClick={() => { handleOpenModalRepair(repair.id, repair) }}
                                >
                                    <AddCommentIcon sx={{ color: 'gray' }} />
                                </IconButton>
                                <IconButton color='primary' aria-label="edit"
                                >
                                    <ModeEditIcon />
                                </IconButton>
                                <IconButton color='error' aria-label="delete"
                                    onClick={() => { handleOpenModalDelete(repair.id, repair) }}
                                >
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

export default TableRepairs;
