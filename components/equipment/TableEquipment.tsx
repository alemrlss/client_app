import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { Box, Typography } from '@mui/material';


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
    equipments: Equipments[];
    handleOpenModalDelete: (id: string, equipment: Equipments) => void;
    handleOpenModalEdit: (id: string, equipment: Equipments) => void;
};


function TableEquipement({ equipments, handleOpenModalEdit, handleOpenModalDelete }: Props) {

    return (
        <div>
            <table className="w-full border-collapse border border-gray-300 text-xs">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Nombre</th>
                        <th className="border p-2">Modelo</th>
                        <th className="border p-2">Marca</th>
                        <th className="border p-2">Serial</th>
                        <th className="border p-2">Bien Nacional</th>
                        <th className="border p-2">Estado</th>
                        <th className="border p-2">Centro de Salud</th>
                        <th className="border p-2">Descripcion</th>
                        <th className="border p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {equipments.map((equipment) => (
                        <tr key={equipment.id} className='text-center'>
                            <td className="border p-2">{equipment.name}</td>
                            <td className="border p-2">{equipment.model}</td>
                            <td className="border p-2">{equipment.brand}</td>
                            <td className="border p-2">{equipment.key}</td>
                            <td className="border p-2">{equipment.nationalKey}</td>
                            <td className="border p-2">{equipment.status}</td>
                            <td className="border p-2">{equipment.centroDeSalud ? equipment.centroDeSalud : 'Centro'}</td>
                            <td className="border p-2">{equipment.description ? equipment.description : 'Sin Descripcion'}</td>
                            <td className="border p-2">
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
        </div>
    );
}

export default TableEquipement;
