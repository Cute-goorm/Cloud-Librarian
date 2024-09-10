'use client'

import { BasicButton, SuccessButton, WarningButton } from '@/app/_component/ButtonTest';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
export default function ButtonTest() {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false)
        }
    }, [])

    return (
        <div style={{ display: 'flex', width: '1075px', margin: '0 auto', justifyContent: 'space-between', alignItems: 'center', height: ' 60px' }}>
            <Link href='/'>
                <SuccessButton>
                    Main
                </SuccessButton>
            </Link>
            <Link href='/120asdk213'>
                <BasicButton>
                    bookDetail
                </BasicButton>
            </Link>
            <Link href='/120asdk213/bookReview'>
                <BasicButton>
                    bookReview
                </BasicButton>
            </Link>
            <Link href='/admibookform'>
                <SuccessButton>
                    admibookform
                </SuccessButton>
            </Link>
            <Link href='/favorites'>
                <BasicButton>
                    favorites
                </BasicButton>
            </Link>
            <Link href='/profile'>
                <BasicButton>
                    profile
                </BasicButton>
            </Link>
            <Link href='/search'>
                <SuccessButton>
                    search
                </SuccessButton>
            </Link>
            {isLoggedIn ? (
                <BasicButton onClick={() => {
                    localStorage.removeItem('token')
                    setIsLoggedIn(false)
                }}>
                    로그아웃
                </BasicButton>
            ) : (
                <Link href='/login'>
                    <SuccessButton>
                        login
                    </SuccessButton>
                </Link>
            )}
            <Link href='/signup'>
                <WarningButton>
                    signup
                </WarningButton>
            </Link>
        </div>
    );
}
