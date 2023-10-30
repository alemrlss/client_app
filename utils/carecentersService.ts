import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

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

export const getMedicalServicesByIdCareCenter = async (
  careCenterId: string
) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/carecenters/${careCenterId}/medicalservices`
    );

    console.log("aqui");
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud de servicios médicos:", error);
    throw error;
  }
};
