import React from 'react';
import { IconType } from 'react-icons';
import { TiPrinter } from 'react-icons/ti';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type Props = {
    title: string;
    value: number;
    icon: IconType;
    color: string;
};

function CardGeneralInfo({ title, value, icon, color }: Props) {
    return (
        <Card className="shadow-md rounded-md">
            <CardHeader className="p-3 pb-0">
                <CardTitle>
                    <div className="flex justify-evenly items-center space-x-2">
                        <div
                            style={{
                                backgroundColor: color,
                                boxShadow: `0px 8px 30px ${color}`,
                            }}
                            className={`p-2 text-white rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 `}
                        >
                            {React.createElement(icon, { className: 'h-6 w-6' })}
                        </div>
                        <p className="text-center font-bold text-base">{title}</p>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-center p-3">
                <p className="text-gray-400 text-3xl">{value}</p>
            </CardContent>
        </Card>
    );
}

export default CardGeneralInfo;
