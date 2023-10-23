import axios from "axios";
import { Equipments } from "@/types/Equipment";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getEquipments = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/equipments`);
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

export const updateEquipment = async (
  id: string,
  updatedData: Partial<Equipments>
) => {
  // Crear una copia de updatedData
  const dataToSend = { ...updatedData };

  if (dataToSend.hasOwnProperty("id")) {
    delete dataToSend.id;
  }
  delete dataToSend.CareCenter;
  delete dataToSend.MedicalService;
  dataToSend.MedicalServiceId = "25faee94-1eaa-4e3b-96ed-a717d04edc66";
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
