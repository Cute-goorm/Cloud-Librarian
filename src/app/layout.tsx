'use client'

import type { Metadata } from "next";
import ButtonTest from "./_component/ButtonTeset";
import ReduxProvider from "./_component/ReduxProvider";
import Script from "next/script"; // next/script 사용
import GlobalStyle from "./GlobalStyle";
import { usePathname } from "next/navigation";
import Head from "next/head";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // 현재 경로 가져오기
    const pathname = usePathname();

    const isAuthPage = pathname === '/login' || pathname === '/signup';

    return (
        <html lang="ko">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <ReduxProvider>
                    {/* GlobalStyle 적용 */}
                    <GlobalStyle />
                    {!isAuthPage && <ButtonTest />}
                    {children}
                    {/* {!isAuthPage && <Footer />} */}
                    {/* next/script 사용하여 스크립트 안전하게 로드 */}
                    <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="afterInteractive" />
                </ReduxProvider>
            </body>
        </html>
    );
}
