import React from "react";
import { BsHouseDoor, BsPerson, BsGear } from "react-icons/bs";
import Image from "next/image";
import logoImage from "../public/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md flex justify-between items-center">
      {/* Izquierda (imagen del logo) */}
      <div className="flex items-center">
        <Image
          src={logoImage}
          alt="Logo de la empresa"
          width={80}
          height={40}
        />
      </div>

      {/* Centro (texto "Administración / Inicio") */}
      <div className="text-center">
        <p className="font-bold text-gray-700 text-lg">
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
        <button className="text-gray-700 mx-1">
          <BsGear className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
