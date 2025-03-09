import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface PatientState {
  id: number;
  personalData: {
    name: string;
    identification: string;
    birthCity: string;
    birthDate: string;
    age: string;
    education: string;
    maritalStatus: string;
    address: string;
    phone: string;
    healthInsurance: string;
    occupationalRiskInsurance: string;
  };
  habits: {
    smoking: boolean;
    exSmoker: boolean;
    cigarettesPerDay: string;
    yearsOfConsumption: string;
    alcohol: boolean;
    alcoholFrequency: string;
    substances: boolean;
    sports: boolean;
    sportsFrequency: string;
  };
  personalHistory: {
    pathological: string;
    hospitalizations: string;
    surgeries: string;
    traumatic: string;
    medications: string;
    toxic: string;
    allergies: string;
    others: string;
  };
  familyHistory: {
    metabolic: boolean;
    heartDisease: boolean;
    fatherHypertension: boolean;
    cancer: boolean;
    otherHistory: string;
  };
  gynecologicalObstetricHistory: {
    menarche: string;
    cycles: string;
    g: string;
    p: string;
    a: string;
    v: string;
    lastMenstrualPeriod: string;
    usesContraception: boolean;
    contraceptionMethod: string;
    papSmear: string;
  };
  workHistory: {
    company: string;
    jobTitle: string;
    workDuration: string;
    risks: {
      physical: boolean;
      mechanical: boolean;
      ergonomic: boolean;
      psychosocial: boolean;
      biological: boolean;
    };
    workAccident: boolean;
    occupationalDisease: boolean;
  };
  evaluation: {
    diagnoses: string[];
    recommendations: string;
    workAptitude: string;
    restrictions: string;
  };
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
        state.error = typeof action.payload === "string" ? action.payload : "Error fetching patients";
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
        state.error = typeof action.payload === "string" ? action.payload : "Error adding patient";
      });
  },
});

export default patientSlice.reducer;
