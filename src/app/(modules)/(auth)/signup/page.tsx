"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/src/store/useAuthStore";

export default function SignupPage() {
    const router = useRouter();
    const { signUp, loading, error } = useAuthStore();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        if (!username || !email || !password) {
            alert("All fields are required");
            return;
        }

        const success = await signUp({
            username,
            email,
            password,
        });

        if (success) {
            router.push("/home"); // or /auth/signin if you prefer
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Create your account
                </h1>

                <div className="space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className=" w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="*********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=" w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-sm text-red-600 text-center">
                            {error}
                        </p>
                    )}

                    {/* Button */}
                    <button
                        onClick={handleSignup}
                        disabled={loading}
                        className=" w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Creating account...' : 'Sign Up'}
                    </button>

                    {/* Footer */}
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Already have an account?{' '}
                        <span
                            onClick={() => router.push('/login')}
                            className="text-black font-medium cursor-pointer hover:underline"
                        >
                            Log in
                        </span>
                    </p>
                </div>
            </div>
        </div>

    );
}
