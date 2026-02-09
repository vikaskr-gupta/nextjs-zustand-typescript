'use client';

import { useEffect } from 'react';
import { GlobalProvider } from '@/src/context/GlobalContext';
import { useAuthStore } from '@/src/store/useAuthStore';

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    const setAuthState = useAuthStore.setState;

    useEffect(() => {
        const hasToken = document.cookie.includes('token=');

        if (hasToken) {
            setAuthState({ isAuthenticated: true });
        }
    }, [setAuthState]);

    return (
        <GlobalProvider>
            {children}
        </GlobalProvider>
    );
}
