import Head from "next/head";
import { ReactNode } from "react";

export default function PrivateLayout({
     children,
     title = "Mi App",
}
     :
     {
          children: ReactNode;
          title?: string;
     }) {
     return (
          <>
               <Head>
                    <title>{title}</title>
               </Head>
               <div className="flex flex-col h-screen items-center bg-gray-100">
                    {/* Navbar */}
                    <nav className="flex justify-between w-full bg-blue-600 text-white p-4 text-center shadow-md">
                         <h1 className="text-xl font-semibold">Sistema Medico</h1>
                         <h2 className="text-xl font-semibold">Zona privada</h2>
                    </nav>

                    {/* Contenido principal */}
                    <main className="w-full flex-1 flex flex-col justify-center">
                         {children}
                    </main>
               </div>
          </>
     );
}
