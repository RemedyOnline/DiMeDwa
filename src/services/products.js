import { apiClient } from "./config";

export const apiGetProducts = (filter) =>
  apiClient.get(`/products?filter=${JSON.stringify(filter)}`);

export const apiGetOneProduct = async (id) => {
  return await apiClient.get(`products/${id}`); // for product details...
};

export const apiAddProducts = async (payload) => {
  return await apiClient.post("/products/", payload); // for product add...
};

export const apiEditProduct = async (id, payload) => {
  return await apiClient.patch(`/products/${id}`, payload); // for edit product...
};

export const apiDeleteProduct = async (productID) => {
  try {
    const response = await apiClient.delete(`/products/${productID}`);
    return response;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("Product not found or already deleted");
    }
    if (error.response?.status === 403) {
      throw new Error("You don't have permission to delete this product");
    }
    throw new Error(error.response?.data || "Failed to delete product");
  }
};
