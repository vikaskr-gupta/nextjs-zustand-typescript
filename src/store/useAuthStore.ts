import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { logInAPI, signUpAPI } from "@/src/services/auth.service";

type User = {
    userId: number;
    username: string;
};

type AuthStore = {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;

    logIn: (payload: { email: string; password: string }) => Promise<boolean>;
    signUp: (payload: {
        email: string;
        password: string;
        username: string;
    }) => Promise<boolean>;

    logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
    devtools(
        persist(
            (set) => ({
                user: null,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: null,

                logIn: async (payload) => {
                    set({ loading: true, error: null });

                    try {
                        const res = await logInAPI(payload);
                        const data = res?.data;

                        set({
                            user: {
                                userId: data?.userId,
                                username: data?.username,
                            },
                            token: data?.token,
                            isAuthenticated: true,
                            loading: false,
                        });

                        return true;
                    } catch (err: any) {
                        set({
                            error: err?.response?.data?.message || "Login failed",
                            loading: false,
                        });
                        return false;
                    }
                },

                signUp: async (payload) => {
                    set({ loading: true, error: null });

                    try {
                        const res = await signUpAPI(payload);
                        const data = res?.data;

                        set({
                            user: {
                                userId: data?.userId,
                                username: data?.username,
                            },
                            token: data?.token,
                            isAuthenticated: true,
                            loading: false,
                        });

                        return true;
                    } catch (err: any) {
                        set({
                            error: err?.response?.data?.message || "Signup failed",
                            loading: false,
                        });
                        return false;
                    }
                },

                logout: () => {
                    set({
                        user: null,
                        token: null,
                        isAuthenticated: false,
                    });
                },
            }),
            {
                name: "auth-storage",
                partialize: (state) => ({
                    token: state?.token,
                    isAuthenticated: state?.isAuthenticated,
                    user: state?.user
                        ? {
                            userId: state?.user?.userId,
                            username: state?.user?.username,
                        }
                        : null,
                }),
            }
        ),
        { name: "AuthStore" }
    )
);
