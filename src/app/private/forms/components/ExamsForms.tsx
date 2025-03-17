import { MedicalExam } from "@/app/redux/slices/patientSlice";
import { ChangeEvent } from "react";

interface MedicalExamFormProps {
  index: number;
  examData: MedicalExam;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

import React from "react";

export default function ExamsForms({
  examData,
  handleChange,
  index,
}: MedicalExamFormProps) {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-2">Examen {index + 1}</h3>

      {/* Tipo, Fecha y Ciudad */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block font-medium">Tipo de Examen</label>
          <select
            name="type"
            value={examData.dataExam.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="INGRESO">Ingreso</option>
            <option value="RETIRO">Retiro</option>
            <option value="PERIÓDICO">Periódico</option>
            <option value="ESPECIAL">Especial</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Fecha</label>
          <input
            type="date"
            name="date"
            value={examData.dataExam.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium">Ciudad</label>
          <input
            type="text"
            name="city"
            value={examData.dataExam.city}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Datos Ocupacionales */}
      <h4 className="text-md font-semibold mt-4">Datos Ocupacionales</h4>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="employer"
          value={examData.occupationalData.employer}
          onChange={handleChange}
          placeholder="Empleador"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          name="jobTitle"
          value={examData.occupationalData.jobTitle}
          onChange={handleChange}
          placeholder="Cargo"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Exámenes Realizados */}
      <h4 className="text-md font-semibold mt-4">Exámenes Realizados</h4>
      <div className="grid grid-cols-3 gap-2">
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="osteomuscular"
              checked={examData.examsPerformed.osteomuscular}
              onChange={handleChange}
            />
            <span>Osteomuscular</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="spirometry"
              checked={examData.examsPerformed.spirometry}
              onChange={handleChange}
            />
            <span>Espirometría</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="laboratories"
              checked={examData.examsPerformed.laboratories}
              onChange={handleChange}
            />
            <span>Laboratorios</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="audiometry"
              checked={examData.examsPerformed.audiometry}
              onChange={handleChange}
            />
            <span>Audiometría</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="psychotechnics"
              checked={examData.examsPerformed.psychotechnics}
              onChange={handleChange}
            />
            <span>Psicotécnicos</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="visiometry"
              checked={examData.examsPerformed.visiometry}
              onChange={handleChange}
            />
            <span>Visiometría</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="optometry"
              checked={examData.examsPerformed.optometry}
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
            value={examData.examsPerformed.others}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </label>
      </div>

      {/* Recomendaciones y Restricciones */}
      <div className="mt-4">
        <label className="block font-medium">Recomendaciones Generales</label>
        <input
          name="generalRecommendations"
          value={examData.generalRecommendation.generalRecommendations}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mt-4">
        <label className="block font-medium">Restricciones</label>
        <input
          name="restrictions"
          value={examData.generalRecommendation.restrictions}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
      </div>
    </div>
  );
}
