/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler:{
    styledComponents: {
      ssr: true,         // 서버사이드 렌더링 지원
      displayName: true, // 개발 중 디버깅을 위해 컴포넌트 이름을 className에 추가
    },
  },

};

export default nextConfig;
