import React from 'react'
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa';

type Props = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

function ThemesPanel({ isDarkMode, toggleDarkMode }: Props) {
    return (
        <div className="bg-gray-100 p-2 rounded-lg flex flex-col justify-center items-center">
            <div className="flex items-center">
                <FaSun className={`text-yellow-500 mr-2 ${!isDarkMode ? 'opacity-50' : ''}`} />
                <Switch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    onColor="#000"
                    offColor="#ccc"
                    checkedIcon={false}
                    uncheckedIcon={false}
                />
                <FaMoon className={`text-blue-500 ml-2 ${isDarkMode ? 'opacity-50' : ''}`} />
            </div>
            <p className="text-xs">{isDarkMode ? 'Tema Oscuro' : 'Tema Claro'}</p>
        </div>)
}

export default ThemesPanel