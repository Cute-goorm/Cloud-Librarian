import { BasicButton, SuccessButton } from "@/app/_component/ButtonTest";
import styled from "styled-components";

export const AuthLayout = styled.div`
    width: 380px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
`

export const AuthInput = styled.input`
    text-align: center;
    width:100%;
    height: 34px;
    border: 1px solid #999;
    border-radius: 8px;
    margin-top:8px;
    padding: 5px 0;
    font-size: 15px;
`
export const BgLine = styled.div`
    height: 1px;
    width: 100%;
    background-color: #ddd;
    margin: 20px 0;
`

export const SocialSignupButton = styled.button`
    width:100%;
    height:34px;
    margin-bottom: 8px;
    border: 1px solid #999;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--mainColor);
    transition: all 0.15s ease-in-out;
    &:hover {
        opacity: 0.85
    }
`

export const SignupText = styled.p`
    margin-left: 5px;
`

export const ValMsg = styled.p`
    color: var(--errorRed);
    font-size: 12px;
    display: inline-block;
    padding: 5px 0 0 5px;
    `
export const SignupBtn = styled(BasicButton)`
    border-radius: 8px; 
    height: 34px; 
    width: 100%;
    margin-top: 10px;
`


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