
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { apiEndPoint } from '@/config/apiConfig';
import { Book } from '@/types/bookTypes';

import { BodyContainer, SectionName, SectionBox } from './BodyContent.styles';
import { SectionBookList, SectionBookListItem } from './BodyContent.styles';

import BookReview from '@/app/_component/BookReview';
import { BooksInfo } from '@/app/hooks/BooksInfo';


export default function BodyContent() {

    const { books, selectedBook, selectBook, error, loading } = BooksInfo(); // selectBook 추가

    if (loading) { return <div>Loading...</div>; }   // Loading 상황
    if (error) { return <div>Error: {error}</div>; }  // Error 상황


    return (
        <BodyContainer>
            {/*{JSON.stringify(books)}*/}
            
            
            <SectionBox>
                <SectionName>베스트 셀러 섹션</SectionName>
                <SectionBookList>
                    {books.map((book) => (
                        <SectionBookListItem key={book.id} onClick={() => selectBook(book)}>
                            <img src={book.imageUrl} alt={book.title} width={100} />
                            <h2>{book.title}</h2>                            
                        </SectionBookListItem>
                    ))}
                </SectionBookList>
            </SectionBox>
            
            <SectionBox>
                <SectionName>주간 리뷰</SectionName>
                
                {selectedBook ? (<BookReview book={selectedBook} /> ) 
                : ( <div>No book found</div> )}
                {/*selectedBook에 원하는 책 정보 넣은것에 대한 ReviewCard 제공 */}
            </SectionBox>
        </BodyContainer>
    );
}
