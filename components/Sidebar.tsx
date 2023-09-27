"use client";
import React, { useState } from "react";
import { Josefin_Sans } from "next/font/google";
import { BsBoxArrowRight } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import sidebarSections from "@/data/sidebarSections";
import Link from "next/link"
const josefin_sans = Josefin_Sans({
  //Fuente de google fonts configuracion
  weight: ["400"],
  subsets: ["latin"],
});
import Image from "next/image";
import profileDefault from "@/public/images/sidebar/default-profile.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("/");

  //Funcion para abrir y cerrar el sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  //Funcion manejedaora para cambiar de seccion
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const activeColor = "text-color3 bg-slate-100 rounded-md";
  const hoverActiveColor = ""; // Color de hover para secciones activas
  const hoverInactiveColor = "hover:text-color5"; // Color de hover para secciones inactivas

  return (
    <aside
      className={`bg-color3 text-white ${isSidebarOpen ? "w-72" : "w-20"
        } transition-all duration-300 ease-in-out relative`}
    >
      {isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-0 right-0 mt-2 mr-2 text-white"
        >
          <MdClose className=" font-bold text-2xl" />
        </button>
      )}
      {isSidebarOpen && (
        <div
          className={`${josefin_sans.className}  flex justify-center items-center border-b border-gray-500`}
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              className=""
              src={profileDefault}
              alt="Logo de la empresa"
              width={140}
              height={140}
            />
            <p className="text-center text-sm">Gerente</p>
            <p className="text-center text-base pb-1">Jissel Ortega</p>
          </div>
        </div>
      )}
      {!isSidebarOpen && (
        <div className="flex justify-center py-1 border-b border-gray-500">
          <button onClick={toggleSidebar} className="">
            <BsBoxArrowRight className="text-4xl text-white" />
          </button>
        </div>
      )}
      <ul
        className={`my-4 space-y-2 flex flex-col ${isSidebarOpen ? `justify-start` : `justify-center items-center`
          }`}
      >
        {sidebarSections.map((section) => (
          <Link href={`${section.id}`} key={section.id} className={`mx-2 p-2 text-lg font-semibold cursor-pointer 
          flex ${activeSection === section.id
              ? `${activeColor} ${hoverActiveColor}`
              : hoverInactiveColor
            }`}
            onClick={() => {
              handleSectionClick(section.id);
            }}>
            <li
              className="flex"
            >

              <span className="flex items-center">
                {React.createElement(section.icon, { className: "h-6 w-6" })}
              </span>

              {isSidebarOpen && (
                <span className="ml-2 text-lg font-semibold">
                  {section.title}
                </span>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
