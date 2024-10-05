import apiClient from "../../utils/apiClient";

export const getAllBeans = async () => {
  try {
    const res = await apiClient.get("/beans");
    console.log('res',res.data)
    return res.data;
  } catch (error) {
    return error;
  }
};
