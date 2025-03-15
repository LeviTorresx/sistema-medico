import {
  Building,
  Briefcase,
  Clock,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { WorkHistory } from "@/app/redux/slices/patientSlice";

interface Props {
  formData: { workHistory: WorkHistory };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
}

export default function WorkHistoryForm({ formData, handleChange, bgColor }: Props) {
  return (
    <details className="border border-gray-300 shadow-md rounded-xl p-5 w-10/12 bg-white transition-all">
      <summary
        className={`cursor-pointer font-semibold text-lg flex justify-between items-center p-3 hover:text-blue-600 ${bgColor}`}
      >
        Historial Laboral
        <span className="text-gray-500 group-open:hidden">➕</span>
        <span className="text-gray-500 hidden group-open:block">➖</span>
      </summary>

      <div className="mt-4 flex flex-col gap-4">
        {/* Empresa */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Building className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Empresa</label>

          <input
            type="text"
            name="company"
            placeholder="Nombre de la empresa"
            value={formData.workHistory.company}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Cargo */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Briefcase className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Cargo</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Cargo"
            value={formData.workHistory.jobTitle}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Duración */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Clock className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Duración</label>
          <input
            type="text"
            name="workDuration"
            placeholder="Duración del trabajo"
            value={formData.workHistory.workDuration}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Factores de Riesgo */}
        <fieldset className="border border-gray-300 rounded-lg p-3">
          <legend className="text-gray-500 font-semibold">
            Factores de Riesgo
          </legend>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(formData.workHistory.risks).map(([key, value]) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={`risks.${key}`}
                  checked={value}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Accidente Laboral */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="workAccident"
            checked={formData.workHistory.workAccident}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <AlertTriangle className="text-gray-500" /> Accidente laboral
        </label>

        {/* Enfermedad Laboral */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="occupationalDisease"
            checked={formData.workHistory.occupationalDisease}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <CheckCircle className="text-gray-500" /> Enfermedad ocupacional
        </label>
      </div>
    </details>
  );
}
