import authSlice from "@/features/auth/authSlice";
import booksSlice from "@/features/books/booksSlice";
import reviewsSlice from "@/features/reviews/reviewsSlice";
import { configureStore } from "@reduxjs/toolkit";


// 스토어 설정
const store = configureStore({
    reducer: {
        auth: authSlice,  // auth
        books: booksSlice,  // books
        reviews: reviewsSlice  // reviews
        // 다른 슬라이스 추가 O
    },
})

// 스토어 타입 내보내기
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store