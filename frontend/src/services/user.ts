import axios from "axios";
import { apiUrl } from "../config/api";
import { User } from "../types/types";

interface saveUserProps extends Omit<User, "id"> {}

export const getUser = async (username: string) => {
  const response = await axios.get(`${apiUrl}/users/${username}`);
  return response.data;
};

export const saveUser = async (user: saveUserProps) => {
  const response = await axios.post(`${apiUrl}/users`, user);
  return response.data;
};
