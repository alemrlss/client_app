import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getReport = async (queryParams: string) => {
  const response = await axios.post(
    `${BASE_URL}/reports/excel/equipments?${queryParams}`
  );
  return response.data;
};
