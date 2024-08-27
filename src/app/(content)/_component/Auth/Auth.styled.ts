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