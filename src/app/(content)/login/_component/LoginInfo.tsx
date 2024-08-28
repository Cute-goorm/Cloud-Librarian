'use client'

import { BasicButton } from "@/app/_component/ButtonTest";
import { AuthInput, AuthLayout, BgLine } from "../../_component/Auth/Auth.styled";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialBtn from "../../_component/Auth/SocialBtn/SocialBtn";
import { LoginBtn } from "./login.style";
import LoginErrorModal from "./LoginErrorModal";

export default function LoginInfo() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const router = useRouter();

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        console.log(email);
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        console.log(password);
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({ email, password });
        // 가상으로 DB 확인
        const isLoginSuccess = mockLogin(email, password)
        if (!isLoginSuccess) {
            // 에러 상황에서 모달창 띄우기
            setIsOpen(true)
        } else {
            // 로그인 성공시 로직
        }
    }
    // 가상 로그인 함수
    const mockLogin = (email: string, password: string): boolean => {
        // 간단한 조건으로 시뮬레이션
        return email === 'example@example.com' && password === 'example123';
    }



    const onClickBackBtn = () => {
        router.back();
    }


    return (
        <AuthLayout>
            <button
                onClick={onClickBackBtn}
                style={{ marginBottom: '20px' }}>
                <svg
                    fill="#757575"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="24px"
                    viewBox="0 0 52 52"
                    enableBackground="new 0 0 52 52"
                    xmlSpace="preserve"
                >
                    <path d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0 L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29 h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z" />
                </svg>
            </button>
            <form onSubmit={handleSubmit}>
                <AuthInput
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <AuthInput
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={handleChangePassword}
                />
                <LoginBtn>
                    로그인
                </LoginBtn>
            </form>
            <BgLine />
            <div style={{ width: '100%' }}>
                <SocialBtn />
            </div>

            <Link href="/signup"
                style={{ borderRadius: '8px', height: '34px', width: '100%' }}
            >
                <BasicButton style={{ width: '100%' }}>
                    회원가입
                </BasicButton>
            </Link>
            <LoginErrorModal isOpen={isOpen} onClose={handleCloseModal} />
        </AuthLayout >

    )
}

function mockLogin(email: string, password: string) {
    throw new Error("Function not implemented.");
}
