"use client";

import { createContext, useContext, useState, useMemo } from "react";
import { useAuthStore } from "@/src/store/useAuthStore";

type GlobalContextType = {
    userId: number | null;
    isAuthenticated: boolean;

    userData: any[];
    setUserData: (data: any[]) => void;
};

type UserData = {
    id: number;
    name: string;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

    const userId = useAuthStore((state) => state.user?.userId ?? null);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    const [userData, setUserData] = useState<UserData[]>([]);

    const value = useMemo(
        () => ({
            userId,
            isAuthenticated,
            userData,
            setUserData,
        }),
        [userId, isAuthenticated, userData]
    );

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const ctx = useContext(GlobalContext);
    if (!ctx) {
        throw new Error("useGlobalContext must be used inside GlobalProvider");
    }
    return ctx;
};
