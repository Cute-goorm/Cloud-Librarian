'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';  // DB에서 사용자 정보를 가져오기 위해 사용

export default function SignupTest() {
    const searchParams = useSearchParams();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        nickName: '',
        picture: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // URL에서 사용자 ID를 가져옴
        const userId = searchParams.get('id');

        if (userId) {
            // 사용자 ID로 DB에서 사용자 정보 조회
            axios.get(`http://localhost:4000/users/${userId}`)
                .then((response) => {
                    const user = response.data;
                    setUserData({
                        email: user.email,
                        password: user.password,
                        nickName: user.nickName,
                        picture: user.picture
                    });
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('사용자 정보를 불러오는 중 오류가 발생했습니다.', error);
                    setLoading(false);
                });
        }
    }, [searchParams]);

    if (loading) {
        return <p>로딩 중...</p>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>회원가입 정보</h1>
            <p><strong>이메일:</strong> {userData.email}</p>
            <p><strong>비밀번호:</strong> {userData.password}</p>
            <p><strong>닉네임:</strong> {userData.nickName}</p>
            <p><strong>프로필 사진:</strong> <img src={userData.picture} alt="프로필 사진" style={{ width: '100px', height: '100px' }} /></p>
        </div>
    );
}
