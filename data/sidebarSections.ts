import { IconType } from "react-icons";
import { BsFillHousesFill } from "react-icons/bs";
import {
  FaWarehouse,
  FaHospital,
  FaTags,
  FaMapMarkedAlt,
  FaBriefcaseMedical,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";

interface SidebarSection {
  title: string;
  id: string;
  icon: IconType;
}

const sidebarSections: SidebarSection[] = [
  {
    title: "Inicio",
    id: "inicio",
    icon: BsFillHousesFill,
  },
  {
    title: "Inventario",
    id: "inventario",
    icon: FaWarehouse,
  },
  {
    title: "Centros de Salud",
    id: "centros-de-salud",
    icon: FaHospital,
  },
  {
    title: "Marcas",
    id: "marcas",
    icon: FaTags,
  },
  {
    title: "Municipios",
    id: "municipios",
    icon: FaMapMarkedAlt,
  },
  {
    title: "Bajas tecnicas",
    id: "bajas-tecnicas",
    icon: FaBriefcaseMedical,
  },
  {
    title: "Usuarios",
    id: "usuarios",
    icon: FaUsers,
  },
  {
    title: "Reportes",
    id: "reportes",
    icon: FaFileAlt,
  },
  // Agrega más secciones según tus necesidades
];

export default sidebarSections;
