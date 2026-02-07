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
            router.push("/"); // or /auth/signin if you prefer
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "100px auto" }}>
            <h2>Sign Up</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSignup} disabled={loading}>
                {loading ? "Creating account..." : "Sign Up"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
