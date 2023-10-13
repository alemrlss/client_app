import React from 'react'

type Props = {
    fontOptions: string[],
    selectedFont: string,
    handleChangeFont: (font: string) => void;

}

function FontsPanel({ fontOptions, selectedFont, handleChangeFont }: Props) {
    return (
        <div className='bg-gray-100 p-2 rounded-lg mb-2'>
            <h4 className="text-md font-semibold mb-0">Fuente</h4>
            <select
                className="w-full p-2 border rounded-md text-sm"
                value={selectedFont}
                onChange={(e) => handleChangeFont(e.target.value)}
            >
                {fontOptions.map((font) => (
                    <option key={font} value={font}>
                        {font}
                    </option>
                ))}
            </select>
        </div>)
}

export default FontsPanel