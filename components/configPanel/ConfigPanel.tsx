import React from 'react';
import DesignSettings from './DesignSettings';
import DeveloperSettings from './DevelopersSettings';
import { FaTimes } from 'react-icons/fa';

const ConfigPanel = ({ isOpen, onClose }: any) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-white 
            shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } z-10 flex flex-col justify-between`}
        >
            <div className="p-4 bg-blue-700 text-white">
                <h2 className="text-xl font-semibold mb-4">Configuraciones</h2>
                <button
                    className="absolute top-2 right-2 text-gray-300 hover:text-gray-400 "
                    onClick={onClose}
                >
                </button>
            </div>

            <DesignSettings />
            <DeveloperSettings />

            <div className="mt-auto p-4">
                <p className="text-sm font-semibold">Versión: v1.0.0</p>
            </div>
        </div>
    );
};

export default ConfigPanel;
