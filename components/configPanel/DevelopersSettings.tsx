import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const DeveloperSettings = () => {
    const developers = [
        {
            fullname: 'Alejandro Morales',
            github: 'alemrlss',
            linkedin: 'alemrlss',
            rol: 'Fullstack Developer',
            profileImage: 'https://www.example.com/alejandro.jpg',
            bg: 'bg-gray-300',
        },
        {
            fullname: 'Jissel Ortega',
            github: 'alemrlss',
            linkedin: 'alemrlss',
            rol: 'Design',
            profileImage: 'https://www.example.com/alejandro.jpg',
            bg: 'bg-sky-100',
        },
        {
            fullname: 'Miguel Coronel',
            github: 'alemrlss',
            linkedin: 'alemrlss',
            rol: 'Backend Developer',
            profileImage: 'https://www.example.com/alejandro.jpg',
            bg: 'bg-gray-300',
        },
    ];

    return (
        <div className="p-3">
            <h3 className="text-lg font-semibold mb-1 underline text-center">Desarrolladores</h3>
            {developers.map((developer, index) => (
                <div key={index} className={`${developer.bg} p-3 rounded-lg mb-2 transition-transform transform hover:scale-105`}>
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="text-md font-semibold">{developer.fullname}</h4>
                        <div className="flex space-x-2">
                            <a href={`https://github.com/${developer.github}`} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl text-gray-600 hover:text-black cursor-pointer transition-transform transform hover:scale-125" />
                            </a>
                            <a href={`https://www.linkedin.com/in/${developer.linkedin}`} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl text-gray-600 cursor-pointer hover:text-blue-500 transition-transform transform hover:scale-125" />
                            </a>
                        </div>
                    </div>
                    <p className='text-xs'>{developer.rol}</p>
                </div>
            ))}
        </div>
    );
};

export default DeveloperSettings;
