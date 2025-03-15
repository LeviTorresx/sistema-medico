import {
  User,
  IdCard,
  MapPin,
  Calendar,
  Phone,
  School,
  Home,
  Heart,
} from "lucide-react";
import { ChangeEvent } from "react";
import { PersonalData } from "@/app/redux/slices/patientSlice";

interface Props {
  formData: { personalData: PersonalData };
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
}

export default function PersonalDataForm({
  formData,
  handleChange,
  bgColor,
}: Props) {
  return (
    <details className="border border-gray-300 shadow-md rounded-xl p-5 w-10/12 bg-white transition-all">
      <summary
        className={`cursor-pointer font-semibold text-lg flex justify-between items-center p-3 rounded-lg ${bgColor}}`}
      >
        Datos Personales
        <span className="text-gray-500 group-open:hidden">➕</span>
        <span className="text-gray-500 hidden group-open:block">➖</span>
      </summary>

      <div className="mt-4 flex flex-col gap-4">
        {/* Nombre */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <User className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.personalData.name}
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
            value={formData.personalData.identification}
            onChange={handleChange}
            required
            pattern="\d+"
            title="Debe ingresar solo números"
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Ciudad de Nacimiento */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <MapPin className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Ciudad de Nacimiento</label>
          <input
            type="text"
            name="birthCity"
            placeholder="Ciudad de nacimiento"
            value={formData.personalData.birthCity}
            onChange={handleChange}
            required
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Fecha de nacimiento */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Calendar className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Fecha de nacimiento</label>
          <input
            type="date"
            name="birthDate"
            value={formData.personalData.birthDate}
            onChange={handleChange}
            required
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Teléfono */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Phone className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Teléfono</label>
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={formData.personalData.phone}
            onChange={handleChange}
            required
            pattern="\d{7,10}"
            title="Ingrese un número válido de 7 a 10 dígitos"
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Educación */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <School className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Educación</label>
          <input
            type="text"
            name="education"
            placeholder="Educación"
            value={formData.personalData.education}
            onChange={handleChange}
            required
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Dirección */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Home className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Dirección</label>
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={formData.personalData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* EPS / Seguro de salud */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Heart className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">EPS o Seguro de Salud</label>
          <input
            type="text"
            name="healthInsurance"
            placeholder="EPS o Seguro de Salud"
            value={formData.personalData.healthInsurance}
            onChange={handleChange}
            required
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>
      </div>
    </details>
  );
}
