import Image from 'next/image'
import React from 'react'
import InputsLogin from './InputsLogin'
import { Button, Checkbox, FormControlLabel } from '@mui/material'
import logo from "@/public/logo.png"

type Props = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    errors: string[];

}

function LeftColumn({ handleSubmit, setEmail, setPassword, errors }: Props) {
    return (
        <div className="px-4 md:px-0 lg:w-6/12">
            <div className="md:mx-6 md:p-12  flex flex-col justify-center items-center">
                {/* <!--Logo--> */}
                <div className="text-center">
                    <Image
                        draggable={false}
                        width={200}
                        height={100}
                        src={logo.src}
                        className="mx-auto my-2"
                        alt="logo"
                    />
                </div>
                <h1 className="text-2xl font-semibold text-center mb-4 mt-2">Iniciar sesión </h1>
                <form className="space-y-4 mb-4 sm:w-96" onSubmit={handleSubmit}>
                    <InputsLogin setEmail={setEmail} setPassword={setPassword} />

                    <div className='flex justify-center md:justify-start items-center'>
                        <FormControlLabel className="text-gray-500"
                            sx={{
                                m: 0, p: 0,
                                '.MuiFormControlLabel-label': { fontSize: 12 }
                            }}
                            control={<Checkbox sx={{
                                p: 0, paddingRight: 0.5, fontSize: 14,
                                '&.Mui-checked': { paddingRight: 0.5, },
                            }}
                                size="small"
                            />}

                            label="Recordar contraseña"
                        />
                    </div>

                    <Button type="submit" variant="contained" className="w-full" style={{
                        background:
                            "linear-gradient(to right, #063FCA, #346DF9, #5182FA)",
                    }}  >Iniciar sesion</Button>
                    <a href="#" className="text-xs hover:underline flex justify-end">Olvidaste la Contraseña?</a>
                </form>

                {errors.length > 0 && (
                    <div className="bg-red-500 text-sm p-2 rounded-md">
                        <ul className="mb-1">
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LeftColumn