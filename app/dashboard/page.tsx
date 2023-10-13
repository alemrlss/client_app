import React from 'react'
import CardsGeneralInfo from "@/components/home/CardsGeneralInfo";
import ChartsContainer from '@/components/home/ChartsContainer'
type Props = {}

function page({ }: Props) {
    return (
        <div>
            <CardsGeneralInfo />
            <ChartsContainer />
        </div>
    )
}

export default page