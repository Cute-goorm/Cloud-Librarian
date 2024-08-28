'use client'
import { useRouter } from "next/navigation";
import { AuthInput, AuthLayout, BgLine, SignupBtn, SocialSignupButton, ValMsg } from "../../_component/Auth/Auth.styled";
import { useState } from "react";
import SocialBtn from "../../_component/Auth/SocialBtn/SocialBtn";
import Link from "next/link";
import AuthErrorModal from "../../_component/Auth/AuthErrorModal";

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

    const router = useRouter();
    const onClickBackBtn = () => {
        router.replace('/');
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
            }
        }
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
    )
}