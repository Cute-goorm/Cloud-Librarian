import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 인증 상태를 정의하는 인터페이스
interface AuthState {
    user: { // 사용자 정보
        email: string | null; 
        nickName: string | null;
    };
    isLoggedIn: boolean; // 사용자가 로그인 했는지 여부
    loading: boolean; // 로그인 과정이 진행중인지 여부
    error: string | null; // 오류 메세지, 없으면 null
}

// 초기상태 정의
const initialState: AuthState = {
    user: { // 처음에는 사용자 정보가 없으므로 모두 null
        email: null,
        nickName: null,
    },
    isLoggedIn: false, // 처음에는 로그아웃 상태이므로 false
    loading: false, // 로그인 요청을 보내기 전이므로 false
    error: null  // 처음에는 오류가 없으므로 null
}

// 인증 기능과 관련된 상태 관리 로직
const authSlice = createSlice({
    name: 'auth', // 슬라이스의 이름
    initialState, // 초기 상태
    reducers: { // 상태를 변경하는 함수 정의
        loginStart(state: AuthState) {
            state.loading = true; // 로그인 중이므로 로딩 상태 true
            state.error = null; // 새로운 로그인 시도이므로 오류 메세지 X
        },
        // 로그인에 성공했을 때 호출, 사용자 email, nickName을 상태에 저장, 로그인 상태 true
        loginSuccess(state: AuthState, action: PayloadAction<{email: string; nickName: string}>) {
            state.user = action.payload; // 서버에서 받아온 사용자 정보를 상태에 저장
            state.isLoggedIn = true; // 사용자가 로그인한 상태이므로 true
            state.loading = false; // 로그인 과정이 끝났으므로 로딩 상태를 false
        },
        // 로그인에 실패했을 때 호출, 로딩상태 false로 변경 및 오류 메세지를 상태에 저장
        loginFailure(state: AuthState, action: PayloadAction<string>) {
            state.loading = false; // 로그인 과정이 끝났으므로 로딩 상태를 false
            state.error = action.payload // 서버에서 받아온 오류 메세지를 상태에 저장
        },
        logout(state: AuthState) {
            state.user = {email: null, nickName: null} // 사용자 정보를 초기 상태로 되돌림
            state.isLoggedIn = false // 사용자가 로그아웃 했으므로 false
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
