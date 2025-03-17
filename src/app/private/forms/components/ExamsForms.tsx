import { MedicalExam } from "@/app/redux/slices/patientSlice";
import { ChangeEvent } from "react";
import {
  Calendar,
  MapPin,
  Building2,
  FileText,
  CheckSquare,
  PlusCircle,
  Briefcase,
} from "lucide-react";
import React from "react";

interface MedicalExamFormProps {
  index: number;
  examData: MedicalExam;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function ExamsForms({
  examData,
  handleChange,
  index,
}: MedicalExamFormProps) {
  return (
    <div className="p-6 border rounded-2xl shadow-lg bg-white space-y-6">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <FileText className="w-6 h-6 text-blue-500" /> Examen {index + 1}
      </h3>

      {/* Tipo, Fecha y Ciudad */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block font-medium">Tipo de Examen</label>
          <select
            name="type"
            value={examData.dataExam.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="INGRESO">Ingreso</option>
            <option value="RETIRO">Retiro</option>
            <option value="PERIÓDICO">Periódico</option>
            <option value="ESPECIAL">Especial</option>
          </select>
        </div>
        <div>
          <label className="font-medium flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-600" /> Fecha
          </label>
          <input
            type="date"
            name="date"
            value={examData.dataExam.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="font-medium flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-600" /> Ciudad
          </label>
          <input
            type="text"
            name="city"
            value={examData.dataExam.city}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Datos Ocupacionales */}
      <h4 className="text-lg font-semibold flex items-center gap-2 mt-4">
        <Building2 className="w-5 h-5 text-blue-500" /> Datos Ocupacionales
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="employer"
          value={examData.occupationalData.employer}
          onChange={handleChange}
          placeholder="Empleador"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          name="jobTitle"
          value={examData.occupationalData.jobTitle}
          onChange={handleChange}
          placeholder="Cargo"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          name="name"
          value={examData.occupationalData.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          name="identification"
          value={examData.occupationalData.identification}
          onChange={handleChange}
          placeholder="Identificación"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          name="eps"
          value={examData.occupationalData.eps}
          onChange={handleChange}
          placeholder="EPS"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          name="arl"
          value={examData.occupationalData.arl}
          onChange={handleChange}
          placeholder="ARL"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          name="pensionFund"
          value={examData.occupationalData.pensionFund}
          onChange={handleChange}
          placeholder="Fondo de Pensiones"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="entry"
            checked={examData.occupationalData.entry}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Ingreso</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="exit"
            checked={examData.occupationalData.exit}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Retiro</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="periodic"
            checked={examData.occupationalData.periodic}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Periódico</span>
        </label>
      </div>

      {/* Exámenes Realizados */}
      <h4 className="text-lg font-semibold flex items-center gap-2 mt-4">
        <CheckSquare className="w-5 h-5 text-blue-500" /> Exámenes Realizados
      </h4>
      <div className="grid grid-cols-3 gap-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="osteomuscular"
            checked={examData.examsPerformed.osteomuscular}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Osteomuscular</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="spirometry"
            checked={examData.examsPerformed.spirometry}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Espirometría</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="laboratories"
            checked={examData.examsPerformed.laboratories}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Laboratorios</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="audiometry"
            checked={examData.examsPerformed.audiometry}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Audiometría</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="psychotechnics"
            checked={examData.examsPerformed.psychotechnics}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Psicotécnicos</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="visiometry"
            checked={examData.examsPerformed.visiometry}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Visiometría</span>
        </label>
      </div>
      <div className="mt-3">
        <label className="font-medium flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-gray-600" /> Otros
        </label>
        <input
          type="text"
          name="others"
          value={examData.examsPerformed.others}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="mt-3">
        <label className=" font-medium flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-gray-600" /> Otros
        </label>
        <input
          type="text"
          name="others"
          value={examData.examsPerformed.others}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>
      {/* Aptitud Laboral */}
      <h4 className="text-lg font-semibold flex items-center gap-2 mt-4">
        <Briefcase className="w-5 h-5 text-blue-500" /> Aptitud Laboral
      </h4>
      <div className="grid grid-cols-3 gap-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="entry" checked={examData.workAptitude.entry} onChange={handleChange} className="w-5 h-5" />
          <span>Ingreso</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="periodic" checked={examData.workAptitude.periodic} onChange={handleChange} className="w-5 h-5" />
          <span>Periódico</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="exit" checked={examData.workAptitude.exit} onChange={handleChange} className="w-5 h-5" />
          <span>Retiro</span>
        </label>
      </div>

      {/* Recomendaciones y Restricciones */}
      <div className="mt-4">
        <label className="block font-medium">Recomendaciones Generales</label>
        <input
          name="generalRecommendations"
          value={examData.generalRecommendation.generalRecommendations}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mt-4">
        <label className="block font-medium">Restricciones</label>
        <input
          name="restrictions"
          value={examData.generalRecommendation.restrictions}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>
    </div>
  );
}
