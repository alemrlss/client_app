import CardsGeneralInfo from "@/components/home/CardsGeneralInfo";
import ChartsContainer from '@/components/home/ChartsContainer'
type Props = {}

function Dashboard({ }: Props) {


    return (
        <div>
            <CardsGeneralInfo />
            <ChartsContainer />
        </div>
    )
}

export default Dashboard