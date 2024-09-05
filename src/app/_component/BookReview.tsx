
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { apiEndPoint } from '@/config/apiConfig';
import { Book } from '@/types/bookTypes';

//const booksUrl = apiEndPoint.bookList.books;
const booksUrl = '/api/booksApi';

export const OutlineCloudIcon = () => {
  <svg
    width="150px"      height="150px"    viewBox="0 -4.04 20.088 20.088"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="cloud" transform="translate(-1.912 -5.986)">
      <path  id="secondary"    fill="none"
        d="M17,9a4.08,4.08,0,0,0-.93.12,5,5,0,0,0-9,2.09A3,3,0,1,0,6,17H17a4,4,0,0,0,0-8Z"
      />
      <path  id="primary"
        d="M17,9a4.08,4.08,0,0,0-.93.12,5,5,0,0,0-9,2.09A3,3,0,1,0,6,17H17a4,4,0,0,0,0-8Z"
        fill="none"
        stroke="#757575"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
    </g>
  </svg>
}
export const FilledCloudIcon = () => {
  <svg
    width="150px"      height="150px"     viewBox="0 -4.04 20.088 20.088"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="cloud" transform="translate(-1.912 -5.986)">
      <path id="secondary"    fill="#F5A623"
        d="M17,9a4.08,4.08,0,0,0-.93.12,5,5,0,0,0-9,2.09A3,3,0,1,0,6,17H17a4,4,0,0,0,0-8Z"
      />
      <path id="primary"
        d="M17,9a4.08,4.08,0,0,0-.93.12,5,5,0,0,0-9,2.09A3,3,0,1,0,6,17H17a4,4,0,0,0,0-8Z"
        fill="none"
        stroke="#F5A623"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
    </g>
  </svg>
}

export default function BookReview() {
    const [books, setBooks] = useState<Book[]>([]); // Book 배열 또는 null 상태
        
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(booksUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Book[] = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        fetchBooks();
    }, []); 


    return (
        <div>
          
            {books.map((book) => (
              <div>
                <Image src={book.imageUrl} alt={book.title} width={100} />
                <div>
                  <button /> // 즐겨찾기 버튼
                  <h2>{book.title}</h2> // 도서 제목
                  <p>{book.author} "|" {book.publisher}</p> // 저자 | 출판사
                  <p>{book.previewContent}</p>
                  
                </div>
              </div>
            ))}
        </div>
    );
}
