"use client"
import React, { useState } from "react";
import { BsHouseDoor, BsPerson, BsGear } from "react-icons/bs";
import Image from "next/image";
import logoImage from "@/public/images/navbar/logo2.png";
import ConfigPanel from "./ConfigPanel";

const Navbar: React.FC = () => {


  const [isConfigPanelOpen, setIsConfigPanelOpen] = useState(false);

  const toggleConfigPanel = () => {
    setIsConfigPanelOpen(!isConfigPanelOpen);
  };

  return (
    <nav className="bg-white shadow-md flex justify-between items-center p-2 h-auto">
      <div className="flex items-center pl-2">
        <p className="font-bold text-gray-700 text-base">
          Administración / Inicio
        </p>
      </div>



      {/* Derecha (botones) */}
      <div className="flex items-center space-x-2 mr-2">
        <button className="text-gray-700 mx-1">
          <BsHouseDoor className="text-2xl" />
        </button>
        <button className="text-gray-700 mx-1">
          <BsPerson className="text-2xl" />
        </button>
        <button className="text-gray-700 mx-1" onClick={toggleConfigPanel}>
          <BsGear className="text-2xl" />
        </button>
      </div>
      <ConfigPanel isOpen={isConfigPanelOpen} onClose={toggleConfigPanel} />
    </nav>
  );
};

export default Navbar;
