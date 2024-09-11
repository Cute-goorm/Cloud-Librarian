'use client'

import { useEffect, useState } from "react";
import BookList from "./BookList";
import CategoriesFillter from "./CategoriesFillter";
import { FavoritesContainer } from "./favorites.style";

export default function Favorites() {
    const [userId, setUserId] = useState<string>("")
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId')
        if (storedUserId) {
            setUserId(storedUserId)
        }
    }, [])
    console.log(userId);

    if (userId === "") {
        return (
            <FavoritesContainer>
                <p>로그인을 해주세요.</p>
            </FavoritesContainer>
        )
    }
    return (
        <FavoritesContainer>
            <CategoriesFillter />
            <BookList userId={userId} />
        </FavoritesContainer>
    )
}