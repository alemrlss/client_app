import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getOperators = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/operators`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
