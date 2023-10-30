import { Repairs } from "@/types/Repairs";

export const initializeRepair = (): Repairs => {
  return {
    id: "",
    date: "",
    Equipments: {
      id: "",
      name: "",
    },
    description: "",
    TypeRepair: "",
    deleted: false,
  };
};
