import { DataExam } from "@/app/redux/slices/patientSlice";
import { ChangeEvent } from "react";



interface MedicalExamFormProps {
  formData: DataExam;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function MedicalExamForm({
  formData,
  handleChange,
}: MedicalExamFormProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-bold mb-2">Examen Médico</h3>

      {/* Tipo de Examen */}
      <label className="block mb-2">
        <span className="font-semibold">Tipo de Examen:</span>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="INGRESO">Ingreso</option>
          <option value="RETIRO">Retiro</option>
          <option value="PERIÓDICO">Periódico</option>
          <option value="ESPECIAL">Especial</option>
        </select>
      </label>

      {/* Fecha */}
      <label className="block mb-2">
        <span className="font-semibold">Fecha:</span>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
      </label>

      {/* Ciudad */}
      <label className="block mb-2">
        <span className="font-semibold">Ciudad:</span>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
      </label>
    </div>
  );
}
