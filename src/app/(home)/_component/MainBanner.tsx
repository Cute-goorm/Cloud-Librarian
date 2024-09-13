'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { BasicBox, MainHeadLine, BookListBox, BookInfoBox, ReviewCard, ReviewBox} from './MainBanner.styles';
import { BookListItem } from './MainBanner.styles';
import { MainContainer } from './MainBanner.styles';

import { apiEndPoint } from '@/config/apiConfig';
import { BooksInfo } from '@/app/hooks/BooksInfo';

//const booksUrl = apiEndPoint.bookList.books;

export default function MainBanner() {

    const { books, selectedBook, selectBook, error, loading } = BooksInfo(); // selectBook 추가

    if (loading) { return <div>Loading...</div>; }   // Loading 상황
    if (error) { return <div>Error: {error}</div>; }  // Error 상황

    
    return (
        <MainContainer>
            {/*{JSON.stringify(books)}*/}
            
            <MainHeadLine>Cloud Librarian 평점 좋은 책</MainHeadLine>
            <BasicBox>
                {selectedBook ? (
                    <>
                        <Image
                            src={selectedBook.imageUrl} 
                            alt={selectedBook.title} 
                            width={180} 
                            height={250} 
                            priority={true} 
                        />
                        
                        <BookInfoBox>
                            <p> {selectedBook.title}</p>
                            <p> {selectedBook.author}</p>
                            <p> 평점 : {selectedBook.author}</p>  {/* 나중에 평점으로 수정 */}
                            <p> {selectedBook.previewContent}</p>
                        </BookInfoBox>
                    </>
                ) : (
                    <p>도서를 선택하세요.</p>
                )}
                <ReviewBox>
                    <ReviewCard>
                    </ReviewCard>
                </ReviewBox>
                
            </BasicBox>
            <div>
                <BookListBox>
                    {books.map((book) => (
                        <BookListItem key={book.id} onClick={() => selectBook(book)}>
                            <img src={book.imageUrl} alt={book.title} width={100} />
                            <h2>{book.title}</h2>                            
                        </BookListItem>
                    ))}
                </BookListBox>
            </div>
        </MainContainer>
    );
}
