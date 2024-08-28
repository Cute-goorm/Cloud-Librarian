import React from "react";
import { ErrorBg, ErrorCloseBtn, ErrorLayout } from "./Auth.styled";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const AuthErrorModal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;
    return (
        <main>
            <ErrorBg />
            <ErrorLayout>
                <div />
                <p>{message}</p>
                <ErrorCloseBtn onClick={onClose}>확인</ErrorCloseBtn>
            </ErrorLayout>
        </main>
    )
}
export default AuthErrorModal