import React from 'react';
import backgroundColumn from '@/public/images/sidebar/sidebarBackground.png'
type Props = {};

function RightColumn({ }: Props) {
    return (
        <div
            className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
            style={{
                background: `rgba(255, 255, 255, 1) url(${backgroundColumn.src})`,

            }}
        >
            <div className="px-4 py-6 text-white md:mx-6 md:p-12 ">
                <div className='hidden md:block'>
                    {/* <!--Lo que vaya aqui dentro. No se renderizara para mobile--> */}
                    <h4 className="mb-6 text-xl font-semibold  ">
                        Debemos agregar algun tipo de informacion                    </h4>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                </div>

            </div>
        </div>
    );
}

export default RightColumn;
