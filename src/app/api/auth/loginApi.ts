import { LoginRequest, User } from "@/types/authTypes";
import axiosInstance from "./axiosInstance";

interface LoginResponse {
    token: string;
    user: User;
}

export const Login = async (loginData: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post<LoginResponse>('/api/auth/login', loginData)
    return response.data;
}