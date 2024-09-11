export interface Book {
    id: string; // 책의 고유 ID
    title: string; // 책 제목
    author: string; // 저자 이름
    publisher: string; // 출판사
    publicationYear: number; // 출판 연도
    previewContent: string; // 도서 미리보기 내용
    imageUrl: string; // 도서 표지 이미지의 URL
}


export interface BookState {
    books: Book[]; // 도서들의 목록을 저장하는 배열
    loading: boolean; // 데이터 로딩시 상태
    error: string | null; // 오류 메세지 문자 또는 null
}
