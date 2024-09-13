import styled from "styled-components";


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 배경 어둡게 처리 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 모달을 화면 위로 */
`

export const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const ModalText = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
`

export const ModalButtonsBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ModalButtons = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
`