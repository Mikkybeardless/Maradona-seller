import apiClient from "../apiClient";

const profileService = {
  getShopProfile: () => apiClient.get("/me"),
  getShopDocs: () => apiClient.get("/shop/documents"),
  uploadShopDocs: (data: FormData) =>
    apiClient.post("/shop/documents", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  getSingleDoc: (id: number) => apiClient.get(`/shop/documents/${id}`),
  updateProfile: (data: FormData) =>
    apiClient.post(`/shop/seller-profile`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  deleteShopDoc: (id: number) => apiClient.delete(`/shop/documents/${id}`),
};

export default profileService;
