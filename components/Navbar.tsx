"use client"
import React, { useState } from "react";
import { BsHouseDoor, BsPerson, BsGear } from "react-icons/bs";
import ConfigPanel from "./ConfigPanel";
import ProfilePanel from "./ProfilePanel";
import Link from "next/link"


const Navbar: React.FC = () => {
  const [isConfigPanelOpen, setIsConfigPanelOpen] = useState(false);
  const [isProfilePanelOpen, setIsProfilePanelOpen] = useState(false);
  const toggleConfigPanel = () => {
    setIsConfigPanelOpen(!isConfigPanelOpen);
  };
  const toggleProfilePanel = () => {
    setIsProfilePanelOpen(!isProfilePanelOpen);
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
          <Link href={`/`}>
            <BsHouseDoor className="text-2xl" /></Link>
        </button>
        <button className="text-gray-700 mx-1" onClick={toggleProfilePanel}>
          <BsPerson className="text-2xl" />
        </button>
        <button className="text-gray-700 mx-1" onClick={toggleConfigPanel}>
          <BsGear className="text-2xl" />
        </button>
      </div>
      <ConfigPanel isOpen={isConfigPanelOpen} onClose={toggleConfigPanel} />
      <ProfilePanel isOpen={isProfilePanelOpen} onClose={toggleProfilePanel} />
    </nav>
  );
};

export default Navbar;
