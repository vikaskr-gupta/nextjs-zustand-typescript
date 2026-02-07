import { useAuthStore } from "@/src/store/useAuthStore";

export function Navbar() {
    const { user, isAuthenticated, logout } = useAuthStore();

    if (!isAuthenticated) return null;

    return (
        <div>
            Welcome {user?.username}
            <button onClick={logout}>Logout</button>
        </div>
    );
}
