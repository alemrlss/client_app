"use client";
import React, { useState } from "react";
import { BsBoxArrowRight } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import sidebarSections from "@/data/sidebarSections";
import sidebarBackgroundImage from "@/public/images/sidebar/sidebarBackground.png";
import Image from "next/image";
import profileDefault from "@/public/images/sidebar/default-profile.png";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState(pathname);

  // Función para abrir y cerrar el sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Función manejadora para cambiar de sección
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const activeColor = "text-color3 bg-slate-100 rounded-r-2xl rounded-l-sm";
  const hoverActiveColor = "";
  const hoverInactiveColor = "hover:text-color5";


  return (
    <aside
      className={` text-white ${isSidebarOpen ? "w-72" : "w-20"
        } transition-all duration-300 ease-in-out relative`}
      style={{
        background: `rgba(255, 255, 255, 1) url(${sidebarBackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
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
          className={`flex justify-center items-center border-b border-gray-500`}
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
            <p className="text-center text-base pb-1">Jose Manuel Gonzalez</p>
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
          <a href={`${section.id}`} key={section.id} className={`mx-2 p-2 text-lg font-semibold cursor-pointer 
          flex 
          ${activeSection === section.id ? `${activeColor} ${hoverActiveColor}` : hoverInactiveColor}`}
            onClick={() => {
              router.push(section.id);
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
          </a>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
