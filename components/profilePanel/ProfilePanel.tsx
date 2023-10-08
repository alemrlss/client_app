import React, { useState } from 'react';
import Perfil from './Perfil';
import Clave from './Clave';
import { FaSignOutAlt } from 'react-icons/fa'
const ConfigPanel = ({ isOpen, onClose }: any) => {
    const [openSection, setOpenSection] = useState('');

    const toggleSection = (sectionName: string) => {
        setOpenSection((prevSection) => (prevSection === sectionName ? '' : sectionName));
    };

    return (
        <div
            className={`fixed top-0 right-0 h-auto w-64 bg-white shadow-lg ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } z-10 transition-transform`}
        >
            <div className="p-4 bg-blue-700 text-white">
                <h2 className="text-xl font-semibold mb-4">Gestion de Perfil</h2>
                <button
                    className="absolute top-1 right-1 text-gray-300 hover:text-gray-400"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>




            <div className="mb-4">

                {/* Sección de Perfil */}


                <a
                    className={`text-lg cursor-pointer font-semibold flex items-center pl-2 p-1 m-2 focus:outline-none rounded-xl hover:bg-blue-200 hover:text-blue-700`}
                    onClick={() => toggleSection('perfil')}
                >
                    Cambiar foto de perfil
                    <p
                        className={`${openSection === 'perfil' ? 'rotate-0' : 'rotate-180'
                            } transform transition-transform text-xs ml-1`}
                    >
                        ▼
                    </p>
                </a>
                <Perfil openSection={openSection} />


                <a
                    className={`text-lg cursor-pointer font-semibold flex items-center pl-2 p-1 m-2 focus:outline-none rounded-xl hover:bg-blue-200 hover:text-blue-700`}
                    onClick={() => toggleSection('clave')}
                >
                    Cambiar contraseña
                    <p
                        className={`${openSection === 'clave' ? 'rotate-0' : 'rotate-180'
                            } transform transition-transform text-xs ml-1`}
                    >
                        ▼
                    </p>
                </a>
                <Clave openSection={openSection} />

                <div className='flex justify-center mx-4 my-2'>
                    <button
                        className={`text-sm cursor-pointer font-semibold flex items-center p-2 focus:outline-none rounded-b-xl hover:bg-red-200 hover:text-red-900`}
                    >
                        Cerrar Sesión <FaSignOutAlt className="ml-1 hover:text-red-900" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfigPanel;
