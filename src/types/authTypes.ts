export type UserType = 'user' | 'admin'

// 사용자 정보
export interface User {
    email: string;
    nickName: string;
    type: UserType[];
}

// 로그인 요청 데이터 타입
export interface LoginRequest {
    email: string;
    password: string;
}


// 회원가입 요청 데이터 타입
export interface SignupRequest {
    email: string;
    password: string;
    confirmPassword: string;
    nickName: string;
}

// 비밀번호 재설정 요청 데이터 타입
export interface PasswordResetRequest {
    password: string;
}

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}