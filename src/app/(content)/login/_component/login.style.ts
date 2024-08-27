import { BasicButton, SuccessButton } from "@/app/_component/ButtonTest";
import styled from "styled-components";

export const LoginBtn = styled(BasicButton)`
    border-radius: 8px; 
    height: 34px; 
    width: 100%;
    margin-top: 10px;
`

export const ErrorBg = styled.div`
    background-color: #000;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
`

export const ErrorLayout = styled.div`
    background-color: var(--whiteColor);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 400px;
    z-index: 1;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`
export const ErrorCloseBtn = styled(SuccessButton)`
    width: 100px;
    
`