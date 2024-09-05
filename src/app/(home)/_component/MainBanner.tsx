'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { BasicBox, MainHeadLine, BookListBox, BookInfoBox, ReviewCard, ReviewBox} from './MainBanner.styles';
import { MainContainer, BookListItem } from './MainBanner.styles';

import { apiEndPoint } from '@/config/apiConfig';
import { Book } from '@/types/bookTypes';

//const booksUrl = apiEndPoint.bookList.books;
const booksUrl = '/api/booksApi';

export default function MainBanner() {
    const [books, setBooks] = useState<Book[]>([]); // Book 배열 또는 null 상태
    
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    
    // 도서 클릭 시 상단에 표시할 도서 설정
    const handleBookClick = (book: Book) => {
        setSelectedBook(book); // 선택된 도서를 업데이트
    };

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(booksUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Book[] = await response.json();
                setBooks(data);

                if (data.length > 0){
                    setSelectedBook(data[0]); // 첫번째 도서 기본 선택
                }

            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        fetchBooks();
    }, []); // 빈 배열을 의존성 배열로 전달하여 컴포넌트가 처음 렌더링될 때만 실행


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
                        <BookListItem key={book.id} onClick={() => handleBookClick(book)}>
                            <img src={book.imageUrl} alt={book.title} width={100} />
                            <h2>{book.title}</h2>                            
                        </BookListItem>
                    ))}
                </BookListBox>
            </div>
        </MainContainer>
    );
}
