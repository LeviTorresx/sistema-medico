import {
  ClipboardList,
  Hospital,
  Scissors,
  AlertCircle,
  Pill,
  Skull,
  Biohazard,
  MoreHorizontal,
} from "lucide-react";
import { PersonalHistory } from "@/app/redux/slices/patientSlice";

interface PersonalHistoryFormProps {
  formData: { personalHistory: PersonalHistory };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
}

export default function PersonalHistoryForm({
  formData,
  handleChange,
  bgColor,
}: PersonalHistoryFormProps) {
  return (
    <details className="border border-gray-300 shadow-md rounded-xl p-5 w-10/12 bg-white transition-all">
      <summary
        className={`cursor-pointer font-semibold text-lg flex justify-between items-center p-3 hover:text-blue-600 ${bgColor}`}
      >
        Historial Personal
        <span className="text-gray-500 group-open:hidden">➕</span>
        <span className="text-gray-500 hidden group-open:block">➖</span>
      </summary>

      <div className="mt-4 flex flex-col gap-4">
        {/* Enfermedades Patológicas */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <ClipboardList className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Patologias</label>
          <input
            type="text"
            name="pathological"
            placeholder="Enfermedades patológicas"
            value={formData.personalHistory.pathological}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Hospitalizaciones */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Hospital className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Hospitalizaciones</label>
          <input
            type="text"
            name="hospitalizations"
            placeholder="Hospitalizaciones"
            value={formData.personalHistory.hospitalizations}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Cirugías */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Scissors className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Cirugías</label>
          <input
            type="text"
            name="surgeries"
            placeholder="Cirugías"
            value={formData.personalHistory.surgeries}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Traumatismos */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <AlertCircle className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Traumatismos</label>
          <input
            type="text"
            name="traumatic"
            placeholder="Traumatismos"
            value={formData.personalHistory.traumatic}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Medicaciones */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Pill className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Medicaciones</label>
          <input
            type="text"
            name="medications"
            placeholder="Medicaciones"
            value={formData.personalHistory.medications}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Tóxicos */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Skull className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Tóxicos</label>
          <input
            type="text"
            name="toxic"
            placeholder="Tóxicos"
            value={formData.personalHistory.toxic}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Alergias */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Biohazard className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Alergias</label>
          <input
            type="text"
            name="allergies"
            placeholder="Alergias"
            value={formData.personalHistory.allergies}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Otros */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <MoreHorizontal className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Otros</label>
          <input
            type="text"
            name="others"
            placeholder="Otros"
            value={formData.personalHistory.others}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>
      </div>
    </details>
  );
}
