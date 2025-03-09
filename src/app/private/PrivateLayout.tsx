import Head from "next/head";
import { ReactNode } from "react";
import "../private/PrivateLayout.css";

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
      <div>
        {/* Navbar */}
        <nav className="nav">
          <ul>
            <li>
              <a href="">Sistema medico</a>
            </li>
            <li>
              <a href="">Zona privada</a>
            </li>
          </ul>
        </nav>

        {/* Contenido principal */}
        <main className="w-full flex-1 flex flex-col justify-center">
          {children}
        </main>
      </div>
    </>
  );
}
