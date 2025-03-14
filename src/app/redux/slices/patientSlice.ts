import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface PatientState {
  id: number;
  personalData: PersonalData;
  habits: Habits;
  personalHistory: PersonalHistory;
  familyHistory: FamilyHistory;
  gynecologicalObstetricHistory: GynecologicalObstetricHistory;
  workHistory: WorkHistory;
  evaluation: Evaluation;
}

export interface PersonalData {
  name: string;
  identification: string;
  birthCity: string;
  birthDate: "";
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

export interface GynecologicalObstetricHistory {
  menarche: number; // Edad de la primera menstruación
  cycles: string; // Regularidad del ciclo
  g: number; // Gestaciones
  p: number; // Partos
  a: number; // Abortos
  v: number; // Vivos
  lastMenstrualPeriod: "";
  usesContraception: boolean;
  contraceptionMethod?: string; // Opcional si no usa anticonceptivos
  papSmear: ""; // Fecha del último Papanicolaou
}

 export interface WorkHistory {
  company: string;
  jobTitle: string;
  workDuration: string; // Ejemplo: "5 años", "2 meses"
  risks: WorkRisks;
  workAccident: boolean;
  occupationalDisease: boolean;
}

 export interface WorkRisks {
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

interface PatientsState {
  data: PatientState[];
  loading: boolean;
  error: string | null;
}

const initialState: PatientsState = {
  data: [],
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
    { id, patientData }: { id: number; patientData: Omit<PatientState, "id"> },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/patients/${id}`,
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
