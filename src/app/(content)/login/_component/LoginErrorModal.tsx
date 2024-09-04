'use client'

import React from "react";
import { ErrorBg, ErrorCloseBtn, ErrorLayout } from "./login.style";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const LoginErrorModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    if (!isOpen) return null;
    return (
        <main>
            <ErrorBg />
            <ErrorLayout>
                <div />
                <p>아이디 및 비밀번호를 확인해 주세요.</p>
                <ErrorCloseBtn onClick={onClose}>
                    확인
                </ErrorCloseBtn>
            </ErrorLayout>
        </main>
    )
}
export default LoginErrorModal