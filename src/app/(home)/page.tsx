'use client'
import { BasicButton, SuccessButton, WarningButton } from '@/components/Button/Button.style';
import React from 'react';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <div>
        <BasicButton>Basic Button</BasicButton>
        <WarningButton>Warning Button</WarningButton>
        <SuccessButton>Success Button</SuccessButton>
      </div>
    </>
  );
}
