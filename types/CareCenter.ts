export type CareCenter = {
  id: string;
  name: string;
  tipo: string;
  municipality: {
    name: string;
  };
  address: string;
  director: string;
  typeCenter: number;
  phoneNumber: string;
  State: {
    name: string;
  };
};
