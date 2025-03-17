import { Building, Briefcase, IdCard, CheckCircle, Shield } from "lucide-react";
import { ChangeEvent } from "react";
import { OccupationalData } from "@/app/redux/slices/patientSlice";

interface Props {
  formData: { occupationalData: OccupationalData };
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
}

export default function OccupationalDataForm({
  formData,
  handleChange,
  bgColor,
}: Props) {
  return (
    <details className="border border-gray-300 shadow-md rounded-xl p-5 w-10/12 bg-white transition-all">
      <summary
        className={`cursor-pointer font-semibold text-lg flex justify-between items-center p-3 rounded-lg ${bgColor}`}
      >
        Datos Ocupacionales
        <span className="text-gray-500 group-open:hidden">➕</span>
        <span className="text-gray-500 hidden group-open:block">➖</span>
      </summary>

      <div className="mt-4 flex flex-col gap-4">
        {/* Empleador */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Building className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Empleador</label>
          <input
            type="text"
            name="employer"
            placeholder="Empleador"
            value={formData.occupationalData.employer}
            onChange={handleChange}
            required
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
            value={formData.occupationalData.jobTitle}
            onChange={handleChange}
            required
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Identificación */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <IdCard className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Identificación</label>
          <input
            type="text"
            name="identification"
            placeholder="Identificación"
            value={formData.occupationalData.identification}
            onChange={handleChange}
            required
            pattern="\d+"
            title="Debe ingresar solo números"
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* EPS */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Shield className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">EPS</label>
          <input
            type="text"
            name="eps"
            placeholder="EPS"
            value={formData.occupationalData.eps}
            onChange={handleChange}
            required
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* ARL */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Shield className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">ARL</label>
          <input
            type="text"
            name="arl"
            placeholder="ARL"
            value={formData.occupationalData.arl}
            onChange={handleChange}
            required
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Fondo de pensiones */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <CheckCircle className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Fondo de pensiones</label>
          <input
            type="text"
            name="pensionFund"
            placeholder="Fondo de pensiones"
            value={formData.occupationalData.pensionFund}
            onChange={handleChange}
            required
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>
      </div>
    </details>
  );
}
