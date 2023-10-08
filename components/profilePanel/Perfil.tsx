import React from "react";
import Image from "next/image";
import perfilImage from '@/public/images/sidebar/default-profile.png';

function Perfil({ openSection }: any) {
  const style = {
    maxHeight: openSection === "perfil" ? "96px" : "0",
    opacity: openSection === "perfil" ? 1 : 0,
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
  };

  return (
    <div className={`ml-4`} style={style}>
      <div className="flex items-center mb-4 animate-fade-up animate-duration-[4000ms]">
        <div className="relative w-16 h-16 rounded-full mr-2 overflow-hidden">
          <Image
            src={perfilImage.src}
            alt="Imagen de perfil"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-center">Jissel Ortega</p>
          <button className="text-blue-500 hover:underline">
            Cambiar imagen de perfil
          </button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
