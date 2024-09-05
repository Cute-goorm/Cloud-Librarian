'use client'

import React from 'react';
import '../globals.css'
import Image from 'next/image';
import { FlexBox, ListItem, NavLink } from '@/app/_component/Navigation.styles';

export default function Navigation() {
    return (
        <nav>
          <FlexBox>
            <ListItem>
              <Image
                src="/error404-image.png" // 이미지 경로
                alt="Logo Image" // 대체 텍스트
                width={60} // 이미지 너비
                height={60} // 이미지 높이
              />
            </ListItem>
            <ListItem>
              <NavLink href="/">Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink href="/">Search Bar</NavLink>
            </ListItem>
            <ListItem>
              <NavLink href="/login">Login</NavLink>
            </ListItem>
          </FlexBox>
        </nav>
    );
}
