import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value; // 🔹 Obtener token desde cookies

    // Rutas públicas y privadas según tu estructura
    const publicRoutes = ["/public/login"];
    const privateRoutes = [
        "/private/dashboard",
        "/private/forms",
        "/private/search",
    ];

    const pathname = req.nextUrl.pathname;

    // 🔹 Si no tiene token y quiere acceder a una ruta privada, redirigir a login
    if (!token && privateRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/public/login", req.url));
    }

    // 🔹 Si tiene sesión activa e intenta entrar a login, redirigir al dashboard
    if (token && publicRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL("/private/dashboard", req.url));
    }

    return NextResponse.next(); // Permite el acceso normal
}

export const config = {
    matcher: ["/private/:path*"], // 🔹 Aplica solo a rutas privadas
};
