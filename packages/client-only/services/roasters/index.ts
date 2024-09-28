import apiClient from "../../utils/apiClient";
import queryString from "query-string";

export const getRoasters = async (options) => {
  try {
    const query = queryString.parse(options);
    console.log("query", query);
    const res = await apiClient.get("/roasters");
    console.log("response", res);
    return res.data;
  } catch (error) {
    return error;
  }
};
