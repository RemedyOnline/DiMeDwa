import { apiClient } from "./config";

export const apiSignUp = async (payload) => {
  return await apiClient.post("/users/register", payload);
};

export const apiLogin = async (payload) => {
  return await apiClient.post("/users/login", payload);
};

export const apiProfile = async () => {
  return apiClient.post("/users/me");
};
