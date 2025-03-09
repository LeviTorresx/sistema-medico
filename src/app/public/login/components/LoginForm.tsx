"use client";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "./../../../hooks/useAuth";

export default function LoginForm() {
  const { token, login } = useAuth();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/private/dashboard"); // 🔹 Ahora redirige cuando el token se actualiza
    }
  }, [token, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      await login(user, password);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error desconocido al iniciar sesión");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md mx-auto">
     <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
       Iniciar sesión
     </h2>
     {error && (
       <p className="text-red-600 bg-red-100 border border-red-400 rounded-md text-sm p-2 text-center mb-4">
         {error}
       </p>
     )}
     <form onSubmit={handleSubmit} className="space-y-5">
       <div>
         <input
           type="text"
           placeholder="Correo electrónico"
           className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
           value={user}
           onChange={(e) => setUser(e.target.value)}
           required
         />
       </div>
       <div>
         <input
           type="password"
           placeholder="Contraseña"
           className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
         />
       </div>
       <button
         type="submit"
         className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
         disabled={loading}
       >
         {loading ? "Cargando..." : "Ingresar"}
       </button>
     </form>
     <p className="text-center text-gray-600 text-sm mt-4">
       ¿Olvidaste tu contraseña?{" "}
       <a href="#" className="text-blue-500 hover:underline">
         Recupérala aquí
       </a>
     </p>
   </div>
   
  );
}
