'use client'
import { AuthInput, AuthLayout, BgLine, SignupBtn, SocialSignupButton, ValMsg } from "../../_component/Auth/Auth.styled";
import React, { useState } from "react";
import SocialBtn from "../../_component/Auth/SocialBtn";
import Link from "next/link";
import AuthErrorModal from "../../_component/Auth/AuthErrorModal";
import AuthContext from "../../_component/Auth/AuthContext";
import HomeBtn from "@/app/_component/HomeBtn";
import { useRouter } from "next/navigation";
import { checkEmailExists, SignupApi } from "@/app/api/auth/signupApi";
import { defaultPicture } from "./defaultPicture";

export default function SignupInfo() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [nickName, setNickName] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter();


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


    // 회원가입 후 자동 로그인, 데이터 전송
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setIsOpen(false)

        // 모든 검사를 통과 했는지 확인
        if (validateEmail(email) && validatePassword(password) && isPasswordMatched(password, confirmPassword)) {
            try {
                // Email 중복 체크
                const emailExists = await checkEmailExists(email);
                if (emailExists) {
                    setMessage('이미 존재하는 이메일 입니다.')
                    setIsOpen(true)
                    setIsLoading(false)
                    return;
                }

                // 이메일 중복이 아니면 회원가입 진행
                const response = await SignupApi({
                    email,
                    password,
                    nickName,
                    picture: defaultPicture
                });

                const { token, user } = response
                // 토큰 저장
                localStorage.setItem('token', token)
                // 회원가입 성공, 로그인 처리
                setIsLoading(false)
                // router.push('/')

                // signupTest
                router.push(`/signup/signupTest?id=${user.id}`);
            } catch {
                setIsLoading(false)
                setMessage('회원가입에 실패했습니다. 다시 시도해 주세요.')
                setIsOpen(true)
            }
        } else {
            if (!validateEmail(email)) {
                setMessage('이메일를 확인해 주세요.')

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

                <AuthErrorModal isOpen={isOpen} onClose={handleCloseModal} message={message} isLoading={isLoading} />
            </AuthLayout>
        </AuthContext>

    )
}
