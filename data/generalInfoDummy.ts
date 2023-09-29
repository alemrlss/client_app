import { IconType } from "react-icons";
import {
  FaDesktop,
  FaHospital,
  FaUsers,
  FaTimes,
  FaAccessibleIcon,
  FaAd,
  FaAdjust,
} from "react-icons/fa";

interface GeneralInfo {
  title: string;
  id: number;
  icon: IconType;
  value: number;
  color: string;
}
function getRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const infoGeneral: GeneralInfo[] = [
  {
    title: "Equipos operativos",
    id: 1,
    icon: FaDesktop,
    value: getRandomValue(0, 40),
    color: "#00C49F",
  },
  {
    title: "Equipos inoperativos",
    id: 2,
    icon: FaTimes,
    value: getRandomValue(0, 40),
    color: "#AA0304",
  },
  {
    title: "Operadores",
    id: 3,
    icon: FaUsers,
    value: getRandomValue(0, 40),
    color: "#0088FE",
  },
  {
    title: "Centros de salud",
    id: 4,
    icon: FaHospital,
    value: getRandomValue(0, 40),
    color: "#FFBB28",
  },
  {
    title: "Agregar algo",
    id: 5,
    icon: FaAd,
    value: getRandomValue(0, 40),
    color: "#FF8042",
  },
];

export default infoGeneral;
