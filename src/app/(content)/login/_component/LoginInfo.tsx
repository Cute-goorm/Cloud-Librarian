'use client'

import { BasicButton } from "@/app/_component/ButtonTest";
import { AuthInput, AuthLayout, BgLine, LoginBtn } from "../../_component/Auth/Auth.styled";
import React, { useState } from "react";
import Link from "next/link";
import SocialBtn from "../../_component/Auth/SocialBtn";
import AuthErrorModal from "../../_component/Auth/AuthErrorModal";
import { SessionProvider } from "next-auth/react";
import AuthContext from "../../_component/Auth/AuthContext";
import HomeBtn from "@/app/_component/HomeBtn";
import { useRouter } from "next/navigation";
import { LoginApi } from "@/app/api/auth/loginApi";

export default function LoginInfo() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
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

    // 로그인 요청
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email || !password) {
            setIsLoading(false)
            setMessage('이메일 또는 비밀번호를 확인해주세요.')
            setIsOpen(true)
            return;
        }

        setIsLoading(true)
        setIsOpen(true)

        try {
            // loginApi로 로그인 요청
            const response = await LoginApi({ email, password })
            const { token, user } = response;

            localStorage.setItem('token', token);
            // 로그인 성공 시 리다이렉트
            console.log('로그인 성공', response, token, user);
            setIsLoading(false)
            router.push('/')
        } catch (error: any) {
            // 로그인 실패 시 오류 처리
            setIsLoading(false)
            setMessage('이메일 또는 비밀번호를 확인해주세요.')
        }
    }



    return (
        <AuthContext>
            <AuthLayout>
                <SessionProvider>
                    <HomeBtn />
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
                        <BasicButton style={{ width: '100%', height: "34px", borderRadius: '8px' }}>
                            회원가입
                        </BasicButton>
                    </Link>
                    <AuthErrorModal isOpen={isOpen} onClose={handleCloseModal} message={message} isLoading={isLoading} />
                </SessionProvider>
            </AuthLayout >
        </AuthContext>

    )
}




