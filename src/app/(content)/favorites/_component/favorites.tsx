'use client'

import BookList from "./BookList";
import CategoriesFillter from "./CategoriesFillter";
import { FavoritesContainer } from "./favorites.style";

export default function Favorites() {
    return (
        <FavoritesContainer>
            <CategoriesFillter />
            <BookList />
        </FavoritesContainer>
    )
}