import { WorkAptitude } from "@/app/redux/slices/patientSlice";
import { ChangeEvent } from "react";

interface WorkAptitudeFormProps {
  formData: { workAptitude: WorkAptitude };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function WorkAptitudeForm({
  formData,
  handleChange,
}: WorkAptitudeFormProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-bold mb-2">Aptitud Laboral</h3>

      {/* Entrada */}
      <div className="mb-3">
        <h4 className="font-semibold">Ingreso</h4>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="entry.withoutRestriction"
            checked={formData.workAptitude.entry.withoutRestriction}
            onChange={handleChange}
          />
          <span>Sin Restricción</span>
        </label>

        <label className="block mt-2">
          <span>Con Restricción:</span>
          <input
            type="text"
            name="entry.withRestriction"
            value={formData.workAptitude.entry.withRestriction}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </label>
      </div>

      {/* Periódico */}
      <div className="mb-3">
        <h4 className="font-semibold">Periódico</h4>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="periodic.canContinueWorking"
            checked={formData.workAptitude.periodic.canContinueWorking}
            onChange={handleChange}
          />
          <span>Puede Continuar Trabajando</span>
        </label>

        <label className="block mt-2">
          <span>Reubicación Laboral:</span>
          <input
            type="text"
            name="periodic.jobRelocation"
            value={formData.workAptitude.periodic.jobRelocation}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </label>
      </div>

      {/* Egreso */}
      <div className="mb-3">
        <h4 className="font-semibold">Egreso</h4>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="exit.satisfactory"
            checked={formData.workAptitude.exit.satisfactory}
            onChange={handleChange}
          />
          <span>Satisfactorio</span>
        </label>

        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            name="exit.notSatisfactory"
            checked={formData.workAptitude.exit.notSatisfactory}
            onChange={handleChange}
          />
          <span>No Satisfactorio</span>
        </label>
      </div>
    </div>
  );
}
