// hooks/useFetchBooks.tsx
import { useState, useEffect } from 'react';
import { Book } from '@/types/bookTypes';

const booksUrl = '/api/books';

export const BooksInfo = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); // 선택된 책 상태
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(booksUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Book[] = await response.json();
        setBooks(data);
        if (data.length > 0) {
          setSelectedBook(data[0]);
        }
      } catch (error) {
        setError((error as Error).message);
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // 책을 선택하는 함수
  const selectBook = (book: Book) => {
    setSelectedBook(book);
  };

  return { books, selectedBook, selectBook, error, loading };
};
