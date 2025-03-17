import { ChangeEvent } from "react";

export interface GeneralRecommendationsData {
  generalRecommendations: string;
  restrictions: string;
}

interface GeneralRecommendationsFormProps {
  formData: GeneralRecommendationsData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function GeneralRecommendationsForm({
  formData,
  handleChange,
}: GeneralRecommendationsFormProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-bold mb-2">Recomendaciones Generales</h3>

      {/* Recomendaciones Generales */}
      <label className="block mb-2">
        <span className="font-semibold">Recomendaciones Generales:</span>
        <input
          name="generalRecommendations"
          value={formData.generalRecommendations}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
      </label>

      {/* Restricciones */}
      <label className="block mb-2">
        <span className="font-semibold">Restricciones:</span>
        <input
          name="restrictions"
          value={formData.restrictions}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
      </label>
    </div>
  );
}
