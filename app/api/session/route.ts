import {NextRequest, NextResponse} from "next/server";
import {SESSION_HASH, SESSION_KEY} from "@/utils/constants/constants";

export async function GET() {
    const response = NextResponse.json({ message: 'Session created' });
    response.cookies.set(SESSION_KEY, SESSION_HASH, {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7
    });
    return response
}
export async function DELETE(request: NextRequest) {
    const response = NextResponse.json({ message: 'Session deleted' });
    response.cookies.delete(SESSION_KEY, {
        path: '/',
    });

    return response;
}