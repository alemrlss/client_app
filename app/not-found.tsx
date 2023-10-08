import React from 'react';
import Image from "next/image";
import notFoundImage from "@/public/images/404.png";
const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Página no encontrada</h1>
            <p className="text-lg text-gray-600">
                Lo sentimos, la página que buscas no está disponible.
            </p>
            <Image
                className=""
                src={notFoundImage}
                alt="Pagina no encontrada"
                width={500}
                height={500}
            />
            <a
                href="/"
                className="mt-4 text-blue-500 text-xl hover:underline"
            >
                Volver a la página de inicio
            </a>
        </div>
    );
};

export default NotFound;
