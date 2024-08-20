import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// 리뷰 정보를 정의하는 인터페이스
interface Review {
    id: string;  // 리뷰의 고유 ID
    bookId: string; // 리뷰가 관련된 도서의 ID
    userId: string;  // 리뷰를 작성한 유저의 ID
    content: string;  // 리뷰 내용
    rating: number;  // 리뷰 평점
}

// 초기 상태를 정의하는 인터페이스
interface ReviewState {
    reviews: Review[];  // 리뷰 목록을 저장하는 배열
    loading: boolean;  // 데이터 로딩 상태를 나타내는 플래그
    error: string | null;  // 오류 메세지
}

// 초기 상태
const initialState: ReviewState = {
    reviews: [], // 초기에는 리뷰 목록이 비어 있음
    loading: false, // 로딩 상태 초기화
    error: null, // 오류 메세지 초기화
}

// 리뷰 관련 상태 관리 로직
const reviewSlice = createSlice({
    name: 'review',  // 슬라이스의 이름
    initialState,  // 초기 상태
    reducers: { 
        // 리뷰 목록을 가져오는 작업할 때 호출
        fetchReviewsStart(state) {
            state.loading = true;  // 로딩 상태
            state.error = null;  // 이전 오류 초기화
        },

        // 리뷰 목록을 성공적으로 가져왔을 때 호출
        fetchReviewsSuccess(state, action: PayloadAction<Review[]>) {
            state.reviews = action.payload; // 서버에서 받아온 리뷰 목록을 상태에 저장
            state.loading = false; // 로딩 상태 false
        },

        //리뷰 목록을 가져오는데 실패했을 때 호출
        fetchReviewsFailure(state, action: PayloadAction<string>) {
            state.loading = false;  // 로딩 상태
            state.error = action.payload;  // 오류 메세지를 상태에 저장
        },

        // 새로운 리뷰를 추가할 때 호출
        addReview(state, action: PayloadAction<Review>) {
            state.reviews.push(action.payload);  // 새로운 리뷰를 목록에 추가
        },

        // 기존 리뷰를 업데이트할 때 호출
        updateReview(state, action: PayloadAction<Review>) {
            const index = state.reviews.findIndex(review => review.id === action.payload.id);
            if(index !== -1) {
                state.reviews[index] = action.payload;  // 해당 리뷰의 정보를 업데이트
            }
        },

        // 리뷰를 삭제할 때 호출
        deleteReview(state, action: PayloadAction<string>) {
            //특정 리뷰 삭제
            state.reviews = state.reviews.filter(review => review.id !== action.payload);
        }
    }
})


// 각 액션 생성자 함수 내보내기
export const {
  fetchReviewsStart,
  fetchReviewsSuccess,
  fetchReviewsFailure,
  addReview,
  updateReview,
  deleteReview,
} = reviewSlice.actions;

export default reviewSlice.reducer;