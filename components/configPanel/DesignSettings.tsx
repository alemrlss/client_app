import { useState } from 'react';
import ColorsPanel from './DesignSettings/ColorsPanel';
import FontsPanel from './DesignSettings/FontsPanel';
import LanguagesPanel from './DesignSettings/LanguagesPanel';
import ThemesPanel from './DesignSettings/ThemesPanel';

const DesignSettings = () => {

    //Estados de los diseños de la aplicacion! Color - Fuente - Idioma - Tema
    const [selectedColor, setSelectedColor] = useState('#04367e');
    const [selectedFont, setSelectedFont] = useState('Roboto');
    const [selectedLanguage, setSelectedLanguage] = useState('Español');
    const [isDarkMode, setIsDarkMode] = useState(false);


    const handleChangeColor = (color: string) => {
        setSelectedColor(color);
        // Lógica para cambiar el color de la aplicación...
    };

    const handleChangeFont = (font: string) => {
        setSelectedFont(font);
        // Lógica para cambiar la fuente de la aplicación...
    };

    const handleChangeLanguage = (language: string) => {
        setSelectedLanguage(language);
        // Lógica para cambiar el idioma de la aplicación...
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Lógica para cambiar entre temas oscuros y claros
    };

    const colorOptions = [
        { name: 'Azul', color: '#04367e' },
        { name: 'Rojo', color: '#e0223e' },
        { name: 'Celeste', color: '#90F3E4' },
    ];

    const fontOptions = [
        'Roboto',
        'Arial',
        'Helvetica',
        'Verdana',
    ];

    const languageOptions = ['Español', 'Inglés'];

    return (
        <div className="p-3 pb-0">
            <h3 className="text-lg font-semibold mb-1 text-center">Diseño de la App</h3>
            <ColorsPanel colorOptions={colorOptions} selectedColor={selectedColor} handleChangeColor={handleChangeColor} />
            <FontsPanel fontOptions={fontOptions} selectedFont={selectedFont} handleChangeFont={handleChangeFont} />

            <div className="grid grid-cols-2 gap-2">
                <LanguagesPanel languageOptions={languageOptions} selectedLanguage={selectedLanguage} handleChangeLanguage={handleChangeLanguage} />
                <ThemesPanel isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>
        </div>
    );
};

export default DesignSettings;
