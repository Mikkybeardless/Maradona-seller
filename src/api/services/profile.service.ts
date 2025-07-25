import apiClient from "../apiClient";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  profile_pic: string;
  user_type: "SELLER" | "BUYER";
  shop_name: string;
}
const profileService = {
  getProfile: () => apiClient.get("/me"),
  updateProfile: (data: UserProfile) =>
    apiClient.post("/shop/seller-profile", data),
  uploadShopDocs: (data: { files: File[]; details: string }) =>
    apiClient.post("/shop/documents", data),
  editProfileDocs: (id: number, data: { files: File[]; details: string }) =>
    apiClient.post(`/shop/documents/${id}/edit`, data),
  deleteProfileDocs: (id: number) => apiClient.delete(`/shop/documents/${id}`),
};

export default profileService;
