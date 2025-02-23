import { createSlice } from "@reduxjs/toolkit";

interface patientState {
  id: number;
  datosPersonales: {
    nombre: string;
    identificacion: string;
    ciudadNacimiento: string;
    fechaNacimiento: string;
    edad: string;
    escolaridad: string;
    estadoCivil: string;
    direccion: string;
    telefono: string;
    eps: string;
    arl: string;
  };
  habitos: {
    tabaquismo: boolean;
    exfumador: boolean;
    cigarrillosDia: string;
    anosConsumo: string;
    licor: boolean;
    frecuenciaLicor: string;
    sustancias: boolean;
    deporte: boolean;
    frecuenciaDeporte: string;
  };
  antecedentesPersonales: {
    patologicos: string;
    hospitalarios: string;
    quirurgicos: string;
    traumaticos: string;
    medicamentos: string;
    toxicos: string;
    alergicos: string;
    otros: string;
  };
  antecedentesFamiliares: {
    metabolicos: boolean;
    cardiopatia: boolean;
    htaPadre: boolean;
    cancer: boolean;
    otroAntecedente: string;
  };
  antecedentesGinecoObstetricos: {
    menarca: string;
    ciclos: string;
    g: string;
    p: string;
    a: string;
    v: string;
    fum: string;
    planifica: boolean;
    metodoPlanificacion: string;
    citologia: string;
  };
  antecedentesLaborales: {
    empresa: string;
    cargo: string;
    tiempo: string;
    riesgos: {
      fisico: boolean;
      mecanico: boolean;
      ergonomico: boolean;
      psicosocial: boolean;
      biologico: boolean;
    };
    accidenteTrabajo: boolean;
    enfermedadLaboral: boolean;
  };
  evaluacion: {
    diagnosticos: string[];
    recomendaciones: string;
    aptitudLaboral: string;
    restricciones: string;
  };
}

const initialState: patientState[] = [
  {
    id: 1,
    datosPersonales: {
      nombre: "Juan Pérez",
      identificacion: "12345678",
      ciudadNacimiento: "Bogotá",
      fechaNacimiento: "1990-05-15",
      edad: "33",
      escolaridad: "Universitaria",
      estadoCivil: "Casado",
      direccion: "Calle 123 #45-67",
      telefono: "3101234567",
      eps: "Sura",
      arl: "Colpatria",
    },
    habitos: {
      tabaquismo: false,
      exfumador: true,
      cigarrillosDia: "0",
      anosConsumo: "5",
      licor: true,
      frecuenciaLicor: "Ocasional",
      sustancias: false,
      deporte: true,
      frecuenciaDeporte: "3 veces por semana",
    },
    antecedentesPersonales: {
      patologicos: "Hipertensión",
      hospitalarios: "Ninguno",
      quirurgicos: "Apendicectomía",
      traumaticos: "Fractura de tobillo",
      medicamentos: "Losartán",
      toxicos: "Ninguno",
      alergicos: "Polen",
      otros: "",
    },
    antecedentesFamiliares: {
      metabolicos: true,
      cardiopatia: false,
      htaPadre: true,
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
      empresa: "Empresa ABC",
      cargo: "Ingeniero",
      tiempo: "5 años",
      riesgos: {
        fisico: true,
        mecanico: false,
        ergonomico: true,
        psicosocial: false,
        biologico: false,
      },
      accidenteTrabajo: false,
      enfermedadLaboral: false,
    },
    evaluacion: {
      diagnosticos: ["Hipertensión controlada"],
      recomendaciones: "Control médico anual",
      aptitudLaboral: "Apto",
      restricciones: "",
    },
  },
  {
    id: 2,
    datosPersonales: {
      nombre: "María Gómez",
      identificacion: "87654321",
      ciudadNacimiento: "Medellín",
      fechaNacimiento: "1985-10-20",
      edad: "38",
      escolaridad: "Secundaria",
      estadoCivil: "Soltera",
      direccion: "Carrera 10 #20-30",
      telefono: "3157654321",
      eps: "Nueva EPS",
      arl: "Sura",
    },
    habitos: {
      tabaquismo: false,
      exfumador: false,
      cigarrillosDia: "0",
      anosConsumo: "0",
      licor: true,
      frecuenciaLicor: "Frecuente",
      sustancias: false,
      deporte: false,
      frecuenciaDeporte: "",
    },
    antecedentesPersonales: {
      patologicos: "Asma",
      hospitalarios: "Hospitalización por crisis asmática",
      quirurgicos: "Ninguno",
      traumaticos: "Ninguno",
      medicamentos: "Salbutamol",
      toxicos: "Ninguno",
      alergicos: "Ácaros",
      otros: "",
    },
    antecedentesFamiliares: {
      metabolicos: false,
      cardiopatia: false,
      htaPadre: false,
      cancer: true,
      otroAntecedente: "Cáncer de mama en madre",
    },
    antecedentesGinecoObstetricos: {
      menarca: "12",
      ciclos: "Regulares",
      g: "1",
      p: "1",
      a: "0",
      v: "1",
      fum: "2024-01-10",
      planifica: true,
      metodoPlanificacion: "Implante subdérmico",
      citologia: "Normal",
    },
    antecedentesLaborales: {
      empresa: "Panadería La Estrella",
      cargo: "Cajera",
      tiempo: "3 años",
      riesgos: {
        fisico: false,
        mecanico: false,
        ergonomico: false,
        psicosocial: true,
        biologico: false,
      },
      accidenteTrabajo: false,
      enfermedadLaboral: false,
    },
    evaluacion: {
      diagnosticos: ["Asma leve"],
      recomendaciones: "Evitar alérgenos, control con neumólogo",
      aptitudLaboral: "Apto con restricciones",
      restricciones: "Evitar exposición a polvo",
    },
  },
];

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
});

export const {} = patientSlice.actions;
export default patientSlice.reducer;
