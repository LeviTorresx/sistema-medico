"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { fetchPatients } from "../../../../redux/slices/patientSlice";
import { Eye } from "lucide-react";
import "./patientTable.css";

export default function PatientTable() {

  const dispatch = useDispatch<AppDispatch>();
  
  const { data: patients, loading, error } = useSelector(
    (state: RootState) => state.patients
  );

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  if (loading) return <p>Cargando pacientes...</p>;
  if (error) return <p>Error al cargar pacientes: {error}</p>;

  return (
    <div className="container">
      <h2 className="titleTable">Lista de Pacientes</h2>
      <div className="containerTableInfo">
        <table>
          <thead className="encabezadoTable">
            <tr className="cleanBox">
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
            </tr>
          </thead>
          <tbody className="bodyTable">
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.personalData.name}</td>
                <td>{patient.personalData.identification}</td>
                <td>{patient.personalData.birthCity}</td>
                <td>{patient.personalData.birthDate}</td>
                <td>{patient.personalData.age}</td>
                <td>{patient.personalData.education}</td>
                <td>{patient.personalData.maritalStatus}</td>
                <td>{patient.personalData.address}</td>
                <td>{patient.personalData.phone}</td>
                <td>{patient.personalData.healthInsurance}</td>
                <td>{patient.personalData.occupationalRiskInsurance}</td>
                <td>
                  <button
                    className="botonVer"
                    onClick={() =>
                      alert(`Ver más sobre ${patient.personalData.name}`)
                    }
                  >
                    <Eye className="icon" /> <p>Ver más</p>
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
