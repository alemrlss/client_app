import CardGeneralInfo from "@/components/home/CardGeneralInfo";
import infoGeneral from "@/data/generalInfoDummy";

type Props = {};

function CardsGeneralInfo({ }: Props) {
    return (
        <div className="grid grid-cols-5 gap-3 p-2">
            {infoGeneral.map((card, index) => (
                <CardGeneralInfo
                    key={index}
                    title={card.title}
                    value={card.value}
                    icon={card.icon}
                    color={card.color}
                />
            ))}
        </div>
    );
}

export default CardsGeneralInfo;
