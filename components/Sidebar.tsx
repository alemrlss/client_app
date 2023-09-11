"use client"
import React, { useState } from "react";
import {
    BsBoxArrowLeft,
    BsBoxArrowRight,
    BsFillHouseLockFill,
    BsFillHousesFill,
} from "react-icons/bs";
import {
    FaWarehouse,
    FaHospital,
    FaTags,
    FaMapMarkedAlt,
    FaBriefcaseMedical,
    FaUsers,
    FaFileAlt,
} from "react-icons/fa";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({  //Fuente de google fonts configurando
    weight: ["400"],
    subsets: ["latin"],
});

const Sidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("inicio");

    const toggleSidebar = () => {           //Funcion para abrir y cerrar el sidebar
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSectionClick = (sectionName: string) => { //Funcion manejedaora para cambiar de seccion
        setActiveSection(sectionName);
    };

    const activeColor = "text-color3 bg-slate-100 rounded-md";
    const hoverActiveColor = ""; // Color de hover para secciones activas
    const hoverInactiveColor = "hover:text-color5"; // Color de hover para secciones inactivas

    return (
        <aside
            className={`bg-color3 text-white ${isSidebarOpen ? "w-72" : "w-20"
                } transition-all duration-300 ease-in-out`}
        >
            {isSidebarOpen && (
                <div className={`${josefin_sans.className} py-6 px-4 flex bg-blue-900`}>
                    <h2 className="text-center text-xl border-b border-white">ADMINISTRACION VENSALUD</h2>

                    <BsBoxArrowLeft onClick={toggleSidebar}
                        className="text-5xl cursor-pointer text-white" />
                </div>
            )}

            {!isSidebarOpen && (
                <div className="flex justify-end pr-2  border-white border-opacity-10 bg-blue-900">
                    <button
                        onClick={toggleSidebar}
                        className=""
                    >
                        <BsBoxArrowRight className="text-5xl text-white" />
                    </button>
                </div>
            )}

            <ul className="ml-2 my-4 space-y-4 flex flex-col justify-start">
                <li>
                    <div
                        className={`mx-2 p-2 text-lg font-semibold cursor-pointer flex ${activeSection === "inicio"
                            ? `${activeColor} ${hoverActiveColor}`
                            : hoverInactiveColor
                            }`}
                        onClick={() => handleSectionClick("inicio")}
                    >
                        <BsFillHousesFill className="inline-block mr-3 h-6 w-6" />
                        {isSidebarOpen && (
                            <p className="ml-2 text-lg font-semibold">Inicio</p>
                        )}
                    </div>
                </li>
                <li>
                    <div
                        className={`mx-2 p-2 text-lg font-semibold cursor-pointer flex ${activeSection === "inventario"
                            ? `${activeColor} ${hoverActiveColor}`
                            : hoverInactiveColor
                            }`}
                        onClick={() => handleSectionClick("inventario")}
                    >
                        <FaWarehouse className="inline-block mr-3 h-6 w-6" />
                        {isSidebarOpen && (
                            <p className="ml-2 text-lg font-semibold">Inventario</p>
                        )}
                    </div>
                </li>
                <li>
                    <div
                        className={`mx-2 p-2 text-lg font-semibold cursor-pointer flex ${activeSection === "centros_de_salud"
                            ? `${activeColor} ${hoverActiveColor}`
                            : hoverInactiveColor
                            }`}
                        onClick={() => handleSectionClick("centros_de_salud")}
                    >
                        <FaHospital className="inline-block mr-3 h-6 w-6" />
                        {isSidebarOpen && (
                            <p className="ml-2 text-lg font-semibold">Centros de Salud</p>
                        )}
                    </div>
                </li>
                <li>
                    <div
                        className={`mx-2 p-2 text-lg font-semibold cursor-pointer flex ${activeSection === "marcas"
                            ? `${activeColor} ${hoverActiveColor}`
                            : hoverInactiveColor
                            }`}
                        onClick={() => handleSectionClick("marcas")}
                    >
                        <FaTags className="inline-block mr-3 h-6 w-6" />
                        {isSidebarOpen && (
                            <p className="ml-2 text-lg font-semibold">Marcas</p>
                        )}
                    </div>
                </li>
                <li>
                    <div
                        className={`mx-2 p-2 text-lg font-semibold cursor-pointer flex ${activeSection === "municipios"
                            ? `${activeColor} ${hoverActiveColor}`
                            : hoverInactiveColor
                            }`}
                        onClick={() => handleSectionClick("municipios")}
                    >
                        <FaMapMarkedAlt className="inline-block mr-3 h-6 w-6" />
                        {isSidebarOpen && (
                            <p className="ml-2 text-lg font-semibold">Municipios</p>
                        )}
                    </div>
                </li>
                <li>
                    <div
                        className={`mx-2 p-2 text-lg font-semibold cursor-pointer flex ${activeSection === "bajas_tecnicas"
                            ? `${activeColor} ${hoverActiveColor}`
                            : hoverInactiveColor
                            }`}
                        onClick={() => handleSectionClick("bajas_tecnicas")}
                    >
                        <FaBriefcaseMedical className="inline-block mr-3 h-6 w-6" />
                        {isSidebarOpen && (
                            <p className="ml-2 text-lg font-semibold">Bajas Técnicas</p>
                        )}
                    </div>
                </li>
                <li>
                    <div
                        className={`mx-2 p-2 text-lg font-semibold cursor-pointer flex ${activeSection === "usuarios"
                            ? `${activeColor} ${hoverActiveColor}`
                            : hoverInactiveColor
                            }`}
                        onClick={() => handleSectionClick("usuarios")}
                    >
                        <FaUsers className="inline-block mr-3 h-6 w-6" />
                        {isSidebarOpen && (
                            <p className="ml-2 text-lg font-semibold">Usuarios</p>
                        )}
                    </div>
                </li>
                <li>
                    <div
                        className={`mx-2 p-2 text-lg font-semibold cursor-pointer flex ${activeSection === "reportes"
                            ? `${activeColor} ${hoverActiveColor}`
                            : hoverInactiveColor
                            }`}
                        onClick={() => handleSectionClick("reportes")}
                    >
                        <FaFileAlt className="inline-block mr-3 h-6 w-6" />
                        {isSidebarOpen && (
                            <p className="ml-2 text-lg font-semibold">Reportes</p>
                        )}
                    </div>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
