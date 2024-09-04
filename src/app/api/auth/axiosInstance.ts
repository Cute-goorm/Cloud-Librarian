// auth/axiosInstance.ts
import axios from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '', // API의 기본 URL
  headers: {
    'Content-Type': 'application/json', // 기본적으로 JSON으로 통신
  },
  withCredentials: true, // 쿠키 기반 인증을 사용할 경우 설정
});

export default axiosInstance;
