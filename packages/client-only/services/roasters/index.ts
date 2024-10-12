import apiClient from "../../utils/apiClient";
import queryString from "query-string";

export const getRoasters = async (options) => {
  try {
    const query = queryString.parse(options);
    const res = await apiClient.get("/roasters");
    return res.data;
  } catch (error) {
    return error;
  }
};
