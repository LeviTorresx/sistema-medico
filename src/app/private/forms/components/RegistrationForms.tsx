"use client";
import { FormEvent, useState, ChangeEvent } from "react";
import Section from "./Section";
export default function RegistrationForms() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    datosPersonales: {
      nombre: "",
      identificacion: "",
      ciudadNacimiento: "",
      fechaNacimiento: "",
      edad: "",
      escolaridad: "",
      estadoCivil: "",
      direccion: "",
      telefono: "",
      eps: "",
      arl: "",
    },
    habitos: {
      tabaquismo: false,
      exfumador: false,
      cigarrillosDia: "",
      anosConsumo: "",
      licor: false,
      frecuenciaLicor: "",
      sustancias: false,
      deporte: false,
      frecuenciaDeporte: "",
    },
    antecedentesPersonales: {
      patologicos: "",
      hospitalarios: "",
      quirurgicos: "",
      traumaticos: "",
      medicamentos: "",
      toxicos: "",
      alergicos: "",
      otros: "",
    },
    antecedentesFamiliares: {
      metabolicos: false,
      cardiopatia: false,
      htaPadre: false,
      cancer: false,
      otroAntecedente: "",
    },

    antecedentesGinecoObstetricos: {
      menarca: "",
      ciclos: "",
      g: "",
      p: "",
      a: "",
      v: "",
      fum: "",
      planifica: false,
      metodoPlanificacion: "",
      citologia: "",
    },
    antecedentesLaborales: {
      empresa: "",
      cargo: "",
      tiempo: "",
      riesgos: {
        fisico: false,
        mecanico: false,
        ergonomico: false,
        psicosocial: false,
        biologico: false,
      },
      accidenteTrabajo: false,
      enfermedadLaboral: false,
    },
    evaluacion: {
      diagnosticos: [],
      recomendaciones: "",
      aptitudLaboral: "",
      restricciones: "",
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, dataset, type, checked } = e.target;
    const section = dataset.section as keyof typeof formData; // Sección donde está el campo

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section], // Mantiene el resto de los valores dentro de la sección
        [name]: type === "checkbox" ? checked : value, // Si es checkbox usa checked, si no usa value
      },
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  // Función que determina el estado de una sección
  const getSectionStatus = (
    sectionKey: keyof typeof formData,
    fields: (keyof (typeof formData)[typeof sectionKey])[]
  ): string => {
    // 💡 Asegurar que TypeScript reconoce que retorna un string
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
      <h2 className="text-2xl font-bold text-center mb-2">Formulario</h2>

      <form onSubmit={handleSubmit} className=" h-[70vh] overflow-y-auto">
        <div className="flex-1 overflow-y-auto p-2">
          {/* Sección 1 */}
          <Section
            title="I : Datos Personales"
            fields={[
              "nombre",
              "identificacion",
              "ciudadNacimiento",
              "fechaNacimiento",
              "edad",
              "escolaridad",
              "estadoCivil",
              "direccion",
              "telefono",
              "eps",
              "arl",
            ]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="datosPersonales"
            getSectionStatus={getSectionStatus}
          />

          {/* Sección 2 */}
          <Section
            title="II : Habitos"
            fields={[
              "tabaquismo",
              "exfumador",
              "cigarrillosDia",
              "anosConsumo",
              "licor",
              "frecuenciaLicor",
              "sustancias",
              "deporte",
              "frecuenciaDeporte",
            ]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="habitos"
            getSectionStatus={getSectionStatus}
          />

          {/* Sección 3 */}
          <Section
            title="III : Antedecentes Personales"
            fields={[
              "patologicos",
              "hospitalarios",
              "quirurgicos",
              "traumaticos",
              "medicamentos",
              "toxicos",
              "alergicos",
              "otros",
            ]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="antecedentesPersonales"
            getSectionStatus={getSectionStatus}
          />

          {/* Sección 4 para mujeres */}

          <Section
            title="IV : Antecedentes Gineco-Obstetricos"
            fields={[
              "menarca",
              "ciclos",
              "g",
              "p",
              "a",
              "v",
              "fum",
              "planifica",
              "metodoPlanificacion",
              "citologia",
            ]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="antecedentesGinecoObstetricos"
            getSectionStatus={getSectionStatus}
          />
          {/* Sección 5 */}
          <Section
            title="V : Antecedentes Familiares"
            fields={[
              "metabolicos",
              "cardiopatia",
              "htaPadre",
              "cancer",
              "otroAntecedente",
            ]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="antecedentesFamiliares"
            getSectionStatus={getSectionStatus}
          />

          <details className="mb-2 border-b pb-2">
            <summary className="cursor-pointer text-lg font-medium bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
              VI : Informacion ocupacional
            </summary>
            <div className="p-3"></div>
          </details>

          <details className="mb-2 border-b pb-2">
            <summary className="cursor-pointer text-lg font-medium bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
              VII : Examen fisico
            </summary>
            <div></div>
          </details>

          <details className="mb-2 border-b pb-2">
            <summary className="cursor-pointer text-lg font-medium bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
              VIII : Diagnosticos
            </summary>
            <div className="p-3"></div>
          </details>

          {/* Sección 9 */}
          <Section
            title="IX : Recomendaciones"
            fields={["recomendaciones"]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="evaluacion"
            getSectionStatus={getSectionStatus}
          />

          {/* Sección 10 */}
          <Section
            title="X : Aptitud Laboral"
            fields={["aptitudLaboral"]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="evaluacion"
            getSectionStatus={getSectionStatus}
          />

          {/* Sección 11 */}
          <Section
            title="XI : Restricciones"
            fields={["restricciones"]}
            formData={formData}
            handleChange={handleChange}
            sectionKey="evaluacion"
            getSectionStatus={getSectionStatus}
          />
        </div>

        {/* Botón Enviar */}
        <div className="p-4 bg-white border-t shadow-lg sticky bottom-0">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
