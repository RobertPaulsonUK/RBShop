import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_TOKEN_NAME, SESSION_HASH, SESSION_KEY } from "@/utils/constants/constants";

export function middleware(req: NextRequest) {
    const response = NextResponse.next();
    const session = req.cookies.get(SESSION_KEY)?.value;

    if (!session || session !== SESSION_HASH) {
        req.cookies.delete(SESSION_KEY)
        req.cookies.delete(AUTH_TOKEN_NAME)
    }

    return response;
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',],
};
