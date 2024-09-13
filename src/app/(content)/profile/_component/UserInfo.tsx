'use client'

import React, { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { SideBar, AccountInfo, UserInfoMain } from './UserInfo.style';
import { UserList, UserName }   from './UserInfo.style'

export default function UserInfo() {

    return (
        <UserInfoMain>
            <SideBar>
                <UserList>
                    <UserName> User1</UserName>
                    <UserName> User2</UserName>
                </UserList>
            </SideBar>
            <AccountInfo>

            </AccountInfo>
        </UserInfoMain>
    )
}
