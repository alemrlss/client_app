export interface Repairs {
  id: string;
  description: string;
  TypeRepair: string;
  deleted: boolean;
  date: string;
  Equipments: {
    id: string;
    name: string;
    model: string;
    key: string;
  };
  Operator: {
    name: string;
    email: string;
    phoneNumber: string;
    nationalId: string;
    company: string;
  };
  EquipmentsId: string;
  OperatorId: string;
}
