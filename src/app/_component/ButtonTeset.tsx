'use client'

import { BasicButton, SuccessButton, WarningButton } from '@/app/_component/ButtonTest';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
export default function ButtonTest() {

    const router = useRouter();
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
                    localStorage.removeItem('userId')
                    setIsLoggedIn(false)
                    const token = localStorage.getItem('token')
                    if (!token) {
                        console.log('로그아웃 성공');
                    } else {
                        console.log('로그아웃 실패 토큰 존재');

                    }
                    router.push('/login')
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
        </div>
    );
}
