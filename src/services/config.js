import axios from "axios"; // importing this to help us perform CRUD operations...

const baseURL = import.meta.env.VITE_BASE_URL;
// taking token from the localStorage to be stored inside "baseURL"

const token = localStorage.getItem("token"); // accessing token from localStorage...

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} // putting token in/on the headers to be used throughout the system...

export const apiClient = axios.create({
  baseURL: baseURL,
});
