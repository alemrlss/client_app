import React from 'react'

type Props = {
    languageOptions: string[],
    selectedLanguage: string,
    handleChangeLanguage: (language: string) => void;
}

function LanguagesPanel({ languageOptions, selectedLanguage, handleChangeLanguage }: Props) {
    return (
        <div className="bg-gray-100 p-2 rounded-lg">
            <h4 className="text-md font-semibold mb-0">Idioma</h4>
            <select
                className="w-full p-2 border rounded-md text-sm"
                value={selectedLanguage}
                onChange={(e) => handleChangeLanguage(e.target.value)}
            >
                {languageOptions.map((language) => (
                    <option key={language} value={language}>
                        {language}
                    </option>
                ))}
            </select>
        </div>)
}

export default LanguagesPanel