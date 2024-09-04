'use client'

import { BasicButton, SuccessButton, WarningButton } from '@/app/_component/ButtonTest';
import Link from 'next/link';
import React from 'react';
export default function ButtonTest() {
    return (
        <div>
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
            <Link href='/login'>
                <SuccessButton>
                    login
                </SuccessButton>
            </Link>
            <Link href='/signup'>
                <WarningButton>
                    signup
                </WarningButton>
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
        </div>
    );
}
