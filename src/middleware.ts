import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_PAGES = ["/login", "/signup"];

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const { pathname } = request.nextUrl;

    // Not logged in → block all protected pages
    if (!token && !AUTH_PAGES.includes(pathname)) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Logged in → block login/signup
    if (token && AUTH_PAGES.includes(pathname)) {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};
