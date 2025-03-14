import { ClipboardCheck, FileText, ThumbsUp, Ban } from "lucide-react";

interface Evaluation {
  diagnoses: string[];
  recommendations: string;
  workAptitude: string;
  restrictions: string;
}

interface EvaluationFormProps {
  formData: { evaluation: Evaluation };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDiagnosisChange: (index: number, value: string) => void;
  addDiagnosis: () => void;
  removeDiagnosis: (index: number) => void;
  bgColor: string;
}

export default function EvaluationForm({
  formData,
  handleChange,
  handleDiagnosisChange,
  addDiagnosis,
  removeDiagnosis,
  bgColor,
}: EvaluationFormProps) {
  return (
    <details className="border border-gray-300 shadow-md rounded-xl p-5 w-10/12 bg-white transition-all">
      <summary className={`cursor-pointer font-semibold text-lg flex justify-between items-center p-3 hover:text-blue-600 ${bgColor}`}>
        Evaluación Médica
        <span className="text-gray-500 group-open:hidden">➕</span>
        <span className="text-gray-500 hidden group-open:block">➖</span>
      </summary>

      <div className="mt-4 flex flex-col gap-4">
        {/* Diagnósticos */}
        <fieldset className="border border-gray-300 rounded-lg p-3">
          <legend className="text-gray-500 font-semibold">Diagnósticos</legend>
          <div className="flex flex-col gap-2">
            {formData.evaluation.diagnoses.map((diagnosis, index) => (
              <div key={index} className="flex items-center gap-2">
                <ClipboardCheck className="text-gray-500" />
                <input
                  type="text"
                  placeholder={`Diagnóstico ${index + 1}`}
                  value={diagnosis}
                  onChange={(e) => handleDiagnosisChange(index, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeDiagnosis(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addDiagnosis}
              className="mt-2 text-blue-500 hover:text-blue-700"
            >
              ➕ Agregar Diagnóstico
            </button>
          </div>
        </fieldset>

        {/* Recomendaciones */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <FileText className="p-3 bg-gray-100 text-gray-500" />
            <label className="text-gray-500"> Recomendaciones</label>
          <input
            name="recommendations"
            placeholder="Recomendaciones"
            value={formData.evaluation.recommendations}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white resize-none"
          />
        </div>

        {/* Aptitud para el trabajo */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <ThumbsUp className="p-3 bg-gray-100 text-gray-500" />
            <label className="text-gray-500"> Aptitud para el trabajo</label>
          <input
            type="text"
            name="workAptitude"
            placeholder="Aptitud para el trabajo"
            value={formData.evaluation.workAptitude}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Restricciones */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Ban className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500"> Restricciones</label>

          <input
            type="text"
            name="restrictions"
            placeholder="Restricciones"
            value={formData.evaluation.restrictions}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>
      </div>
    </details>
  );
}
