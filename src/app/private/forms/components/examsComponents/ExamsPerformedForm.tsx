import { ChangeEvent } from "react";
import { ExamsPerformed } from "@/app/redux/slices/patientSlice";

interface ExamsPerformedFormProps {
  formData: { examsPerformed: ExamsPerformed };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ExamsPerformedForm({
  formData,
  handleChange,
}: ExamsPerformedFormProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-bold mb-2">Exámenes Realizados</h3>

      <div className="grid grid-cols-2 gap-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="osteomuscular"
            checked={formData.examsPerformed.osteomuscular}
            onChange={handleChange}
          />
          <span>Osteomuscular</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="spirometry"
            checked={formData.examsPerformed.spirometry}
            onChange={handleChange}
          />
          <span>Espirometría</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="laboratories"
            checked={formData.examsPerformed.laboratories}
            onChange={handleChange}
          />
          <span>Laboratorios</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="audiometry"
            checked={formData.examsPerformed.audiometry}
            onChange={handleChange}
          />
          <span>Audiometría</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="psychotechnics"
            checked={formData.examsPerformed.psychotechnics}
            onChange={handleChange}
          />
          <span>Psicotécnicos</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="visiometry"
            checked={formData.examsPerformed.visiometry}
            onChange={handleChange}
          />
          <span>Visiometría</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="optometry"
            checked={formData.examsPerformed.optometry}
            onChange={handleChange}
          />
          <span>Optometría</span>
        </label>
      </div>

      <label className="block mt-3">
        <span>Otros:</span>
        <input
          type="text"
          name="others"
          value={formData.examsPerformed.others}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
      </label>
    </div>
  );
}
