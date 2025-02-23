"use client";
import { useSelector } from "react-redux";
import PrivateLayout from "../PrivateLayout";
import SearchBar from "./components/SearchBar";
import { FormEvent, useState, ChangeEvent } from "react";
import { RootState } from "../../redux/store";

export default function Search() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [patient, setPatient] = useState<any | null>(null);

  const patients = useSelector((state: RootState) => state.patients);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setQuery(value);
      setError(""); // Limpiar error mientras escribe
    }
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.length < 8) {
      setError("Debe contener al menos 8 caracteres.");
      return;
    }

    setError(""); // Limpiar error si pasa la validación

    const foundPatient = patients.find(
      (p) => p.datosPersonales.identificacion === query
    );

    if (foundPatient) {
      setPatient(foundPatient); // Guardar paciente encontrado
      alert(`Paciente encontrado: ${foundPatient.datosPersonales.nombre}`);
    } else {
      setPatient(null);
      alert(`Paciente no encontrado con cédula: ${query}`);
    }

    setQuery(""); // Limpiar búsqueda
  };

  return (
    <PrivateLayout title="Buscar">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8">
        <h3 className="text-blue-900 font-bold text-lg">
          Buscar paciente por cédula
        </h3>
        <SearchBar
          handleSearch={handleSearch}
          query={query}
          onChange={handleInputChange}
          clearQuery={() => setQuery("")}
          error={error}
        />
        {patient && (
          <div>
            <h4 className="text-blue-900 font-bold text-lg">
              Información del paciente
            </h4>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-semibold">Nombre:</span>{" "}
                {patient.datosPersonales.nombre}
              </p>
              <p>
                <span className="font-semibold">Identificación:</span>{" "}
                {patient.datosPersonales.identificacion}
              </p>
              <p>
                <span className="font-semibold">Ciudad Nacimiento:</span>{" "}
                {patient.datosPersonales.ciudadNacimiento}
              </p>
              <p>
                <span className="font-semibold">Fecha Nacimiento:</span>{" "}
                {patient.datosPersonales.fechaNacimiento}
              </p>
              <p>
                <span className="font-semibold">Edad:</span>{" "}
                {patient.datosPersonales.edad}
              </p>
              <p>
                <span className="font-semibold">Escolaridad:</span>{" "}
                {patient.datosPersonales.escolaridad}
              </p>
              <p>
                <span className="font-semibold">Estado Civil:</span>{" "}
                {patient.datosPersonales.estadoCivil}
              </p>
              <p>
                <span className="font-semibold">Dirección:</span>{" "}
                {patient.datosPersonales.direccion}
              </p>
              <p>
                <span className="font-semibold">Teléfono:</span>{" "}
                {patient.datosPersonales.telefono}
              </p>
              <p>
                <span className="font-semibold">EPS:</span>{" "}
                {patient.datosPersonales.eps}
              </p>
              <p>
                <span className="font-semibold">ARL:</span>{" "}
                {patient.datosPersonales.arl}
              </p>
            </div>
          </div>
        )}
      </div>
    </PrivateLayout>
  );
}
