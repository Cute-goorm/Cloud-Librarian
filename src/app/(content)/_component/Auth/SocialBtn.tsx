'use client'

import { signIn, useSession } from "next-auth/react";
import { SignupText, SocialSignupButton } from "./Auth.styled";
import AuthContext from "./AuthContext";

export default function SocialBtn() {
    const { data: session } = useSession();

    if (session) {
        // 세션이 존재할 때 토큰에 접근
        console.log('Token', session.accessToken);
    } else {
        console.log('LogOut')
    }

    const handleGoogleSignIn = () => {
        signIn('google', {
            callbackUrl: '/',
        });
    };

    const handleKakaoSignIn = () => {
        signIn('kakao', {
            callbackUrl: '/',
        });
    };
    return (
        <main>
            <AuthContext>
                <SocialSignupButton onClick={handleGoogleSignIn} >
                    <svg
                        id="Icons"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32"
                        xmlSpace="preserve"
                        width='20px'
                        hanging='20px'
                    >
                        <style type="text/css">
                            {
                                "\n\t.st0{fill:#FFFFFF;}\n\t.st1{fill:#3A559F;}\n\t.st2{fill:#F4F4F4;}\n\t.st3{fill:#FF0084;}\n\t.st4{fill:#0063DB;}\n\t.st5{fill:#00ACED;}\n\t.st6{fill:#FFEC06;}\n\t.st7{fill:#FF0000;}\n\t.st8{fill:#25D366;}\n\t.st9{fill:#0088FF;}\n\t.st10{fill:#314358;}\n\t.st11{fill:#EE6996;}\n\t.st12{fill:#01AEF3;}\n\t.st13{fill:#FFFEFF;}\n\t.st14{fill:#F06A35;}\n\t.st15{fill:#00ADEF;}\n\t.st16{fill:#1769FF;}\n\t.st17{fill:#1AB7EA;}\n\t.st18{fill:#6001D1;}\n\t.st19{fill:#E41214;}\n\t.st20{fill:#05CE78;}\n\t.st21{fill:#7B519C;}\n\t.st22{fill:#FF4500;}\n\t.st23{fill:#00F076;}\n\t.st24{fill:#FFC900;}\n\t.st25{fill:#00D6FF;}\n\t.st26{fill:#FF3A44;}\n\t.st27{fill:#FF6A36;}\n\t.st28{fill:#0061FE;}\n\t.st29{fill:#F7981C;}\n\t.st30{fill:#EE1B22;}\n\t.st31{fill:#EF3561;}\n\t.st32{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}\n\t.st33{fill:#0097D3;}\n\t.st34{fill:#01308A;}\n\t.st35{fill:#019CDE;}\n\t.st36{fill:#FFD049;}\n\t.st37{fill:#16A05D;}\n\t.st38{fill:#4486F4;}\n\t.st39{fill:none;}\n\t.st40{fill:#34A853;}\n\t.st41{fill:#4285F4;}\n\t.st42{fill:#FBBC05;}\n\t.st43{fill:#EA4335;}\n"
                            }
                        </style>
                        <g>
                            <path
                                className="st39"
                                d="M8.9,16c0,0.6,0.1,1.2,0.2,1.8L11,16l-1.8-1.8C9,14.8,8.9,15.4,8.9,16z"
                            />
                            <path
                                className="st40"
                                d="M16,23.1c-3.3,0-6-2.2-6.8-5.2l-6.7,6.7C5.3,29,10.3,32,16,32c3.1,0,6-0.9,8.5-2.5l-6.7-6.7 C17.2,23,16.6,23.1,16,23.1z"
                            />
                            <path
                                className="st41"
                                d="M32,13.8c-0.1-0.5-0.5-0.8-1-0.8H16c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5.3c-0.9,1.4-2.2,2.3-3.5,2.8 l6.7,6.7C29,26.7,32,21.7,32,16c0-0.3,0-0.5,0-0.7C32.1,14.9,32.1,14.4,32,13.8z"
                            />
                            <path
                                className="st42"
                                d="M8.9,16c0-0.6,0.1-1.2,0.2-1.8L2.5,7.5C0.9,10,0,12.9,0,16s0.9,6,2.5,8.5l6.7-6.7C9,17.2,8.9,16.6,8.9,16z"
                            />
                            <path
                                className="st43"
                                d="M28.5,6c-1.1-1.4-2.5-2.6-4-3.6C22,0.9,19.1,0,16,0C10.3,0,5.3,3,2.5,7.5l6.7,6.7c0.8-3,3.6-5.2,6.8-5.2 c0.6,0,1.2,0.1,1.8,0.3c0.9,0.3,1.7,0.8,2.6,1.5c0.3,0.3,0.7,0.3,1.1,0.1l6.7-3.3c0.3-0.1,0.5-0.4,0.5-0.7 C28.8,6.6,28.7,6.3,28.5,6z"
                            />
                        </g>
                    </svg>
                    <SignupText >구글로 시작하기</SignupText>
                </SocialSignupButton>
                <SocialSignupButton
                    onClick={() => signIn('facebook')}
                    style={{ backgroundColor: '#3B5998', color: '#fff', borderColor: '#3B5998' }}>
                    <svg
                        fill="#fff"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                    >
                        <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
                    </svg>
                    <SignupText>페이스북으로 시작하기</SignupText>
                </SocialSignupButton>
                <SocialSignupButton
                    onClick={handleKakaoSignIn}
                    style={{ backgroundColor: '#F7E600', borderColor: '#F7E600' }}>
                    <svg
                        fill="#222222"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14.734,12.957a.44.44,0,0,1-.449.43h-1.5a.441.441,0,0,1-.449-.43V9.773a.479.479,0,0,1,.957,0v2.754h1A.44.44,0,0,1,14.734,12.957Zm-2.707-.239c.143.443.018.607-.111.666a.711.711,0,0,1-.3.065.384.384,0,0,1-.39-.207L11,12.634H9.567l-.233.608a.383.383,0,0,1-.39.207.718.718,0,0,1-.3-.065c-.129-.059-.253-.223-.111-.665L9.657,9.767a.653.653,0,0,1,1.249,0ZM10.749,11.8l-.468-1.33L9.813,11.8ZM9.168,9.764a.46.46,0,0,0-.46-.459h-2.4a.459.459,0,1,0,0,.918h.731v2.784a.469.469,0,0,0,.938,0V10.223h.731A.46.46,0,0,0,9.168,9.764Zm7.543,1.394,1.068-1.068a.367.367,0,0,0,.1-.286.472.472,0,0,0-.46-.435.365.365,0,0,0-.26.1l-1.308,1.308V9.773a.469.469,0,0,0-.937,0V12.98a.469.469,0,1,0,.937,0V11.957l.163-.162,1.1,1.456a.469.469,0,0,0,.749-.565ZM22,3V21a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H21A1,1,0,0,1,22,3Zm-1.875,8.219c0-3.538-3.638-6.406-8.125-6.406S3.875,7.681,3.875,11.219a6.249,6.249,0,0,0,3.808,5.428c-.124.429-.8,2.761-.826,2.944,0,0-.016.138.073.19a.243.243,0,0,0,.194.012c.255-.036,2.964-1.938,3.433-2.269a10.192,10.192,0,0,0,1.443.1C16.487,17.625,20.125,14.757,20.125,11.219Z" />
                    </svg>
                    <SignupText>카카오톡으로 시작하기</SignupText>
                </SocialSignupButton>
            </AuthContext>
        </main>
    )
}