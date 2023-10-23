import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Equipments } from '@/types/Equipment';

type Props = {
    equipments: Equipments[];
    handleOpenModalDelete: (id: string, equipment: Equipments) => void;
    handleOpenModalEdit: (id: string, equipment: Equipments) => void;
    handleOpenModalEquipment: (id: string, equipment: Equipments) => void;
};

function TableEquipement({ equipments, handleOpenModalEdit, handleOpenModalDelete, handleOpenModalEquipment }: Props) {

    return (
        <table className="w-full border-collapse border border-gray-300 text-xs">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">VenSalud</th>
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Marca</th>
                    <th className="border p-2">Operativo</th>
                    <th className="border p-2">Centro de Salud</th>
                    <th className="border p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {equipments.map((equipment) => (
                    <tr key={equipment.id} className='text-center'>
                        <td className="border p-2 max-w-[10px]">0000</td>
                        <td className="border p-2 max-w-[50px]">{equipment.name}</td>
                        <td className="border p-2 max-w-[10px]">{equipment.brand}</td>
                        <td className="border p-2 max-w-[10px]">{equipment.operative ? "Si" : "No"}</td>
                        <td className="border p-2 max-w-[10px]">{equipment.CareCenter ? equipment.CareCenter.name : 'NO CENTRO'}</td>
                        <td className="border p-2 max-w-[20px]">
                            <IconButton
                                color='primary'
                                aria-label="info"
                                size="large"

                                onClick={() => handleOpenModalEquipment(equipment.id, equipment)}
                            >
                                <AddCommentIcon sx={{ color: 'gray' }} />

                            </IconButton>
                            <IconButton
                                color='primary'
                                aria-label="edit"
                                size="large"
                                onClick={() => handleOpenModalEdit(equipment.id, equipment)}
                            >
                                <ModeEditIcon />
                            </IconButton>
                            <IconButton
                                color='error'
                                aria-label="delete"
                                size="large"
                                onClick={() => { handleOpenModalDelete(equipment.id, equipment) }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
}

export default TableEquipement;
