import axiosInstance from "./axiosInstance";
import { SignupRequest, SignupResponse, User } from "@/types/authTypes";

// 이메일 중복 체크 함수
export const checkEmailExists = async (email: string): Promise<boolean> => {
    // 이메일을 대소문자 구분 없이 중복 체크
    const lowerCaseEmail = email.toLowerCase();
    const existingUser = await axiosInstance.get<User[]>(`/users?email=${lowerCaseEmail}`);
    return existingUser.data.length > 0;
}

// 회원가입 API 함수
export const SignupApi = async (signupData: SignupRequest): Promise<SignupResponse> => {
    // 사용자 정보 DB에 저장
    const response = await axiosInstance.post<User>('/users', signupData);

    // 회원가입 후, 토큰 생성
    const token = `fake-jwt-token-${Math.random().toString(36).substring(7)}`;

    return {
        token,
        user: response.data // 사용자 정보 반환
    };
};
