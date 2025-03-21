import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface PatientState {
  id: number;
  idPatient: string;
  personalData: PersonalData;
  habits: Habits;
  personalHistory: PersonalHistory;
  familyHistory: FamilyHistory;
  gynecoObstetricHistory: GynecoObstetricHistory;
  workHistory: WorkHistory;
  evaluation: Evaluation;
  medicalExams: MedicalExam[];
}

export interface PersonalData {
  name: string;
  identification: string;
  birthCity: string;
  birthDate: string;
  age: number;
  education: string;
  maritalStatus: string;
  address: string;
  phone: string;
  healthInsurance: string;
  occupationalRiskInsurance: string;
}

export interface Habits {
  smoking: boolean;
  exSmoker: boolean;
  cigarettesPerDay?: number; // Opcional si nunca ha fumado
  yearsOfConsumption?: number; // Opcional si nunca ha fumado
  alcohol: boolean;
  alcoholFrequency?: string; // Ejemplo: "Diario", "Ocasional", "Nunca"
  substances: boolean;
  sports: boolean;
  sportsFrequency?: string; // Ejemplo: "3 veces por semana", opcional si no practica deportes
}

export interface PersonalHistory {
  pathological: string;
  hospitalizations: string;
  surgeries: string;
  traumatic: string;
  medications: string;
  toxic: string;
  allergies: string;
  others: string;
}

export interface FamilyHistory {
  metabolic: boolean;
  heartDisease: boolean;
  fatherHypertension: boolean;
  cancer: boolean;
  otherHistory: string;
}

export interface GynecoObstetricHistory {
  menarche: number; // Edad de la primera menstruación
  cycles: string; // Regularidad del ciclo
  g: number; // Gestaciones
  p: number; // Partos
  a: number; // Abortos
  v: number; // Vivos
  lastMenstrualPeriod: "";
  usesContraception: boolean;
  contraceptionMethod?: string;
  papSmear: string;
}

export interface WorkHistory {
  company: string;
  jobTitle: string;
  workDuration: string;
  risks: Risks;
  workAccident: boolean;
  occupationalDisease: boolean;
}

export interface Risks {
  physical: boolean;
  mechanical: boolean;
  ergonomic: boolean;
  psychosocial: boolean;
  biological: boolean;
}

export interface Evaluation {
  diagnoses: string[];
  recommendations: string;
  workAptitude: string;
  restrictions: string;
}

// Interfaz para los exámenes médicos

export interface MedicalExam {
  dataExam: DataExam;
  occupationalData: OccupationalData;
  examsPerformed: ExamsPerformed;
  workAptitude: WorkAptitude;
  generalRecommendation: GeneralRecommendation;
}

export interface DataExam {
  type: "INGRESO" | "RETIRO" | "PERIÓDICO" | "ESPECIAL"; // Tipo de examen médico
  date: string; // Fecha del examen
  city: string; // Ciudad donde se realiza
}

export interface OccupationalData {
  employer: string;
  entry: boolean;
  exitStatus: boolean;
  periodic: boolean;
  name: string;
  identification: string;
  eps: string;
  arl: string;
  pensionFund: string;
  jobTitle: string;
}

export interface ExamsPerformed {
  osteomuscular: boolean;
  spirometry: boolean;
  laboratories: boolean;
  audiometry: boolean;
  psychotechnics: boolean;
  visiometry: boolean;
  optometry: boolean;
  others: string;
}

export interface WorkAptitude {
  entry: boolean;
  periodic: boolean;
  exitStatus: boolean;
}

export interface GeneralRecommendation {
  generalRecommendations: string;
  restrictions: string;
}

interface PatientsState {
  data: PatientState[];
  selectedPatient: PatientState | null; // Agregar esta propiedad para evitar el error
  loading: boolean;
  error: string | null;
}

const initialState: PatientsState = {
  data: [],
  selectedPatient: null, // Agregar esta propiedad para evitar el error
  loading: false,
  error: null,
};

export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/patients/getAll"
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchPatientById = createAsyncThunk(
  "patients/fetchPatientById",
  async (idPatient: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/patients/${idPatient}`
      );
      return response.data; // Devuelve el paciente obtenido
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const addPatient = createAsyncThunk(
  "patients/addPatient",
  async (patientData: Omit<PatientState, "id">, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/patients/add_patient",
        patientData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Devuelve el paciente agregado
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const editPatient = createAsyncThunk(
  "patients/editPatient",
  async (
    {
      idPatient,
      patientData,
    }: { idPatient: string; patientData: Omit<PatientState, "id"> },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/patients/edits/${idPatient}`,
        patientData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Devuelve el paciente actualizado
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch patients
      .addCase(fetchPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Error fetching patients";
      })

      //Fetch patientsByIdPatient
      .addCase(fetchPatientById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatientById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPatient = action.payload; // Guardar el paciente obtenido
      })
      .addCase(fetchPatientById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Error fetching patient";
      })

      // Agregar casos para el thunk addPatient
      .addCase(addPatient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); // Agregar paciente al estado
      })
      .addCase(addPatient.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Error adding patient";
      })
      // Agregar casos para el thunk editPatient
      .addCase(editPatient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editPatient.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload; // Actualizar paciente en el estado
        }
      })
      .addCase(editPatient.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Error updating patient";
      });
  },
});

export default patientSlice.reducer;
