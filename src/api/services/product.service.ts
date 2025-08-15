import apiClient from "../apiClient";

type GenProduct<T extends keyof ProductPayloadMap> = ProductPayloadMap[T];

type ProductUpdate<T extends keyof ProductPayloadMap> = Partial<GenProduct<T>>;

const productService = {
  getProductsByStatus: (
    status: "pending" | "published",
    params?: Record<string, any>
  ) => {
    return apiClient.get(`/seller/products/${status}`, { params });
  },
  getProduct: (id: number) => apiClient.get(`/seller/products/${id}/show`),
  addProduct: (data: FormData) =>
    apiClient.post("/products", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  updateProduct: <T extends keyof ProductPayloadMap>(
    id: number,
    data: ProductUpdate<T> | FormData
  ) => apiClient.post(`/products/${id}/edit`, data),
  deleteProduct: (id: number) => apiClient.delete(`/seller/products/${id}`),
};

export default productService;
export type { ProductUpdate };
