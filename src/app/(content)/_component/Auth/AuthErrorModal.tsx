import React from "react";
import { ErrorBg, ErrorCloseBtn, ErrorLayout } from "./Auth.styled";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    isLoading: boolean;
}

const AuthErrorModal: React.FC<ModalProps> = ({ isOpen, onClose, message, isLoading }) => {
    if (!isOpen) return null;
    return (
        <main>
            <ErrorBg />
            <ErrorLayout>
                <div />
                <p>{isLoading ? '로그인 중입니다.' : message}</p>
                <ErrorCloseBtn onClick={onClose}>확인</ErrorCloseBtn>
            </ErrorLayout>
        </main>
    )
}
export default AuthErrorModal