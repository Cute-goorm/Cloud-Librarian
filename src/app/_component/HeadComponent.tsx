// components/HeadComponent.tsx
import Head from 'next/head';

export default function HeadComponent() {
    return (
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
}
