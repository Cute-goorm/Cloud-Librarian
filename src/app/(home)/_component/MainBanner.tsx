'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useRef } from 'react';
import { BasicBox, MainHeadLine, BookListBox, BookInfoBox, ReviewCard, ReviewBox} from './MainBanner.styles';
import { BookListItem, BookContent } from './MainBanner.styles';
import { MainContainer, BookListContainer } from './MainBanner.styles';
import { SliderContainer, ArrowButton} from './Main.styles'
import { apiEndPoint } from '@/config/apiConfig';
import { BooksInfo } from '@/app/hooks/BooksInfo';
import { ReviewsInfo } from '@/app/hooks/ReviewsInfo';

//const booksUrl = apiEndPoint.bookList.books;

export default function MainBanner() {

    const { books, selectedBook, selectBook, error: booksError, loading: booksLoading } = BooksInfo(); // selectBook 추가
    const { reviews, selectedReview, selectReview, error: reviewsError, loading: reviewsLoading } = ReviewsInfo();

    const sliderRef = useRef<HTMLDivElement>(null);

    if (booksLoading || reviewsLoading) { return <div>Loading...</div>; }   // Loading 상황
    if (booksError || reviewsError) { return <div>Error: {booksError || reviewsError}</div>; }  // Error 상황

     // 해당 책에 맞는 리뷰 찾기 (bookId가 book.id와 같은 리뷰)
    const bookReview = reviews.find((review) => selectedBook ? (review.bookId === selectedBook.id) : null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
            left: -300, // 좌우로 움직이는 거리
            behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
            left: 300, // 좌우로 움직이는 거리
            behavior: 'smooth',
            });
        }
    };

    return (
        <MainContainer>
            {/*{JSON.stringify(books)}*/}
            
            <MainHeadLine>Cloud Librarian 평점 좋은 책</MainHeadLine>
            <BasicBox>
                {selectedBook ? (
                    <>
                        <img
                            src={selectedBook.imageUrl} 
                            alt={selectedBook.title} 
                            width={180} 
                            height={250}
                        />

                        <BookInfoBox>
                            <p> {selectedBook.title}</p>
                            <p> {selectedBook.author}</p>
                            <p> 평점 : {bookReview ? bookReview.rating : '리뷰 없음'}</p>  {/* 나중에 평점으로 수정 */}
                            <BookContent><p> {selectedBook.previewContent}</p></BookContent>
                            
                        </BookInfoBox>
                        <ReviewBox>
                            <ReviewCard>
                                {bookReview ? (
                                    <>
                                        <p> {bookReview.userId}</p> {/* 사용자 이름 */}
                                        <p> {bookReview.rating}</p> {/* 날짜 */}
                                        <p> {bookReview.rating}</p> {/* 점수 */}
                                        <p> {bookReview.rating}</p> {/* 평가 */}
                                        <p> {bookReview.rating}</p> {/* 리뷰내용 */}

                                        <button>자세히보기</button>
                                    </>

                                ) : '리뷰없음'}
                            </ReviewCard>
                            <ReviewCard>
                            </ReviewCard>
                        </ReviewBox>
                    </>
                    
                ) : (
                    <p>도서를 선택하세요.</p>
                )}
                
            </BasicBox>
            
            <BookListContainer>
                <SliderContainer>
                <BookListBox ref={sliderRef}>
                <ArrowButton direction="left" onClick={scrollLeft}>{"<"}</ArrowButton>
                    {books.map((book) => (
                        <BookListItem key={book.id} onClick={() => selectBook(book)}>
                            <img src={book.imageUrl} alt={book.title} width={100} />
                            <h2>{book.title}</h2>                            
                        </BookListItem>
                    ))}
                <ArrowButton direction="right" onClick={scrollRight}>{">"}</ArrowButton>
                </BookListBox>
                </SliderContainer>
            </BookListContainer>
            
        </MainContainer>
    );
}
