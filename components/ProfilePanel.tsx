// ConfigPanel.tsx
import React from 'react';

const ConfigPanel = ({ isOpen, onClose }: any) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-white 
            shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } z-10`}
        >
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Perfil</h2>
            </div>
            <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={onClose}>
                Cerrar
            </button>
        </div>
    );
};

export default ConfigPanel;
