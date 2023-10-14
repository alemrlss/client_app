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
  FaWrench,
} from "react-icons/fa";

interface SidebarSection {
  title: string;
  id: string;
  icon: IconType;
}

const sidebarSections: SidebarSection[] = [
  {
    title: "Inicio",
    id: "/dashboard",
    icon: BsFillHousesFill,
  },
  {
    title: "Reparaciones",
    id: "/dashboard/reparaciones",
    icon: FaWrench,
  },
  {
    title: "Equipos Tecnologicos",
    id: "/dashboard/equipos-tecnologicos",
    icon: FaWarehouse,
  },
  {
    title: "Centros de Salud",
    id: "/dashboard/centros-de-salud",
    icon: FaHospital,
  },
  {
    title: "Bajas tecnicas",
    id: "/dashboard/bajas-tecnicas",
    icon: FaBriefcaseMedical,
  },
  {
    title: "Usuarios",
    id: "/dashboard/usuarios",
    icon: FaUsers,
  },
  {
    title: "Reportes",
    id: "/dashboard/reportes",
    icon: FaFileAlt,
  },
  // Agrega más secciones según tus necesidades
];

export default sidebarSections;
