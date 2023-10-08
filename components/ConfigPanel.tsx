// ConfigPanel.tsx
import React from 'react';

const ConfigPanel = ({ isOpen, onClose }: any) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-white 
            shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } z-10`}
        >
            <div className="p-4 bg-blue-700 text-white">
                <h2 className="text-xl font-semibold mb-4">Configuraciones</h2>
                <button
                    className="absolute top-1 right-1 text-gray-300 hover:text-gray-400"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>

            <div className="mb-4">
                test
            </div>
        </div>
    );
};

export default ConfigPanel;
