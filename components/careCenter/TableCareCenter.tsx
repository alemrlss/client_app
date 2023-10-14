"use client"
import React from 'react'

type CentroDeSalud = {
    id: number;
    nombre: string;
    tipo: string;
    municipio: string;
    direccion: string;
    director: string;
    telefonoResponsable: string;
};
type Props = {
    centrosDeSalud: CentroDeSalud[];
    handleEdit: (id: number) => void;
    handleDelete: (id: number) => void;
}

function TableCareCenter({ centrosDeSalud, handleEdit, handleDelete }: Props) {
    return (
        <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Tipo</th>
                    <th className="border p-2">Municipio</th>
                    <th className="border p-2">Dirección</th>
                    <th className="border p-2">Director</th>
                    <th className="border p-2">Teléfono del Responsable</th>
                    <th className="border p-2"></th>
                </tr>
            </thead>
            <tbody>
                {centrosDeSalud.map((centro) => (
                    <tr key={centro.id} className='text-center'>
                        <td className="border p-2">{centro.id}</td>
                        <td className="border p-2">{centro.nombre}</td>
                        <td className="border p-2">{centro.tipo}</td>
                        <td className="border p-2">{centro.municipio}</td>
                        <td className="border p-2">{centro.direccion}</td>
                        <td className="border p-2">{centro.director}</td>
                        <td className="border p-2">{centro.telefonoResponsable}</td>
                        <td className="border p-2">
                            <button
                                onClick={() => handleEdit(centro.id)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(centro.id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1"
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableCareCenter