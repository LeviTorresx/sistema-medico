"use client";
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
export default function PrivateLayout({
  children,
  title = "Mi App",
}: {
  children: ReactNode;
  title?: string;
}) {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {/* Navbar Mejorado */}
      <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">Sistema Médico</h1>

          {/* Menú */}
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link href="/private/dashboard" className="hover:text-gray-300 transition">
                Dashboard
              </Link>
            </li>
          </ul>

          {/* Usuario + Logout */}
          <div className="flex items-center space-x-4">
            
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow-md transition-all duration-200"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="w-full flex-1 flex flex-col justify-center items-center p-8 bg-gray-100 min-h-screen">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full">
          {children}
        </div>
      </main>
    </>
  );
}