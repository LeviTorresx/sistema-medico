import {
  HeartPulse,
  Activity,
  ShieldAlert,
  Radiation,
  MoreHorizontal,
} from "lucide-react";

interface FamilyHistory {
  metabolic: boolean;
  heartDisease: boolean;
  fatherHypertension: boolean;
  cancer: boolean;
  otherHistory: string;
}

interface FamilyHistoryFormProps {
  formData: { familyHistory: FamilyHistory };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
}

export default function FamilyHistoryForm({
  formData,
  handleChange,
  bgColor,
}: FamilyHistoryFormProps) {
  return (
    <details className="border border-gray-300 shadow-md rounded-xl p-5 w-10/12 bg-white transition-all">
      <summary
        className={`cursor-pointer font-semibold text-lg flex justify-between items-center p-3 hover:text-blue-600 ${bgColor}`}
      >
        Historial Familiar
        <span className="text-gray-500 group-open:hidden">➕</span>
        <span className="text-gray-500 hidden group-open:block">➖</span>
      </summary>

      <div className="mt-4 flex flex-col gap-4">
        {/* Enfermedades Metabólicas */}
        <label className="flex items-center gap-3">
          <HeartPulse className="text-gray-500" />
          <input
            type="checkbox"
            name="metabolic"
            checked={formData.familyHistory.metabolic}
            onChange={handleChange}
            className="w-5 h-5"
          />
          Enfermedades metabólicas
        </label>

        {/* Enfermedades Cardíacas */}
        <label className="flex items-center gap-3">
          <Activity className="text-gray-500" />
          <input
            type="checkbox"
            name="heartDisease"
            checked={formData.familyHistory.heartDisease}
            onChange={handleChange}
            className="w-5 h-5"
          />
          Enfermedades cardíacas
        </label>

        {/* Hipertensión en el padre */}
        <label className="flex items-center gap-3">
          <ShieldAlert className="text-gray-500" />
          <input
            type="checkbox"
            name="fatherHypertension"
            checked={formData.familyHistory.fatherHypertension}
            onChange={handleChange}
            className="w-5 h-5"
          />
          Hipertensión en el padre
        </label>

        {/* Cáncer */}
        <label className="flex items-center gap-3">
          <Radiation className="text-gray-500" />
          <input
            type="checkbox"
            name="cancer"
            checked={formData.familyHistory.cancer}
            onChange={handleChange}
            className="w-5 h-5"
          />
          Cáncer
        </label>

        {/* Otros antecedentes */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <MoreHorizontal className="p-3 bg-gray-100 text-gray-500" />
          <input
            type="text"
            name="otherHistory"
            placeholder="Otros antecedentes"
            value={formData.familyHistory.otherHistory}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>
      </div>
    </details>
  );
}
