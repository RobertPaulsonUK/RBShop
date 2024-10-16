import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_TOKEN_NAME, SESSION_HASH, SESSION_KEY } from "@/utils/constants/constants";
import createMiddleware from "next-intl/middleware";
import {routing} from "@/i18n/routing";


const intlMiddleware = createMiddleware(routing);

export function middleware(req: NextRequest) {
    let response = intlMiddleware(req);
    if (!response) {
        response = NextResponse.next();
    }
    const session = req.cookies.get(SESSION_KEY)?.value;

    if (!session || session !== SESSION_HASH) {
        req.cookies.delete(SESSION_KEY)
        req.cookies.delete(AUTH_TOKEN_NAME)
    }

    return response;
}

export const config = {
    matcher: ['/', '/(de|en)/:path*', '/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};