'use client'

import Link from 'next/link'
import { BooksInfo } from '@/app/hooks/BooksInfo';

export default function BookDetailPage() {
    const { books, selectedBook, selectBook, error, loading } = BooksInfo(); // selectBook 추가

    if (loading) { return <div>Loading...</div>; }   // Loading 상황
    if (error) { return <div>Error: {error}</div>; }  // Error 상황
 // selectedBook이 없는 경우 처리
    if (!selectedBook) { 
        return <div>No book selected.</div>;
    }

    // selectedBook에서 bookId를 가져옴
    const bookId = selectedBook.id;

    return <>
        <h1>BookDetail Page</h1>
        
        {/* 리뷰 남기기 모달 열기 */}
        <Link href={`/${bookId}/@modal/reviewForm`}>리뷰 남기기</Link>
        {/* 댓글 남기기 모달 열기 */}
        <Link href={`/${bookId}/@modal/comment`}>댓글 남기기</Link>
    </>
}