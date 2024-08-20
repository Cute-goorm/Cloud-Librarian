import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 책 정보를 정의
interface Book {
    id: string; // 책의 고유 ID
    title: string; // 책 제목
    author: string; // 저자 이름
    publisher: string; // 출판사
    publicationYear: number; // 출판 연도
    previewContent: string; // 도서 미리보기 내용
    imageUrl: string; // 도서 표지 이미지의 URL
}

// 도서 상태를 관리하기 위한 인터페이스
interface BookState {
    books: Book[]; // 도서들의 목록을 저장하는 배열
    loading: boolean; // 데이터 로딩시 상태
    error: string | null; // 오류 메세지 문자 또는 null
}

// 초기 상태
const initialState: BookState = {
  books: [], // 초기 도서 목록
  loading: false, // 초기 로딩 상태는 false
  error: null, // 초기 오류 상태는 null
};

// 도서 관련 상태 관리 로직
const bookSlice = createSlice({
    name: 'book', // 슬라이스 이름
    initialState,
    reducers: {
        // 도서 목록을 가져오는 작업을 시작할 때 호출
        fetchBooksStart(state) {
            state.loading = true; // 로딩 상태를 true설정해 로딩중을 표시
            state.error = null; // 이전에 발생한 오류 초기화
        },

        //도서 목록을 가져왔을 때 호출
        fetchBooksSuccess(state, action: PayloadAction<Book[]>) {
            state.books = action.payload; // 서버에서 받아온 도서 목록을 상태에 저장
            state.loading = false; // 로딩 상태를 false로 설정 로딩 완료 표시
        },

        // 도서 목록을 가져오는데 실패했을 때 호출
        fetchBooksFailure(state, action: PayloadAction<string>) {
            state.loading = false // 로딩 상태를 false
            state.error = action.payload; // 오류 메세지를 상태에 저장
        },

        // 새로운 도서를 추가할 때 호출
        addBook(state, action: PayloadAction<Book>) {
            state.books.push(action.payload) // 새로운 도서를 도서 목록에 추가
        },

        // 기존 도서의 정보를 업데이트할 때 호출
        updateBook(state, action: PayloadAction<Book>) {
            // 업데이트 하려는 도서의 인덱스 찾기
            const index = state.books.findIndex(book => book.id === action.payload.id)
            if(index !== -1) {
                state.books[index] = action.payload // 해당 도서의 정보를 업데이트
            }
        },

        // 도서를 삭제할 때 호출
        deleteBook(state, action: PayloadAction<string>) {
            // 주어진 ID와 일치하지 않는 도서만 남김
            state.books = state.books.filter(book => book.id !== action.payload)
        }
    }
})

// 각 액션 생성자 함수 내보냄
export const {fetchBooksStart, fetchBooksSuccess, fetchBooksFailure, addBook, updateBook, deleteBook} = bookSlice.actions;

export default bookSlice.reducer;