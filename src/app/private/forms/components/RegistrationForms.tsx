"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  MedicalExam,
  PatientState,
  addPatient,
} from "@/app/redux/slices/patientSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { useRouter } from "next/navigation"; // Reemplazo de window.location
import PersonalDataForm from "./registrationComponents/PersonalDataForm";
import PersonalHistoryForm from "./registrationComponents/PersonalHistoryForm";
import FamilyHistoryForm from "./registrationComponents/FamilyHistoryForm";
import GynecologicalObstetricHistoryForm from "./registrationComponents/GynecologicalObstetricHistoryForm";
import WorkHistoryForm from "./registrationComponents/WorkHistoryForm";
import EvaluationForm from "./registrationComponents/EvaluationForm";
import HabitsForm from "./registrationComponents/HabitsForms";
import ExamForms from "./ExamsForm";

interface RegistrationFormsProps {
  existingData?: PatientState;
}

export default function RegistrationForms({
  existingData,
}: RegistrationFormsProps) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); // Manejo de navegación

  const [formData, setFormData] = useState<PatientState>(
    existingData || {
      id: 0,
      personalData: {
        name: "",
        identification: "",
        birthCity: "",
        birthDate: "", // Cambiado a string para evitar conflictos
        age: 0,
        education: "",
        maritalStatus: "",
        address: "",
        phone: "",
        healthInsurance: "",
        occupationalRiskInsurance: "",
      },
      habits: {
        smoking: false,
        exSmoker: false,
        cigarettesPerDay: 0,
        yearsOfConsumption: 0,
        alcohol: false,
        alcoholFrequency: "",
        substances: false,
        sports: false,
        sportsFrequency: "",
      },
      personalHistory: {
        pathological: "",
        hospitalizations: "",
        surgeries: "",
        traumatic: "",
        medications: "",
        toxic: "",
        allergies: "",
        others: "",
      },
      familyHistory: {
        metabolic: false,
        heartDisease: false,
        fatherHypertension: false,
        cancer: false,
        otherHistory: "",
      },
      gynecologicalObstetricHistory: {
        menarche: 0,
        cycles: "",
        g: 0,
        p: 0,
        a: 0,
        v: 0,
        lastMenstrualPeriod: "",
        usesContraception: false,
        contraceptionMethod: "",
        papSmear: "",
      },
      workHistory: {
        company: "",
        jobTitle: "",
        workDuration: "",
        risks: {
          physical: false,
          mechanical: false,
          ergonomic: false,
          psychosocial: false,
          biological: false,
        },
        workAccident: false,
        occupationalDisease: false,
      },
      evaluation: {
        diagnoses: [],
        recommendations: "",
        workAptitude: "",
        restrictions: "",
      },
      medicalExams: [],
    }
  );

  // Estado para controlar el modal de exámenes
  const [showExamModal, setShowExamModal] = useState(false);

  // Función para agregar un nuevo examen al estado
  const handleAddExam = (examData: MedicalExam) => {
    setFormData((prevData) => ({
      ...prevData,
      medicalExams: [...prevData.medicalExams, examData],
    }));
    setShowExamModal(false); // Cerrar el modal después de agregar el examen
  };

  // Manejo de cambios en los inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      personalData: {
        ...prevData.personalData,
        [name]: value,
      },
      habits: {
        ...prevData.habits,
        [name]: value,
        [name]: type === "checkbox" ? e.target.checked : value,
      },
      personalHistory: {
        ...prevData.personalHistory,
        [name]: value,
      },
      familyHistory: {
        ...prevData.familyHistory,
        [name]: value,
        [name]: type === "checkbox" ? e.target.checked : value,
      },
      gynecologicalObstetricHistory: {
        ...prevData.gynecologicalObstetricHistory,
        [name]: value,
        [name]: type === "checkbox" ? e.target.checked : value,
      },
      workHistory: {
        ...prevData.workHistory,
        [name]: value,
        [name]: type === "checkbox" ? e.target.checked : value,
      },
      evaluation: {
        ...prevData.evaluation,
        [name]: value,
      },
    }));
  };

  // Función para determinar el color de fondo según los datos de un formulario
  const getBackgroundColor = (formSection: object) => {
    const values = Object.values(formSection);

    const allFieldsEmpty = values.every(
      (value) =>
        value === "" || value === 0 || value === null || value === undefined
    );

    const allFieldsFilled = values.every(
      (value) =>
        value !== "" && value !== 0 && value !== null && value !== undefined
    );

    if (allFieldsEmpty) return "bg-red-100 text-red-600"; // Rojo si todos están vacíos
    if (allFieldsFilled) return "bg-green-100 text-green-600"; // Verde si todos están llenos
    return "bg-orange-100 text-orange-600"; // Naranja si hay mezcla de vacíos y llenos
  };

  // funciones para el uso de diagnósticos
  const handleDiagnosisChange = (index: number, value: string) => {
    setFormData((prevData) => {
      const newDiagnoses = [...prevData.evaluation.diagnoses];
      newDiagnoses[index] = value;
      return {
        ...prevData,
        evaluation: { ...prevData.evaluation, diagnoses: newDiagnoses },
      };
    });
  };

  const addDiagnosis = () => {
    setFormData((prevData) => ({
      ...prevData,
      evaluation: {
        ...prevData.evaluation,
        diagnoses: [...prevData.evaluation.diagnoses, ""],
      },
    }));
  };

  const removeDiagnosis = (index: number) => {
    setFormData((prevData) => {
      const newDiagnoses = prevData.evaluation.diagnoses.filter(
        (_, i) => i !== index
      );
      return {
        ...prevData,
        evaluation: { ...prevData.evaluation, diagnoses: newDiagnoses },
      };
    });
  };

  // Manejo de envío de formulario

  // Función para actualizar datos del paciente
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (existingData) {
        // Si ya existe, actualizar
        // await dispatch(updatePatient(formData)).unwrap();
        //alert("Paciente actualizado correctamente");
      } else {
        // Si es nuevo, agregar
        await dispatch(addPatient(formData)).unwrap();
        alert("Paciente agregado correctamente");
      }
      router.push("/private/dashboard");
    } catch (error) {
      console.error("Error al guardar paciente:", error);
      alert("Hubo un error al guardar los datos");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 border rounded-lg shadow-lg bg-slate-100 text-slate-900">
      <h2 className="text-2xl font-bold text-center mb-2">
        Consulta de usuario
      </h2>

      <form onSubmit={handleSubmit} className="h-[80vh] overflow-y-auto">
        <div className="flex flex-col gap-2 items-center overflow-y-auto p-2 ">
          <PersonalDataForm
            formData={formData}
            handleChange={handleChange}
            bgColor={getBackgroundColor(formData.personalData)}
          />
          <HabitsForm
            formData={formData}
            handleChange={handleChange}
            bgColor={getBackgroundColor(formData.habits)}
          />
          <PersonalHistoryForm
            formData={formData}
            handleChange={handleChange}
            bgColor={getBackgroundColor(formData.personalHistory)}
          />
          <FamilyHistoryForm
            formData={formData}
            handleChange={handleChange}
            bgColor={getBackgroundColor(formData.familyHistory)}
          />
          <GynecologicalObstetricHistoryForm
            formData={formData}
            handleChange={handleChange}
            bgColor={getBackgroundColor(formData.gynecologicalObstetricHistory)}
          />
          <WorkHistoryForm
            formData={formData}
            handleChange={handleChange}
            bgColor={getBackgroundColor(formData.workHistory)}
          />
          <EvaluationForm
            formData={formData}
            handleChange={handleChange}
            handleDiagnosisChange={handleDiagnosisChange}
            addDiagnosis={addDiagnosis}
            removeDiagnosis={removeDiagnosis}
            bgColor={getBackgroundColor(formData.evaluation)}
          />

          {/* Botón para abrir el modal de exámenes */}
          <button
            type="button"
            onClick={() => setShowExamModal(true)}
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Ver exámenes
          </button>
        </div>
        <div className="p-4 bg-white border-t shadow-lg sticky bottom-0 rounded-lg">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Guardar Datos
          </button>
        </div>
      </form>
      {/* Modal para agregar exámenes */}
      {showExamModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-8/12">
            <h3 className="text-xl font-semibold mb-4">Agregar Examen</h3>
            <ExamForms onSave={handleAddExam} />
            <button
              onClick={() => setShowExamModal(false)}
              className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
