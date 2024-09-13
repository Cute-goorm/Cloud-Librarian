// /app/api/books/route.ts
import { NextResponse } from 'next/server';
import { Book } from '@/types/bookTypes';

// 랜덤한 ID 생성 함수
function generateRandomId() {
  return Math.floor(Math.random() * 1000000).toString();
}

// 가짜 데이터를 생성하는 함수
function generateFakeBooks(count: number = 3): Book[] {
  const books: Book[] = [];
  
  for (let i = 0; i < count; i++) {
    const book: Book = {
      id: generateRandomId(),
      title: `Sample Book Title ${i + 1}`,
      author: `Author ${i + 1}`,
      publisher: `Publisher ${i + 1}`,
      publicationYear: 2000 + i,
      previewContent: `This is a preview content for book ${i + 1}.`,
      imageUrl: `/images/sample-book-${i + 1}.jpg`,
    };
    books.push(book);
  }

  return books;
}

// GET 요청 핸들러
export async function GET() {
  const books = generateFakeBooks(5); // 5개의 가짜 데이터를 생성
  return NextResponse.json(books); // 생성된 데이터를 반환
}
