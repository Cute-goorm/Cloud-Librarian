'use client'
import { AuthInput, AuthLayout, BgLine, SignupBtn, SocialSignupButton, ValMsg } from "../../_component/Auth/Auth.styled";
import { useState } from "react";
import SocialBtn from "../../_component/Auth/SocialBtn";
import Link from "next/link";
import AuthErrorModal from "../../_component/Auth/AuthErrorModal";
import AuthContext from "../../_component/Auth/AuthContext";
import HomeBtn from "@/app/_component/HomeBtn";

export default function SignupInfo() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [nickName, setNickName] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    // 이메일 형식 검사
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        return emailRegex.test(email)
    }
    // 비밀번호 형식 검사
    const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordRegex.test(password)
    }
    // 비밀번호 일치 검사
    const isPasswordMatched = (password: string, confirmPassword: string): boolean => {
        return password === confirmPassword
    }


    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)
    }
    const handleChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickName(e.target.value)
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // 모든 검사를 통과 했는지 확인
        if (validateEmail(email) && validatePassword(password) && isPasswordMatched(password, confirmPassword)) {
            console.log({ email, password, nickName });

        } else {
            if (!validateEmail(email)) {
                setMessage('이메일를 확인해 주세요.')
                setIsOpen(true);

            } else if (!validatePassword(password)) {
                setMessage('비밀번호를 확인해 주세요.')
                setIsOpen(true);
            } else if (!isPasswordMatched(password, confirmPassword)) {
                setMessage('비밀번호를 확인해 주세요.')
                setIsOpen(true);
            }
        }
    }

    return (
        <AuthContext>
            <AuthLayout>
                <HomeBtn />
                <form action="" onSubmit={handleSubmit}>
                    <AuthInput
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={handleChangeEmail}
                    />

                    {
                        email && !validateEmail(email) &&
                        <ValMsg>*이메일 형식이 올바르지 않습니다. </ValMsg>
                    }
                    <AuthInput
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={handleChangePassword}
                    />
                    {
                        password && !validatePassword(password) &&
                        <ValMsg>
                            *8자 이상 영문과 숫자, 특수문자를 포함 시켜주세요.
                        </ValMsg>

                    }
                    <AuthInput
                        type="password"
                        placeholder="비밀번호 확인"
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                    />
                    {
                        confirmPassword && !isPasswordMatched(password, confirmPassword) &&
                        <ValMsg>*비밀번호가 일치하지 않습니다.</ValMsg>
                    }
                    <AuthInput
                        type="text"
                        placeholder="닉네임"
                        value={nickName}
                        onChange={handleChangeNickName}
                    />
                    <SignupBtn>
                        회원가입
                    </SignupBtn>
                </form>
                <BgLine />
                <div style={{ width: '100%' }}>
                    <SocialBtn />
                </div>
                <BgLine />
                <Link href='/login' style={{ textAlign: 'center', width: '100%', fontSize: '14px' }}>기존 회원 로그인하러 가기</Link>

                <AuthErrorModal isOpen={isOpen} onClose={handleCloseModal} message={message} />
            </AuthLayout>
        </AuthContext>

    )
}
