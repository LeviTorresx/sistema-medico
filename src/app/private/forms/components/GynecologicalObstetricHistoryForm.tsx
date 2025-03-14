import {
  Calendar,
  CheckCircle,
  UserCheck,
  Heart,
  ShieldCheck,
  PlusCircle,
} from "lucide-react";

interface GynecologicalObstetricHistory {
  menarche: number;
  cycles: string;
  g: number;
  p: number;
  a: number;
  v: number;
  lastMenstrualPeriod: string;
  usesContraception: boolean;
  contraceptionMethod?: string;
  papSmear: string;
}

interface Props {
  formData: { gynecologicalObstetricHistory: GynecologicalObstetricHistory };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
}

export default function GynecologicalObstetricHistoryForm({
  formData,
  handleChange,
  bgColor,
}: Props) {
  return (
    <details className="border border-gray-300 shadow-md rounded-xl p-5 w-10/12 bg-white transition-all">
      <summary
        className={`cursor-pointer font-semibold text-lg flex justify-between items-center p-3 hover:text-blue-600 ${bgColor}`}
      >
        Historia Gineco-Obstétrica
        <span className="text-gray-500 group-open:hidden">➕</span>
        <span className="text-gray-500 hidden group-open:block">➖</span>
      </summary>

      <div className="mt-4 flex flex-col gap-4">
        {/* Menarquia */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Calendar className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Menarquia</label>
          <input
            type="number"
            name="menarche"
            placeholder="Edad de menarquia"
            value={formData.gynecologicalObstetricHistory.menarche}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Ciclos Menstruales */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <UserCheck className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Ciclos menstruales</label>
          <input
            type="text"
            name="cycles"
            placeholder="Descripción de ciclos"
            value={formData.gynecologicalObstetricHistory.cycles}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* G, P, A, V */}
        <div className="flex flex-col gap-4">
          {/* G */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <PlusCircle className="p-3 bg-gray-100 text-gray-500" />
            <label className="text-gray-500">G</label>
            <input
              type="number"
              name="g"
              placeholder="G"
              value={formData.gynecologicalObstetricHistory.g ?? ""}
              onChange={handleChange}
              className="w-full p-3 border-none focus:outline-none bg-white"
            />
          </div>

          {/* P */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <PlusCircle className="p-3 bg-gray-100 text-gray-500" />
            <label className="text-gray-500">P</label>

            <input
              type="number"
              name="p"
              placeholder="P"
              value={formData.gynecologicalObstetricHistory.p ?? ""}
              onChange={handleChange}
              className="w-full p-3 border-none focus:outline-none bg-white"
            />
          </div>

          {/* A */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <PlusCircle className="p-3 bg-gray-100 text-gray-500" />
            <label className="text-gray-500">A</label>
            <input
              type="number"
              name="a"
              placeholder="A"
              value={formData.gynecologicalObstetricHistory.a ?? ""}
              onChange={handleChange}
              className="w-full p-3 border-none focus:outline-none bg-white"
            />
          </div>

          {/* V */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <PlusCircle className="p-3 bg-gray-100 text-gray-500" />
            <label className="text-gray-500">V</label>

            <input
              type="number"
              name="v"
              placeholder="V"
              value={formData.gynecologicalObstetricHistory.v ?? ""}
              onChange={handleChange}
              className="w-full p-3 border-none focus:outline-none bg-white"
            />
          </div>
        </div>

        {/* Última menstruación */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Calendar className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Última menstruación</label>
          <input
            type="date"
            name="lastMenstrualPeriod"
            value={formData.gynecologicalObstetricHistory.lastMenstrualPeriod}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Uso de anticoncepción */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all p-3">
          <CheckCircle className="p-3 bg-gray-100 text-gray-500" />
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="usesContraception"
              checked={formData.gynecologicalObstetricHistory.usesContraception}
              onChange={handleChange}
              className="accent-blue-500"
            />
            Usa anticonceptivo
          </label>
        </div>

        {/* Método Anticonceptivo */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <ShieldCheck className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Método anticonceptivo</label>
          <input
            type="text"
            name="contraceptionMethod"
            placeholder="Método anticonceptivo"
            value={formData.gynecologicalObstetricHistory.contraceptionMethod}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Citología */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Heart className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Citología</label>
          <input
            type="text"
            name="papSmear"
            placeholder="Última citología"
            value={formData.gynecologicalObstetricHistory.papSmear}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>
      </div>
    </details>
  );
}
