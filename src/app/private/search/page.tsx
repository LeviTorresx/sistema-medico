"use client";
import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; // Importar useRouter para redireccionar
import { RootState, AppDispatch } from "../../redux/store";
import PrivateLayout from "../PrivateLayout";
import SearchBar from "./components/SearchBar";
import { fetchPatients, PatientState } from "@/app/redux/slices/patientSlice";
import PatientCard from "./components/PatientCard";
import { Pencil } from "lucide-react";
import Link from "next/link";

export default function Search() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); // Instancia del router para navegación

  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [patient, setPatient] = useState<PatientState | null>(null);
  const [showAddButton, setShowAddButton] = useState(false); // Nuevo estado para mostrar botón

  const {
    data: patients,
    loading,
    error: fetchError,
  } = useSelector((state: RootState) => state.patients);

  useEffect(() => {
    dispatch(fetchPatients()); // Llamar al thunk cuando el componente se monta
  }, [dispatch]);

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
      (p) => p.personalData.identification === query
    );

    if (foundPatient) {
      setPatient(foundPatient); // Guardar paciente encontrado
      setShowAddButton(false); // Ocultar botón si lo encuentra
    } else {
      setPatient(null);
      setShowAddButton(true); // Mostrar botón para agregar paciente
    }

    setQuery(""); // Limpiar búsqueda
  };

  return (
    <PrivateLayout title="Buscar">
      <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
        <h3 className="text-2xl text-blue-900 font-extrabold tracking-wide">
          Buscar paciente por cédula
        </h3>

        <SearchBar
          handleSearch={handleSearch}
          query={query}
          onChange={handleInputChange}
          clearQuery={() => setQuery("")}
          error={error}
        />

        {loading && (
          <p className="text-gray-700 text-lg">Cargando pacientes...</p>
        )}
        {fetchError && <p className="text-red-500 text-lg">{fetchError}</p>}

        {patient ? (
          <div className="flex flex-col">
            <PatientCard personalData={patient.personalData} />
            <Link
              href={`/forms/${patient.personalData.identification}`}
              className="mt-2 px-4 py-2 bg-orange-400 text-white text-xl rounded flex justify-center items-center gap-2"
            >
              <Pencil size={20} />
              Editar
            </Link>
          </div>
        ) : (
          showAddButton && (
            <div className="flex flex-col items-center justify-center bg-red-50 border border-red-400 shadow-lg rounded-xl p-6 w-full max-w-sm">
              <p className="text-red-700 font-semibold text-lg flex items-center gap-2">
                ⚠️ Paciente no encontrado.
              </p>
              <button
                onClick={() => router.push("/private/forms")}
                className="mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:from-green-600 hover:to-green-800 transition-transform transform hover:scale-105 duration-300"
              >
                + Agregar Paciente
              </button>
            </div>
          )
        )}
      </div>
    </PrivateLayout>
  );
}
