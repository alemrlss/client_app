import { Repairs } from "@/types/Repairs";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getRepairs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/repairs`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRepair = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/repairs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRepair = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/repairs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createRepair = async (newRepairData: Partial<Repairs>) => {
  // Crear una copia de updatedData
  const dataToSend = { ...newRepairData };

  if (dataToSend.hasOwnProperty("id")) {
    delete dataToSend.id;
  }
  delete dataToSend.Equipments;
  console.log("datatosed: ", dataToSend);
  try {
    const response = await axios.post(`${BASE_URL}/repairs`, dataToSend);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
