// auth/axiosInstance.ts
import axios from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // API의 기본 URL
  headers: {
    'Content-Type': 'application/json', // 기본적으로 JSON으로 통신
  },
});

export default axiosInstance;
