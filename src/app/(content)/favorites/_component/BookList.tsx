import React, { useEffect, useState } from 'react';
import { Book } from '@/types/bookTypes';
import axiosInstance from '@/app/api/auth/axiosInstance';
import BookItem from './BookItem';
import { BookListContainer } from './favorites.style';

interface BookListProps {
    userId: string; // 사용자의 ID
}

export default function BookList({ userId }: BookListProps) {
    const [bookmarks, setBookmarks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBookmarkedBooks = async () => {
            try {
                // 현재 로그인된 사용자의 ID를 localStorage에서 가져오기
                const loggedInUserId = localStorage.getItem('userId');
                if (!loggedInUserId) {
                    console.error('로그인된 사용자 ID를 찾을 수 없습니다.');
                    return;
                }

                // 전체 사용자 목록에서 id가 로그인된 사용자와 일치하는 데이터만 필터링
                const userResponse = await axiosInstance.get(`/users`);
                const user = userResponse.data.find((user: { id: string }) => user.id === loggedInUserId);
                console.log(user)

                if (!user) {
                    console.error('해당 사용자 데이터를 찾을 수 없습니다.');
                    return;
                }

                const userBookmarks = user.bookmarks || [];

                // 각 bookId로 DB에서 책 정보 가져오기
                const bookPromises = userBookmarks.map(async (bookmark: { bookId: string }) => {
                    const bookResponse = await axiosInstance.get(`/books/${bookmark.bookId}`);
                    return bookResponse.data;
                });

                // 모든 책 정보를 병렬로 가져오기
                const books = await Promise.all(bookPromises);

                // 상태 업데이트
                setBookmarks(books);
            } catch (error) {
                console.error('책을 불러오는 중 오류가 발생했습니다.', error);
            }
        };

        fetchBookmarkedBooks();
    }, [userId]);

    return (
        <BookListContainer>
            {bookmarks.map(book => (
                <BookItem key={book.id} book={book} />
            ))}
        </BookListContainer>
    );
}
