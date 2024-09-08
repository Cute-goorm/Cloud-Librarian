'use client'; 

import { usePathname } from "next/navigation";
import ButtonTest from './ButtonTeset';

export default function AuthChecker() {
    const pathname = usePathname();
    const isAuthPage = pathname === '/login' || pathname === '/signup';

    return !isAuthPage && <ButtonTest />;
}
