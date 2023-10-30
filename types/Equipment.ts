export interface Equipments {
  id: string;
  name: string;
  model: string;
  brand: string;
  serial: string;
  key: string;
  nationalKey: string;
  operative: boolean;
  CareCenter: {
    name: string;
  };
  MedicalService: {
    id: string;
    service: string;
    floor: number;
  };
  Repairs: Array<{
    id: string;
    description: string;
    date: string;
    TypeRepair: string;
  }>;
  description: string;
  condition: string;
  CareCenterId: string;
  MedicalServiceId: string;
}
