import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

function LiteralSearchSwitch({ isLiteralSearch, toggleLiteralSearch }) {
    return (
        <div className="flex items-center">
            <div className="mr-2">Buscar exactamente:</div>
            <Switch
                checked={isLiteralSearch}
                onChange={toggleLiteralSearch}
                color="primary"
            />
        </div>
    );
}

function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLiteralSearch, setIsLiteralSearch] = useState(false);

    const toggleLiteralSearch = () => {
        setIsLiteralSearch(!isLiteralSearch);
    };

    const handleSearch = () => {
        // Realiza la búsqueda con los parámetros adecuados, utilizando isLiteralSearch según la opción del usuario.
        const searchQuery = isLiteralSearch ? searchTerm : `*${searchTerm}*`;

        console.log(searchQuery)
    };

    return (
        <div className="p-4 border rounded-md">
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 rounded-md w-full"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
                Buscar
            </button>
            <LiteralSearchSwitch
                isLiteralSearch={isLiteralSearch}
                toggleLiteralSearch={toggleLiteralSearch}
            />
        </div>
    );
}

export default SearchComponent;
