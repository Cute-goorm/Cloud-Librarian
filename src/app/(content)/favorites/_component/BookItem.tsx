import { Book } from "@/types/bookTypes";
import { BookItemContainer, BookItemLargeText, BookItemSmallText } from "./favorites.style";
import Link from "next/link";

interface BookItemProps {
    book: Book;
}

export default function BookItem({ book }: BookItemProps) {
    return (
        <BookItemContainer>
            <Link href={`/${book.id}`}>
                <img src={book.imageUrl} alt={book.title}
                    style={{ width: '183px', height: '242px' }} />
                <BookItemLargeText>
                    {book.title}
                </BookItemLargeText>
                <BookItemSmallText>
                    {book.author} | {book.publisher}
                </BookItemSmallText>
            </Link>
        </BookItemContainer>
    )
}