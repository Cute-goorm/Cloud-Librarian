'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { OutlineCloudIcon, FilledCloudIcon } from './icons/CloudIcons';
import { OutlineStarIcon, FilledStarIcon } from './icons/StarIcons';

import { apiEndPoint } from '@/config/apiConfig';
import { Book } from '@/types/bookTypes';
import { Reviews } from '@/types/reviewTypes';
import { BooksInfo } from '@/app/hooks/BooksInfo';
import { ReviewsInfo } from '@/app/hooks/ReviewsInfo'
import { ReviewBookInfo, ReviewCard, ReviewInfo } from './BookReview.styles';
import FavoriteButton from './FavoriteButton';

interface BookReviewProps{
  book: Book;

}

export default function BookReview({ book }: BookReviewProps) {

    const { books, selectedBook, selectBook, error: booksError, loading: booksLoading } = BooksInfo(); // selectBook 추가
    const { reviews, selectedReview, selectReview, error: reviewsError, loading: reviewsLoading } = ReviewsInfo();

    if (booksLoading || reviewsLoading) { return <div>Loading...</div>; }   // Loading 상황
    if (booksError || reviewsError) { return <div>Error: {booksError || reviewsError}</div>; }  // Error 상황

     // 해당 책에 맞는 리뷰 찾기 (bookId가 book.id와 같은 리뷰)
    const bookReview = reviews.find((review) => review.bookId === book.id);
    const rating = bookReview ? bookReview.rating : 0;


    // 구름 평점 측정
    const renderRating = (rating: number) => {
      const totalClouds = 5; // 5점 만점
      const filledClouds = Math.floor(rating); // 채워진 구름
      const outlineClouds = totalClouds - filledClouds; // 빈 구름

      return (
        <>
          {Array(filledClouds).fill(null).map((_, index) => (
            <FilledCloudIcon key={`filled-${index}`} />
          ))}
          {Array(outlineClouds).fill(null).map((_, index) => (
            <OutlineCloudIcon key={`outline-${index}`} />
          ))}
        </>
      );
    };

 
    return (
        <div>
            <ReviewCard>
              <img src={book.imageUrl} alt={book.title} width={220} />
              <ReviewBookInfo>
                <FavoriteButton /> {/* 즐겨찾기 버튼*/} 
                <h2>{book.title}</h2> {/*  도서 제목 */} 
                <p>{book.author} | {book.publisher}</p> {/* 저자 | 출판사 */} 
                <p>{book.previewContent}</p>
                <div> {renderRating(rating)} {/* 평점 구름 아이콘 표시 */} </div>
              </ReviewBookInfo>
              <ReviewInfo>
                  {/* 리뷰 내용 표시 */}
                  <p>{bookReview ? bookReview.content : '리뷰가 없습니다.'}</p>
              </ReviewInfo>
            </ReviewCard>
            
        </div>
    );
}
