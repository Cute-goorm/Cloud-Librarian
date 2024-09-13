import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, BookState } from "@/types/bookTypes";

// 초기 상태
const initialState: BookState = {
  books: [], // 초기 도서 목록
  loading: false, // 로딩 상태
  error: null, // 오류 상태
};

// 로딩 상태를 설정하는 유틸리티 함수
const setLoadingState = (state: BookState, isLoading: boolean) => {
    state.loading = isLoading; // 로딩 상태 업데이트
    state.error = null; // 오류 초기화
};

// 오류 상태를 설정하는 유틸리티 함수
const setErrorState = (state: BookState, errorMessage: string) => {
    state.loading = false; // 로딩 종료
    state.error = errorMessage; // 오류 메시지 저장
};

// 도서 관련 상태 관리 로직을 담은 슬라이스
const bookSlice = createSlice({
    name: 'book', // 슬라이스 이름
    initialState, // 초기 상태
    reducers: {
        // 도서 목록을 가져오는 작업 시작 시 호출
        fetchBooksStart(state) {
            setLoadingState(state, true); // 로딩 상태 설정
        },

        // 도서 목록을 성공적으로 가져왔을 때 호출
        fetchBooksSuccess(state, action: PayloadAction<Book[]>) {
            state.books = action.payload; // 서버에서 받아온 도서 목록 저장
            setLoadingState(state, false); // 로딩 상태 종료
        },

        // 도서 목록 가져오기에 실패했을 때 호출
        fetchBooksFailure(state, action: PayloadAction<string>) {
            setErrorState(state, action.payload); // 오류 상태 설정
        },

        // 새로운 도서를 추가할 때 호출
        addBook(state, action: PayloadAction<Book>) {
            state.books.push(action.payload); // 도서 목록에 새 도서 추가
        },

        // 기존 도서를 업데이트할 때 호출
        updateBook(state, action: PayloadAction<Book>) {
            const index = state.books.findIndex(book => book.id === action.payload.id); // 업데이트할 도서의 인덱스 찾기
            if (index !== -1) {
                state.books[index] = action.payload; // 도서 정보 업데이트
            }
        },

        // 도서를 삭제할 때 호출
        deleteBook(state, action: PayloadAction<string>) {
            state.books = state.books.filter(book => book.id !== action.payload); // 주어진 ID와 일치하지 않는 도서만 남김
        },
    }
});

export const {
    fetchBooksStart,
    fetchBooksSuccess,
    fetchBooksFailure,
    addBook,
    updateBook,
    deleteBook
} = bookSlice.actions;

export default bookSlice.reducer;
