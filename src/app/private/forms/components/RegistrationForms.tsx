"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Section from "./Section";
import { PatientState, addPatient } from "@/app/redux/slices/patientSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
export default function RegistrationForms() {
  // State to store form data
  const [formData, setFormData] = useState<PatientState>({
    id: 0,
    personalData: {
      name: "",
      identification: "",
      birthCity: "",
      birthDate: "",
      age: "",
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
      cigarettesPerDay: "",
      yearsOfConsumption: "",
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
      menarche: "",
      cycles: "",
      g: "",
      p: "",
      a: "",
      v: "",
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
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, dataset, type, checked } = e.target;
    const section = dataset.section as keyof typeof formData; // Section where the field is located

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(typeof prev[section] === "object" ? prev[section] : {}), // Keep the rest of the values within the section
        [name]: type === "checkbox" ? checked : value, // Use checked for checkbox, value otherwise
      },
    }));
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(addPatient(formData)).unwrap();
      alert("Paciente agregado correctamente");
      window.location.href = "/private/dashboard";
    } catch (error) {
      console.error("Error al agregar paciente:", error);
      alert("Hubo un error al agregar el paciente");
    }
  };

  // Function to determine section status
  const getSectionStatus = (
    sectionKey: keyof typeof formData,
    fields: (keyof (typeof formData)[typeof sectionKey])[]
  ): string => {
    const section = formData[sectionKey];
    const values = fields.map((field) => section[field] as string | null);

    if (values.every((value) => value === "" || value === null))
      return "bg-red-200";
    if (values.some((value) => value === "" || value === null))
      return "bg-orange-200";

    return "bg-green-200";
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 border rounded-lg shadow-lg bg-white text-slate-900">
      <h2 className="text-2xl font-bold text-center mb-2">Form</h2>

      <form onSubmit={handleSubmit} className="h-[70vh] overflow-y-auto">
        <div className="flex-1 overflow-y-auto p-2">
          {/* Sections */}
          <Section
            title="I: Personal Data"
            fields={[
              "name",
              "identification",
              "birthCity",
              "birthDate",
              "age",
              "education",
              "maritalStatus",
              "address",
              "phone",
              "healthInsurance",
              "occupationalRiskInsurance",
            ]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="personalData"
            getSectionStatus={getSectionStatus}
          />
          <Section
            title="II: Habits"
            fields={[
              "smoking",
              "exSmoker",
              "cigarettesPerDay",
              "yearsOfConsumption",
              "alcohol",
              "alcoholFrequency",
              "substances",
              "sports",
              "sportsFrequency",
            ]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="habits"
            getSectionStatus={getSectionStatus}
          />
          <Section
            title="III: Personal History"
            fields={[
              "pathological",
              "hospitalizations",
              "surgeries",
              "trauma",
              "medications",
              "toxic",
              "allergies",
              "other",
            ]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="personalHistory"
            getSectionStatus={getSectionStatus}
          />
          <Section
            title="IV: Gynecological-Obstetric History"
            fields={[
              "menarche",
              "cycles",
              "g",
              "p",
              "a",
              "v",
              "lastMenstrualPeriod",
              "usesContraception",
              "usesContraception",
              "papSmear",
            ]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="gynecologicalObstetricHistory"
            getSectionStatus={getSectionStatus}
          />
          <Section
            title="V: Family History"
            fields={[
              "metabolicDiseases",
              "heartDisease",
              "hypertensionFather",
              "cancer",
              "otherHistory",
            ]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="familyHistory"
            getSectionStatus={getSectionStatus}
          />
          <Section
            title="IX: Recommendations"
            fields={["recommendations"]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="evaluation"
            getSectionStatus={getSectionStatus}
          />
          <Section
            title="X: Work Aptitude"
            fields={["workAptitude"]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="evaluation"
            getSectionStatus={getSectionStatus}
          />
          <Section
            title="XI: Restrictions"
            fields={["restrictions"]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="evaluation"
            getSectionStatus={getSectionStatus}
          />
        </div>
        <div className="p-4 bg-white border-t shadow-lg sticky bottom-0">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Guardar Datos
          </button>
        </div>
      </form>
    </div>
  );
}
