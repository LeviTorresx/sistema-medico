"use client";
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import useAuth from "../hooks/useAuth"; // Importa tu hook correctamente

export default function PrivateLayout({
  children,
  title = "Mi App",
}: {
  children: ReactNode;
  title?: string;
}) {
  const { getUserInfo, logout } = useAuth();
  const userInfo = getUserInfo();
  const userName = userInfo?.sub || "Invitado"; // Si no hay nombre, muestra "Invitado"
  console.log(userInfo);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {/* Navbar Mejorado */}
      <nav className="bg-gray-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">Sistema Médico</h1>

          {/* Menú */}
          <ul className="flex space-x-6">
            <li>
              <Link href="/private/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/private/profile" className="hover:underline">
                Perfil
              </Link>
            </li>
          </ul>

          {/* Usuario + Logout */}
          <div className="flex items-center space-x-4">
            <span className="font-medium">{userName}</span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              onClick={() => {
                logout();
                window.location.href = "/";
              }}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="w-full flex-1 flex flex-col justify-center p-6">
        {children}
      </main>
    </>
  );
}
