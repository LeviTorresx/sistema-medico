"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { PatientState, editPatient } from "@/app/redux/slices/patientSlice";
import Section from "./Section";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient?: PatientState | null;
}

export default function PatientModal({ isOpen, onClose, patient }: ModalProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<PatientState>(
    patient || {
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
    }
  );

  useEffect(() => {
    if (patient) {
      setFormData(patient);
    }
  }, [patient]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, dataset, type, checked } = e.target;
    const section = dataset.section as keyof typeof formData;

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(typeof prev[section] === "object" ? prev[section] : {}),
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (patient) {
        await dispatch(
          editPatient({ id: patient.id, patientData: formData })
        ).unwrap();
        alert("Paciente actualizado correctamente");
      }
      onClose();
    } catch (error) {
      console.error("Error al guardar paciente:", error);
      alert("Hubo un error al guardar el paciente");
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-3/4 max-w-4xl">
        <h2 className="text-xl font-bold mb-4">
          {patient ? "Editar Paciente" : "Agregar Paciente"}
        </h2>
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
                "allergic",
                "others",
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
                "fum",
                "contraception",
                "contraceptionMethod",
                "cytology",
              ]}
              formData={formData}
              handleChange={handleChange}
              sectionKey="gynecologicalObstetricHistory"
              getSectionStatus={getSectionStatus}
            />
            <Section
              title="V: Family History"
              fields={[
                "metabolic",
                "cardiopathy",
                "htaFather",
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
    </div>
  );
}
