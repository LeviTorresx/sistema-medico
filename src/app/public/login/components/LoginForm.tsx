// src/components/LoginForm.tsx
"use client";
import { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
     const router = useRouter();

     const handleSubmit = (e: FormEvent) => {
          e.preventDefault();
          if (email === "user@example.com" && password === "password") {
               localStorage.setItem("token", "fake-jwt-token");
               router.push("/dashboard");
          } else {
               setError("Credenciales incorrectas");
          }
     };

     return (
          <div className="bg-white shadow-lg rounded-lg p-6 w-full">
               <h2 className="text-2xl font-bold mb-4 text-center text-pink-950">Iniciar sesión</h2>
               {error && <p className="text-red-500 text-sm text-center">{error}</p>}
               <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                         type="email"
                         placeholder="Correo electrónico"
                         className="w-full p-2 border border-gray-400 rounded text-slate-950"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                    />
                    <input
                         type="password"
                         placeholder="Contraseña"
                         className="w-full p-2 border border-gray-400 rounded  text-slate-950"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         required
                    />
                    <button
                         type="submit"
                         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                         Ingresar
                    </button>
               </form>
          </div>
     );
}