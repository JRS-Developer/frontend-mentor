import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_API;

if (!apiUrl) console.error("Please provide the API URL");

export const getComments = async () => {
  return await axios.get(`${apiUrl}/comments`);
};
