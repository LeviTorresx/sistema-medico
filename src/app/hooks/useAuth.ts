"use client";

import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

interface AuthResponse {
  token: string;
}

interface AuthError {
  error: string;
}

export default function useAuth() {
  const [token, setToken] = useState<string | null>(() => {
    // Inicializa el token con el valor guardado en localStorage
    return typeof window !== "undefined" ? localStorage.getItem("token") : null;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token); // Guardar en localStorage
      document.cookie = `token=${token}; path=/; Secure;`; // Guardar en cookie
    } else {
      localStorage.removeItem("token"); // Eliminar del almacenamiento
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Expirar cookie
    }
  }, [token]);

  const login = async (user: string, password: string): Promise<void> => {
    try {
      const res = await axios.post<AuthResponse>(
        "http://localhost:8080/api/auth/login",
        { user, password }
      );
      setToken(res.data.token);
    } catch (err) {
      const error = err as AxiosError<AuthError>;
      throw new Error(error.response?.data?.error || "Error en autenticación");
    }
  };

  const logout = () => {
    setToken(null);
  };

  const getUserInfo = () => {
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error("Error decodificando el token", error);
      return null;
    }
  };

  return { token, login, logout, getUserInfo };
}
