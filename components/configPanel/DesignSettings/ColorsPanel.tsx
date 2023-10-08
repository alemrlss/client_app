import React from 'react'
type ColorOption = {
    name: string;
    color: string;
};
type Props = {
    colorOptions: ColorOption[];
    selectedColor: string,
    handleChangeColor: (color: string) => void;
}

function ColorsPanel({ colorOptions, selectedColor, handleChangeColor }: Props) {
    return (
        <div className='bg-gray-100 p-2 rounded-lg mb-2'>
            {/* Color de la App */}
            <h4 className="text-md font-semibold mb-1">Colores del panel</h4>
            <div className="flex items-center space-x-1">
                {colorOptions.map((option) => (
                    <div
                        key={option.color}
                        className={`w-6 h-6 cursor-pointer rounded-full ${selectedColor === option.color ? 'border border-black' : ''
                            }`}
                        style={{ backgroundColor: option.color }}
                        onClick={() => handleChangeColor(option.color)}
                        title={option.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default ColorsPanel