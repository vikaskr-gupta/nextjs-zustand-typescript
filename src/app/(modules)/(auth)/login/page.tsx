"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/src/store/useAuthStore";

export default function LogInPage() {
    const router = useRouter();
    const { logIn, loading, error } = useAuthStore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const success = await logIn({ email, password });
        if (success) router.push("/");
    };

    return (
        <div>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit} disabled={loading}>
                Log In
            </button>
            {error && <p>{error}</p>}
        </div>
    );
}
