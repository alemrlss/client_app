"use client"
import React, { useState, useEffect } from 'react';

type CentroDeSalud = {
    id: number;
    nombre: string;
    tipo: string;
    municipio: string;
    direccion: string;
    director: string;
    telefonoResponsable: string;
};

function CentrosDeSaludPage() {
    const [centrosDeSalud, setCentrosDeSalud] = useState<CentroDeSalud[]>([]);

    useEffect(() => {
        // Datos de ejemplo
        const dataEjemplo: CentroDeSalud[] = [
            {
                id: 1,
                nombre: 'Centro de Salud A',
                tipo: 'Tipo 1',
                municipio: 'Maracaibo',
                direccion: 'Dirección 1',
                director: 'Director 1',
                telefonoResponsable: '123-456-7890',
            },
            {
                id: 2,
                nombre: 'Centro de Salud B',
                tipo: 'Tipo 2',
                municipio: 'Municipio 2',
                direccion: 'Dirección 2',
                director: 'Director 2',
                telefonoResponsable: '987-654-3210',
            },
            {
                id: 3,
                nombre: 'Centro de Salud C',
                tipo: 'Tipo 3',
                municipio: 'Municipio 3',
                direccion: 'Dirección 3',
                director: 'Director 3',
                telefonoResponsable: '555-555-5555',
            },
            {
                id: 4,
                nombre: 'Centro de Salud D',
                tipo: 'Tipo 4',
                municipio: 'Municipio 4',
                direccion: 'Dirección 4',
                director: 'Director 4',
                telefonoResponsable: '777-777-7777',
            },
            {
                id: 5,
                nombre: 'Centro de Salud E',
                tipo: 'CDI',
                municipio: 'Municipio 5',
                direccion: 'Dirección 5',
                director: 'Director 5',
                telefonoResponsable: '999-999-9999',
            },
            {
                id: 6,
                nombre: 'Centro de Salud F',
                tipo: 'CDI',
                municipio: 'Municipio 6',
                direccion: 'Dirección 6',
                director: 'Director 6',
                telefonoResponsable: '111-111-1111',
            },
            {
                id: 7,
                nombre: 'Centro de Salud G',
                tipo: 'Tipo 7',
                municipio: 'Municipio 7',
                direccion: 'Dirección 7',
                director: 'Director 7',
                telefonoResponsable: '222-222-2222',
            },
            {
                id: 8,
                nombre: 'Centro de Salud H',
                tipo: 'Tipo 8',
                municipio: 'Municipio 8',
                direccion: 'Dirección 8',
                director: 'Director 8',
                telefonoResponsable: '333-333-3333',
            },
            {
                id: 9,
                nombre: 'Centro de Salud I',
                tipo: 'Tipo 9',
                municipio: 'Municipio 9',
                direccion: 'Dirección 9',
                director: 'Director 9',
                telefonoResponsable: '444-444-4444',
            },
            {
                id: 10,
                nombre: 'Centro de Salud J',
                tipo: 'Tipo 10',
                municipio: 'Municipio 10',
                direccion: 'Dirección 10',
                director: 'Director 10',
                telefonoResponsable: '666-666-6666',
            },
        ];
        setCentrosDeSalud(dataEjemplo);
    }, []);

    const handleEdit = (centroId: number) => {
    };

    const handleDelete = (centroId: number) => {
    };

    return (
        <main className="flex flex-col items-center justify-center p-4">
            <table className="w-full border-collapse border border-gray-300">
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
        </main>
    );
}

export default CentrosDeSaludPage;
