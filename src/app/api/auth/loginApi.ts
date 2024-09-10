// import { LoginRequest, User } from "@/types/authTypes";
// import axiosInstance from "./axiosInstance";

// // 서버에서 반환되는 로그인 응답의 타입 정의
// interface LoginResponse {
//     token: string; // JWT 토큰
//     user: User; // 사용자 정보
// }

// // 로그인 API 요청 함수 (POST 요청으로 로그인 데이터를 전송)
// export const Login = async (loginData: LoginRequest): Promise<LoginResponse> => {
//     try{
// // '/api/auth/login' 엔드포인트로 POST 요청을 보내고, loginData를 body로 전달
//     const response = await axiosInstance.post<LoginResponse>('/users', loginData); // users -> api/auth/login 로 변경 
//     console.log('API 응답', response.data);
    
//     return response.data; // 서버로부터 받은 데이터 반환 (token, user)
//     } catch(error: any) {
//         // 서버에서 401 상태 코드를 반환한 경우
//         throw error;
//     }
    
// };


// --------------------------------------------------------------------------------------------------------------------

import axiosInstance from "./axiosInstance";
import { LoginRequest, User } from "@/types/authTypes";

interface LoginResponse {
    token: string;  // JWT 토큰 또는 임의의 토큰
    user: User;     // 사용자 정보
}

// 로그인 API 요청 함수
export const Login = async (loginData: LoginRequest): Promise<LoginResponse> => {
    // 이메일과 비밀번호로 사용자 찾기
    const response = await axiosInstance.get<User[]>(`/users?email=${loginData.email}&password=${loginData.password}`);

    // 응답에서 사용자가 없으면 오류 발생
    if (response.data.length === 0) {
        throw new Error('Invalid email or password');
    }

    // 일치하는 사용자가 있으면 임의의 토큰 생성
    const token = `fake-jwt-token-${Math.random().toString(36).substring(7)}`;

    // 첫 번째 일치하는 사용자 반환
    return {
        token,        // 임의의 토큰
        user: response.data[0], // 사용자 정보
    };
};
