import Head from "next/head";
import { ReactNode } from "react";


export default function PublicLayout({
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
               <div className="flex flex-col items-center h-screen bg-gray-100">
                    {/* Navbar */}
                    <nav className="w-full bg-blue-600 text-white p-4 text-center shadow-md">
                         <h1 className="text-xl font-semibold">Sistema Medico</h1>
                    </nav>

                    {/* Contenido principal */}
                    <main className="w-full max-w-md p-4 flex-1 flex flex-col justify-center">
                         {children}
                    </main>
                    {/* Footer opcional */}
                    <footer className="w-full p-4 text-center text-sm text-gray-600">
                         © {new Date().getFullYear()} Mi App. Todos los derechos reservados.
                    </footer>

               </div>
          </>
     );
}
