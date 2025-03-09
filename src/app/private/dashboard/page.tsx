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
      <div>
        <h1 className="text-2xl text-center">Dashboard</h1>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handleRedirect("/private/search")}
            className="bg-blue-500 text-white mx-2 px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            Buscar paciente
          </button>
        </div>
        <PatientTable />
      </div>
    </PrivateLayout>
  );
}
