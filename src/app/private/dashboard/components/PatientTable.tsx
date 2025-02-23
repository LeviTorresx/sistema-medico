"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Eye } from "lucide-react"; 

export default function PatientTable() {
  const patients = useSelector((state: RootState) => state.patients);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Lista de Pacientes</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-500">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Nombre</th>
              <th className="border border-gray-300 p-2">Identificación</th>
              <th className="border border-gray-300 p-2">Ciudad Nacimiento</th>
              <th className="border border-gray-300 p-2">Fecha Nacimiento</th>
              <th className="border border-gray-300 p-2">Edad</th>
              <th className="border border-gray-300 p-2">Escolaridad</th>
              <th className="border border-gray-300 p-2">Estado Civil</th>
              <th className="border border-gray-300 p-2">Dirección</th>
              <th className="border border-gray-300 p-2">Teléfono</th>
              <th className="border border-gray-300 p-2">EPS</th>
              <th className="border border-gray-300 p-2">ARL</th>
              <th className="border border-gray-300 p-2">Acciones</th> 
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{patient.datosPersonales.nombre}</td>
                <td className="border border-gray-300 p-2">{patient.datosPersonales.identificacion}</td>
                <td className="border border-gray-300 p-2">{patient.datosPersonales.ciudadNacimiento}</td>
                <td className="border border-gray-300 p-2">{patient.datosPersonales.fechaNacimiento}</td>
                <td className="border border-gray-300 p-2">{patient.datosPersonales.edad}</td>
                <td className="border border-gray-300 p-2">{patient.datosPersonales.escolaridad}</td>
                <td className="border border-gray-300 p-2">{patient.datosPersonales.estadoCivil}</td>
                <td className="border border-gray-300 p-2">{patient.datosPersonales.direccion}</td>
                <td className="border border-gray-300 p-2">{patient.datosPersonales.telefono}</td>
                <td className="border border-gray-300 p-2">{patient.datosPersonales.eps}</td>
                <td className="border border-gray-300 p-2">{patient.datosPersonales.arl}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    onClick={() => alert(`Ver más sobre ${patient.datosPersonales.nombre}`)} // Acción temporal
                  >
                    <Eye size={16} /> Ver más
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
