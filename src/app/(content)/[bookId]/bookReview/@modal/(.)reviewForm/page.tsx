// app/[bookId]/@modal/reviewForm/page.tsx
'use client';

import { useState } from "react";
import ModalLayout from '../_component/Modal';
import { ModalText } from '../_component/Modal.style';

interface ReviewFormModalProps {
    params: { bookId: string };
}

export default function ReviewFormModal({ params }: ReviewFormModalProps) {
    const [review, setReview] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Review for book ${params.bookId}:`, review);
    // 리뷰 제출 처리 로직
    };

    return (
        <ModalLayout title="리뷰 남기기" onSubmit={handleSubmit}>
            <ModalText
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="리뷰를 입력하세요"
                required
            />
        </ModalLayout>
    );
};
