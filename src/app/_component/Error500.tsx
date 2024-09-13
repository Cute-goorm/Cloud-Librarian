"use client";

// pages/404.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Error500(){
  return (
    <div>
      <h1>500 - Page Not Found</h1>
      <Image
        src="/images/error500-image.png"  // 이미지 경로 수정
        alt="Error500-Image" 
        width={250} 
        height={250} 
        priority={true} 
      />
      <Link href="/">Go back to the homepage</Link> 
    </div>
  )
}

