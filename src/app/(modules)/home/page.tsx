"use client"

import { useAuthStore } from "@/src/store/useAuthStore";
import { useRouter } from "next/navigation";


export default function Home() {
    const { logout } = useAuthStore();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.replace('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                    Welcome 👋
                </h1>

                <p className="text-gray-600 mb-6">
                    You are successfully logged in.
                </p>

                <button
                    onClick={handleLogout}
                    className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                    Logout
                </button>
            </div>
        </div>

    );
}