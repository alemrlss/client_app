import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface CareCenters {
  id: string;
  name: string;
  director: string;
  typeCenter: number;
}

export const getCareCenters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/carecenters`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCareCenter = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/carecenters/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
