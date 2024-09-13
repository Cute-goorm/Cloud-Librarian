"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Modal, ModalButtons, ModalButtonsBox, ModalOverlay } from './Modal.style';

interface ModalLayoutProps {
  title: string;
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}
export default function ModalLayout({ title, children, onSubmit }: ModalLayoutProps) {
  const router = useRouter();

  return (
    <ModalOverlay>
      <Modal>
        <h2>{title}</h2>
        <form onSubmit={onSubmit}>
          {children}
          <ModalButtonsBox>
            <ModalButtons type="submit">제출하기</ModalButtons>
            <ModalButtons type="button" onClick={() => router.back()}>
              닫기
            </ModalButtons>
          </ModalButtonsBox>
        </form>
      </Modal>
    </ModalOverlay>
  );
};

