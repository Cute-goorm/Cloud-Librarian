const BASE_URL = '' // 실제 API URL 이나 개발용 URL 넣어주세요.

export const apiEndPoint = {
    auth: {
        // 로그인 엔드포인트 POST
        login: `${BASE_URL}/api/auth/login`,  
 
        // 회원가입 엔드포인트 POST
        signup: `${BASE_URL}/api/auth/signup`,  

        // 구글 로그인 엔드포인트
        googleLogin: `${BASE_URL}/login/oauth2/code/google`,  

        // 페이스북 로그인 엔드포인트
        facebookLogin: `${BASE_URL}/login/oauth2/code/facebook`,
        
        // 카카오 로그인 엔드포인트
        kakaoLogin: `${BASE_URL}/login/oauth2/code/kakao`  
    },
    user: {
        // 유저 프로필 정보 GET
        profile: (id: any) => `${BASE_URL}/api/users/${id}`, 

        // 유저 프로필 수정 PATCH
        updateProfile: (id: any) => `${BASE_URL}/api/users/${id}`, 

        // 유저 비밀번호 PATCH
        password: (id: any) => `${BASE_URL}/api/users/${id}/password`, 
    },
    favorites: {
        // 특정 유저가 즐겨찾기한 책 목록  GET
        userFavorites: (id: any) => `${BASE_URL}/api/bookmark/user/${id}`, 

        // 특정 책을 즐겨찾기한 유저 목록  GET
        bookFavorites: (id: any) => `${BASE_URL}/api/bookmark/book/${id}`,
        
        // 특정 책 즐겨찾기 추가  POST
        addBookToFavorites: `${BASE_URL}/api/bookmark/add`,  

        // 특정 책 즐겨찾기 해제  DELETE
        removeBookFromFavorites: `${BASE_URL}/api/bookmark/delete`,  
    },
    bookList: {
        //책 목록조회  GET
        books: `${BASE_URL}/api/books`, 

        // bookActios => 책 상세정보 조회 GET, 특정 책 정보수정 PATCH, 특정 책 삭제 DELETE 
        bookActions: (book_id: any) => `${BASE_URL}/api/books/${book_id}`,  
    },
    review: {
        // 리뷰 전체목록 조회 GET, 리뷰 작성 POST
        reviews: `${BASE_URL}/api/reviews`,

        // 특정 리뷰 조회 GET, 리뷰 수정 PATCH, 리뷰 삭제 DELETE
        reviewActions: (review_id: any) => `${BASE_URL}/api/reviews/${review_id}`,

        // 리뷰 좋아요 POST
        likeReview: (review_id: any) => `${BASE_URL}/api/reviews/${review_id}/like`,

        // 리뷰 싫어요 POST
        dislikeReview: (review_id: any) => `${BASE_URL}/api/reviews/${review_id}/dislike`,
    }

}