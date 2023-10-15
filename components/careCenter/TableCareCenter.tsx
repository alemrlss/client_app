"use client"
import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
type CentroDeSalud = {
    id: string;
    name: string;
    tipo: string;
    municipio: string;
    direccion: string;
    director: string;
    typeCenter: number;
    telefonoResponsable: string;
};
type Props = {
    careCenters: CentroDeSalud[];
    handleEdit: (id: string) => void;
    handleDelete: (id: string) => void;
}

function TableCareCenter({ careCenters, handleEdit, handleDelete }: Props) {
    return (
        <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Tipo</th>
                    <th className="border p-2">Municipio</th>
                    <th className="border p-2">Dirección</th>
                    <th className="border p-2">Director</th>
                    <th className="border p-2">Teléfono del Responsable</th>
                    <th className="border p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {careCenters.map((center) => (
                    <tr key={center.id} className='text-center'>
                        <td className="border p-2 text-xs">{center.name}</td>
                        <td className="border p-2">{center.typeCenter}</td>
                        <td className="border p-2">{center.municipio}</td>
                        <td className="border p-2">{center.direccion}</td>
                        <td className="border p-2">{center.director ? center.director : 'NO ASIGNADO'}</td>
                        <td className="border p-2">{center.telefonoResponsable}</td>
                        <td className="border p-2">

                            <IconButton color='primary' aria-label="delete" size="large" onClick={() => handleEdit(center.id)}
                            >
                                <ModeEditIcon />
                            </IconButton>
                            <IconButton color='error' aria-label="delete" size="large" onClick={() => handleDelete(center.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableCareCenter