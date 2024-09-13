"use client";

import { useState } from "react";
import ModalLayout from '../_component/Modal';
import { ModalText } from '../_component/Modal.style';

interface ReviewFormModalProps {
    params: { bookId: string };
}

export default function CommentModal({ params }: ReviewFormModalProps) {
    const [comment, setComment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Comment submitted:", comment);
        // 댓글 제출 후 모달 닫기
    };

    return (
        <ModalLayout title="댓글 남기기" onSubmit={handleSubmit}>
            <ModalText
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="댓글을 입력하세요"
                required
            />
        </ModalLayout>
    );
}
