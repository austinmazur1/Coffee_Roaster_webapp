import apiClient from "../../utils/apiClient";

export const getAllBeans = async () => {
  try {
    const res = await apiClient.get("/beans");
    return res.data;
  } catch (error) {
    return error;
  }
};
