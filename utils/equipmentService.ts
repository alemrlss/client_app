import axios from "axios";
import { Equipments } from "@/types/Equipment";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface PaginationParams {
  skip: number;
  take: number;
}
export const getEquipments = async ({ skip, take }: PaginationParams) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/equipments?skip=${skip}&take=${take}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEquipment = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/equipments/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createEquipment = async (
  newEquipmentData: Partial<Equipments>
) => {
  // Crear una copia de updatedData
  const dataToSend = { ...newEquipmentData };

  if (dataToSend.hasOwnProperty("id")) {
    delete dataToSend.id;
  }

  delete dataToSend.CareCenter;
  delete dataToSend.MedicalService;
  delete dataToSend.Repairs;

  try {
    const response = await axios.post(`${BASE_URL}/equipments`, dataToSend);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEquipment = async (
  id: string,
  updatedData: Partial<Equipments>
) => {
  const dataToSend = { ...updatedData };

  if (dataToSend.hasOwnProperty("id")) {
    delete dataToSend.id;
  }
  delete dataToSend.CareCenter;
  delete dataToSend.MedicalService;
  delete dataToSend.Repairs;

  try {
    const response = await axios.patch(
      `${BASE_URL}/equipments/${id}`,
      dataToSend
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEquipment = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/equipments/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
