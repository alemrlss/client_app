import React from "react";
import { BsHouseDoor, BsPerson, BsGear } from "react-icons/bs";
import Image from "next/image";
import logoImage from "@/public/images/navbar/logo2.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md flex justify-between items-center p-2">
      <div className="flex items-center pl-2">
        <p className="font-bold text-gray-700 text-lg">
          Administración / Inicio
        </p>
      </div>


      <div className="text-center">

        <Image
          className="rounded shadow-sm shadow-black"
          src={logoImage}
          alt="Logo de la empresa"
          width={200}
          height={100}
        />
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
