"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Trash } from "lucide-react";
import { PatientState, addPatient } from "@/app/redux/slices/patientSlice";
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
import ExamsForms from "./ExamsForms";

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
      medicalExams: [
        {
          dataExam: {
            type: "INGRESO",
            city: "",
            date: "",
          },
          occupationalData: {
            employer: "",
            entry: false,
            exit: false,
            periodic: false,
            name: "",
            identification: "",
            eps: "",
            arl: "",
            pensionFund: "",
            jobTitle: "",
          },
          examsPerformed: {
            osteomuscular: false,
            spirometry: false,
            laboratories: false,
            audiometry: false,
            psychotechnics: false,
            visiometry: false,
            optometry: false,
            others: "",
          },
          workAptitude: {
            entry: {
              withoutRestriction: false,
              withRestriction: "",
            },
            periodic: {
              canContinueWorking: false,
              jobRelocation: "",
            },
            exit: {
              satisfactory: false,
              notSatisfactory: false,
            },
          },
          generalRecommendation: {
            generalRecommendations: "",
            restrictions: "",
          },
        },
      ],
    }
  );

  // Estado para controlar el modal de exámenes
  const [showExamModal, setShowExamModal] = useState(false);

  // Función para agregar un nuevo examen al estado
  const addMedicalExam = () => {
    setFormData((prevData) => ({
      ...prevData,
      medicalExams: [
        ...prevData.medicalExams,
        {
          dataExam: {
            type: "INGRESO",
            city: "",
            date: "",
          },

          occupationalData: {
            employer: "",
            entry: false,
            exit: false,
            periodic: false,
            name: "",
            identification: "",
            eps: "",
            arl: "",
            pensionFund: "",
            jobTitle: "",
          },
          examsPerformed: {
            osteomuscular: false,
            spirometry: false,
            laboratories: false,
            audiometry: false,
            psychotechnics: false,
            visiometry: false,
            optometry: false,
            others: "",
          },
          workAptitude: {
            entry: {
              withoutRestriction: false,
              withRestriction: "",
            },
            periodic: {
              canContinueWorking: false,
              jobRelocation: "",
            },
            exit: {
              satisfactory: false,
              notSatisfactory: false,
            },
          },
          generalRecommendation: {
            generalRecommendations: "",
            restrictions: "",
          },
        },
      ],
    }));
  };

  const removeMedicalExam = (index: number) => {
    setFormData((prevData) => {
      const newMedicalExams = prevData.medicalExams.filter(
        (_, i) => i !== index
      );
      return { ...prevData, medicalExams: newMedicalExams };
    });
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
        [name]: type === "checkbox" ? e.target.checked : value,
      },
      personalHistory: {
        ...prevData.personalHistory,
        [name]: value,
      },
      familyHistory: {
        ...prevData.familyHistory,
        [name]: type === "checkbox" ? e.target.checked : value,
      },
      gynecologicalObstetricHistory: {
        ...prevData.gynecologicalObstetricHistory,
        [name]: type === "checkbox" ? e.target.checked : value,
      },
      workHistory: {
        ...prevData.workHistory,
        [name]: type === "checkbox" ? e.target.checked : value,
      },
      evaluation: {
        ...prevData.evaluation,
        [name]: value,
      },
    }));
  };

  const handleExamChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      medicalExams: prevData.medicalExams.map((exam, i) =>
        i === index
          ? {
              ...exam,
              dataExam: {
                ...exam.dataExam,
                [name]: type === "checkbox" ? e.target.checked : value,
              },
              occupationalData: {
                ...exam.occupationalData,
                [name]: value,
                [name]: type === "checkbox" ? e.target.checked : value,
              },
              examsPerformed: {
                ...exam.examsPerformed,
                [name]: type === "select" ? e.target.select : value,
              },
              generalRecommendation: {
                ...exam.generalRecommendation,
                [name]: value,
              },
              workAptitude: {
                ...exam.workAptitude,
                [name]: type === "checkbox" ? e.target.checked : value,
              },
            }
          : exam
      ),
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
      <div className="flex justify-center p-4">
        <button
          type="button"
          onClick={() => setShowExamModal(true)}
          className="mt-4 py-3 px-6 bg-gradient-to-r justify-center from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Ver Exámenes
        </button>
      </div>

      <form onSubmit={handleSubmit} className="h-[70vh] overflow-y-auto">
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
      {/* Modal para agregar exámenes */}
      {showExamModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg w-8/12 h-4/5 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">
              Agregar Examen Médico
            </h2>

            {/* Lista de exámenes agregados */}
            {formData.medicalExams.map((exam, index) => (
              <div key={index} className="border p-4 mb-2 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <details>
                    <summary>
                      <span>exam {index + 1}</span>
                      <button
                        onClick={() => removeMedicalExam(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash />
                      </button>
                    </summary>
                    {/*formulario para examenes*/}
                    <ExamsForms
                      examData={exam}
                      index={index}
                      handleChange={(e) => handleExamChange(e, index)}
                    />
                  </details>
                </div>
              </div>
            ))}

            {/* Botón para agregar examen */}
            <button
              type="button"
              onClick={addMedicalExam}
              className="mt-4 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Agregar Examen
            </button>

            {/* Botón para cerrar el modal */}
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
