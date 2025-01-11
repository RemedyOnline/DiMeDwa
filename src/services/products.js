import { apiClient } from "./config";

export const apiGetProducts = (filter) =>
  apiClient.get(`/products?filter=${JSON.stringify(filter)}`);

export const apiGetOnProduct = async (id) => {
  apiClient.get(`products/${id}`);
};

export const apiAddProducts = async (payload) => {
  apiClient.post("/products/", payload);
};

export const apiEditProduct = async (id, payload) => {
  apiClient.patch(`/products/${id}`, payload);
};

export const apiDeleteProduct = async (productID) => {
  return await apiClient.delete(`/products/${productID}`);
};
