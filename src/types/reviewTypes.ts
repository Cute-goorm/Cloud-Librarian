export interface Reviews {
    id: string; // 리뷰 id
    bookId: string; //책 id
    userId: string; // 유저 id
    content: string; // 리뷰 내용
    rating: number; // 평점
}

export interface ReviewState {
  books: Reviews[]; // 도서들의 목록을 저장하는 배열
  loading: boolean; // 데이터 로딩시 상태
  error: string | null; // 오류 메세지 문자 또는 null
}
