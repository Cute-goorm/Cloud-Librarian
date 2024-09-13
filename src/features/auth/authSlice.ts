import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginRequest, User } from '@/types/authTypes'; // 타입 임포트
import { LoginApi } from '@/app/api/auth/loginApi';

interface AuthState {
  user: User | null; // 사용자 정보
  token: string | null; // JWT 토큰
  isLoggedIn: boolean; // 로그인 상태
  loading: boolean; // 로그인 요청 중인지 여부
  error: string | null; // 오류 메시지
}

// 초기 상태 설정
const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

// 비동기 로그인 요청 처리
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginData: LoginRequest, thunkAPI) => {
    try {
      // loginApi를 통해 서버로 로그인 요청 보내기
      const response = await LoginApi(loginData);
      return response; // 성공 시 토큰과 사용자 정보 반환
    } catch (error: any) {
      // 오류 발생 시 메시지 전달
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth', // 슬라이스 이름
  initialState, // 초기 상태
  reducers: {
    logout(state) {
      // 로그아웃 시 상태 초기화
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // 로그인 요청이 시작되었을 때
      .addCase(loginUser.pending, (state) => {
        state.loading = true; // 로딩 상태 true
        state.error = null; // 오류 메시지 초기화
      })
      // 로그인 요청이 성공했을 때
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.user = action.payload.user; // 사용자 정보 저장
        state.token = action.payload.token; // 토큰 저장
        state.isLoggedIn = true; // 로그인 상태 true
        state.loading = false; // 로딩 상태 false
        state.error = null; // 오류 메시지 없음
      })
      // 로그인 요청이 실패했을 때
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false; // 로딩 상태 false
        state.error = action.payload; // 오류 메시지 저장
        state.user = null;  // 로그인 실패 시 사용자 정보 초기화
        state.token = null; // 로그인 실패 시 토큰 초기화
        state.isLoggedIn = false; // 로그인 상태 false
      });
  }
});

// 액션 내보내기
export const { logout } = authSlice.actions;

// 리듀서 내보내기
export default authSlice.reducer;
