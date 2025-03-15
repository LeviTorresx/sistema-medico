import { MedicalExam } from "@/app/redux/slices/patientSlice";

interface ExamFormsProps {
  onSave: (examData: MedicalExam) => void;
}

export type ExamType = "INGRESO" | "RETIRO" | "PERIÓDICO" | "ESPECIAL";

export default function ExamForms({ onSave }: ExamFormsProps) {
  return (
    <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Nuevo Examen Médico</h3>

      <button
        type="button"
        onClick={() => onSave}
        className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Guardar Examen
      </button>
    </div>
  );
}
