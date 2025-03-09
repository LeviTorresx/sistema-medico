"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { Eye } from "lucide-react";
import "./patientTable.css";

export default function PatientTable() {
  const patients = useSelector((state: RootState) => state.patients);

  return (
    <div className="container">
      <h2 className="titleTable">Lista de Pacientes</h2>
      <div className="containerTableInfo">
        <table>
          <thead className="encabezadoTable">
            <tr>
              <th>Nombre</th>
              <th>Identificación</th>
              <th>Ciudad Nacimiento</th>
              <th>Fecha Nacimiento</th>
              <th>Edad</th>
              <th>Escolaridad</th>
              <th>Estado Civil</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>EPS</th>
              <th>ARL</th>
              <th>Acciones</th>
              <div className="cleanBox"></div>
            </tr>
          </thead>
          <tbody className="bodyTable">
            {patients.map((patient, index) => (
              <tr key={index} className="">
                <td className="">{patient.datosPersonales.nombre}</td>
                <td className="">{patient.datosPersonales.identificacion}</td>
                <td className="">{patient.datosPersonales.ciudadNacimiento}</td>
                <td className="">{patient.datosPersonales.fechaNacimiento}</td>
                <td className="">{patient.datosPersonales.edad}</td>
                <td className="">{patient.datosPersonales.escolaridad}</td>
                <td className="">{patient.datosPersonales.estadoCivil}</td>
                <td className="">{patient.datosPersonales.direccion}</td>
                <td className="">{patient.datosPersonales.telefono}</td>
                <td className="">{patient.datosPersonales.eps}</td>
                <td className="">{patient.datosPersonales.arl}</td>
                <td className="">
                  <button
                    className="botonVer"
                    onClick={() =>
                      alert(`Ver más sobre ${patient.datosPersonales.nombre}`)
                    } // Acción temporal
                  >
                    <Eye className="icon" /> <p>Ver mas</p>
                    <div></div>
                  </button>
                </td>
                <div className="cleanBox"></div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}