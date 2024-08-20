'use client'

import { BasicButton } from "@/app/_component/ButtonTest";
import { AuthInput, AuthLayout, BgLine, SignupText, SocialSignupButton } from "../../_component/Auth/Auth.styled";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialBtn from "../../_component/Auth/SocialBtn/SocialBtn";

export default function LoginInfo() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter();

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        console.log(email);
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        console.log(password);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({ email, password });
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
                <BasicButton style={{ borderRadius: '8px', height: '34px', width: '100%' }}>
                    로그인
                </BasicButton>
            </form>
            <BgLine />
            <div style={{ width: '100%' }}>
                <SocialBtn />
            </div>
            <BasicButton style={{ borderRadius: '8px', height: '34px', width: '100%' }}>
                <Link href="/signup">회원가입</Link>
            </BasicButton>
        </AuthLayout>
    )
}