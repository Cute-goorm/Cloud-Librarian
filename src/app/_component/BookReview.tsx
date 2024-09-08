'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { OutlineCloudIcon, FilledCloudIcon } from './icons/CloudIcons';

import { apiEndPoint } from '@/config/apiConfig';
import { Book } from '@/types/bookTypes';
import { BooksInfo } from '@/app/hooks/BooksInfo';
import { ReviewBookInfo, ReviewCard, ReviewInfo } from './BookReview.styles';

interface BookReviewProps{
  book: Book;
}

export default function BookReview({ book }: BookReviewProps) {

    const { books, selectedBook, selectBook, error, loading } = BooksInfo(); // selectBook 추가

    if (loading) { return <div>Loading...</div>; }   // Loading 상황
    if (error) { return <div>Error: {error}</div>; }  // Error 상황

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
                <button /> {/* 즐겨찾기 버튼*/} 
                <h2>{book.title}</h2> {/*  도서 제목 */} 
                <p>{book.author} "|" {book.publisher}</p> {/* 저자 | 출판사 */} 
                <p>{book.previewContent}</p>
                <div> {renderRating(4)} {/* 평점 구름 아이콘 표시 */} </div>
              </ReviewBookInfo>
              <ReviewInfo>

              </ReviewInfo>
            </ReviewCard>
            
        </div>
    );
}
