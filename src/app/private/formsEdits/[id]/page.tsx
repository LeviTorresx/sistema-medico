"use client";

import React, { useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientById } from "@/app/redux/slices/patientSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import PrivateLayout from "../../PrivateLayout";
import RegistrationForms from "../../forms/components/RegistrationForms";

interface PageProps {
  params: Promise<{ id: string }>; // params ahora es una promesa
}

export default function Page({ params }: PageProps) {
  const { id } = use(params); // Se usa `use()` para resolver la promesa

  const dispatch = useDispatch<AppDispatch>();

  const { selectedPatient, loading, error } = useSelector(
    (state: RootState) => state.patients
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchPatientById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Cargando paciente...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!selectedPatient) return <p>No se encontró el paciente.</p>;

  return (
    <PrivateLayout>
      <div className="flex">
        <RegistrationForms existingData={selectedPatient} />
      </div>
    </PrivateLayout>
  );
}
