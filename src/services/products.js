import { apiClient } from "./config";

export const apiGetProducts = (filter) =>
  apiClient.get(`/products?filter=${JSON.stringify(filter)}`);

export const apiGetOneProduct = async (id) => {
  apiClient.get(`products/${id}`); // for product details...
};

export const apiAddProducts = async (payload) => {
  apiClient.post("/products/", payload); // for product add...
};

export const apiEditProduct = async (id, payload) => {
  apiClient.patch(`/products/${id}`, payload); // for edit product...
};

export const apiDeleteProduct = async (productID) => {
  return await apiClient.delete(`/products/${productID}`); // for delete product...
};
