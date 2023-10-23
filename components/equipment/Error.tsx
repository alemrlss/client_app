import React from 'react'

type Props = {}

function Error({ }: Props) {
    return (
        <div className='text-center text-red-500 font-bold mt-4'>
            <h1>Hubo un error al cargar los datos</h1>
            <p>Por favor, intente mas tarde</p>
        </div>
    )
}

export default Error