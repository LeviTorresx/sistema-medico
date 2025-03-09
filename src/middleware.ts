import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    // Si el usuario intenta acceder a una ruta protegida sin token, lo redirige al login
    if (req.nextUrl.pathname.startsWith("/private") && !token) {
        return NextResponse.redirect(new URL("/public/login", req.url));
    }

    // Si ya está autenticado y trata de ir al login, lo manda al dashboard
    if (req.nextUrl.pathname === "/public/login" && token) {
        return NextResponse.redirect(new URL("/private/dashboard", req.url));
    }

    return NextResponse.next();
}

// 🛠 Aplica el middleware solo a rutas que comiencen con "/private"
export const config = {
    matcher: "/private/:path*",
};
