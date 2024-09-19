
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useRef } from 'react';

import { apiEndPoint } from '@/config/apiConfig';
import { Book } from '@/types/bookTypes';

import { BodyContainer, SectionName, SectionBox, WeeklyReviewBox } from './BodyContent.styles';
import { SectionBookList, SectionBookListItem, SectionBookListContainer} from './BodyContent.styles';

import { SliderContainer, ArrowButton } from './Main.styles';

import BookReview from '@/app/_component/BookReview';
import { BooksInfo } from '@/app/hooks/BooksInfo';


export default function BodyContent() {

    const { books, selectedBook, selectBook, error, loading } = BooksInfo(); // selectBook 추가
    const sliderRef = useRef<HTMLDivElement>(null);

    if (loading) { return <div>Loading...</div>; }   // Loading 상황
    if (error) { return <div>Error: {error}</div>; }  // Error 상황

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
        <BodyContainer>
            {/*{JSON.stringify(books)}*/}
            
            
            <SectionBox>
                <SectionName>베스트 셀러 섹션</SectionName>
                <SectionBookListContainer >
                    <SliderContainer>
                        <ArrowButton direction="left" onClick={scrollLeft}>{"<"}</ArrowButton>
                        <SectionBookList ref={sliderRef}>
                            {books.map((book) => (
                                <SectionBookListItem key={book.id} onClick={() => selectBook(book)}>
                                    <img src={book.imageUrl} alt={book.title}/>
                                    <h2>{book.title}</h2>                            
                                </SectionBookListItem>
                            ))}
                        </SectionBookList>
                        <ArrowButton direction="right" onClick={scrollRight}>{">"}</ArrowButton>
                    </SliderContainer>
                </SectionBookListContainer>
                
                    
                
            </SectionBox>
            
            <WeeklyReviewBox>
                <SectionName>주간 리뷰</SectionName>
                
                {books.map((book) => (
                    <BookReview book={book}/>
                ))}
                
                {/*selectedBook에 원하는 책 정보 넣은것에 대한 ReviewCard 제공 */}
            </WeeklyReviewBox>
        </BodyContainer>
    );
}
