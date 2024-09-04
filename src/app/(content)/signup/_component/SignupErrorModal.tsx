import React from "react";
import { ErrorBg, ErrorCloseBtn, ErrorLayout } from "../../login/_component/login.style";


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const SignupErrorModal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {

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

export default SignupErrorModal