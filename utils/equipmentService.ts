import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface Equipment {
  id: string;
  name: string;
  model: string;
  brand: string;
  key: string;
  nationalKey: string;
  status: string;
  centroDeSalud: string;
  description: string;
}

export const getEquipments = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/equipments`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEquipment = async (
  id: string,
  updatedData: Partial<Equipment>
) => {
  console.log(updatedData);
  if (updatedData.hasOwnProperty("id")) {
    delete updatedData.id;
  }
  try {
    const response = await axios.patch(
      `${BASE_URL}/equipments/${id}`,
      updatedData
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
