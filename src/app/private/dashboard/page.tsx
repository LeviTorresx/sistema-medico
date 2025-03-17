"use client";
import React from "react";
import PatientTable from "./components/patientTable/PatientTable";
import PrivateLayout from "../PrivateLayout";
import { useRouter } from "next/navigation";
import {ZoomIn} from "lucide-react"

export default function Dashboard() {
  const router = useRouter();

  const handleRedirect = (route: string) => {
    router.push(route);
  };

  return (
    <PrivateLayout>
      <div className="flex flex-col items-center space-y-6 mt-10">
         {/* Botón */}
         <button
          onClick={() => handleRedirect("/private/search")}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform text-lg font-medium"
        >
          <ZoomIn className="w-5 h-5" /> Buscar Paciente
        </button>
        {/* Contenedor principal con sombra y bordes redondeados */}
        <div className="w-full bg-white shadow-lg rounded-2xl p-8">
          <PatientTable />
        </div>
      </div>
    </PrivateLayout>
  );
}
