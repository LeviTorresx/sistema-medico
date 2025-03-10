"use client";
import React from "react";
import PatientTable from "./components/patientTable/PatientTable";
import PrivateLayout from "../PrivateLayout";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleRedirect = (route: string) => {
    router.push(route);
  };

  return (
    <PrivateLayout>
      <div className="mt-8 bg-white shadow-md rounded-xl p-6">
        <PatientTable />
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handleRedirect("/private/search")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform"
        >
          Buscar paciente
        </button>
      </div>
    </PrivateLayout>
  );
}
