"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { fetchPatients } from "../../../../redux/slices/patientSlice";
import { Eye } from "lucide-react";

export default function PatientTable() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: patients,
    loading,
    error,
  } = useSelector((state: RootState) => state.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  if (loading)
    return (
      <p className="text-center text-lg text-gray-700">Cargando pacientes...</p>
    );
  if (error)
    return (
      <p className="text-center text-red-500">
        Error al cargar pacientes: {error}
      </p>
    );

  const handleId = (patient: string) => {
    console.log(`Ver más sobre ${patient}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Lista de Pacientes
      </h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Identificación</th>
              <th className="p-3 text-left">Ciudad Nacimiento</th>
              <th className="p-3 text-left">Fecha Nacimiento</th>
              <th className="p-3 text-left">Edad</th>
              <th className="p-3 text-left">Escolaridad</th>
              <th className="p-3 text-left">Estado Civil</th>
              <th className="p-3 text-left">Dirección</th>
              <th className="p-3 text-left">Teléfono</th>
              <th className="p-3 text-left">EPS</th>
              <th className="p-3 text-left">ARL</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {patients.map((patient, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3">{patient.personalData.name}</td>
                <td className="p-3">{patient.personalData.identification}</td>
                <td className="p-3">{patient.personalData.birthCity}</td>
                <td className="p-3">{patient.personalData.birthDate}</td>
                <td className="p-3">{patient.personalData.age}</td>
                <td className="p-3">{patient.personalData.education}</td>
                <td className="p-3">{patient.personalData.maritalStatus}</td>
                <td className="p-3">{patient.personalData.address}</td>
                <td className="p-3">{patient.personalData.phone}</td>
                <td className="p-3">{patient.personalData.healthInsurance}</td>
                <td className="p-3">
                  {patient.personalData.occupationalRiskInsurance}
                </td>
                <td className="p-3">
                  <button
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    onClick={()=>handleId(patient.personalData.name)}
                  >
                    <Eye className="w-5 h-5" /> <span>Ver más</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
