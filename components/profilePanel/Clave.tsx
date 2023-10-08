import React from "react";

function Clave({ openSection }: any) {

    const style = {
        maxHeight: openSection === "clave" ? "400px" : "0",
        opacity: openSection === "clave" ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
    };
    return (
        <div className="ml-4" style={style}>

            <div className="mb-4">
                <label
                    htmlFor="currentPassword"
                    className="block text-sm font-medium text-gray-700"
                >
                    Contraseña actual:
                </label>
                <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    autoComplete="current-password"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium text-gray-700"
                >
                    Nueva contraseña:
                </label>
                <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    autoComplete="new-password"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                >
                    Confirmar nueva contraseña:
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    autoComplete="new-password"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <button
                className="px-2 py-2 bg-blue-500 text-md text-white rounded-md hover:bg-blue-600"
            >
                Cambiar contraseña
            </button>
        </div>
    );
}

export default Clave;
