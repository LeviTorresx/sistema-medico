import React, { FC } from "react";
import { Cigarette, Wine, Dumbbell, Leaf } from "lucide-react"; // Iconos
import { Habits } from "../../../redux/slices/patientSlice";

interface Props {
  formData: { habits: Habits };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
}

const HabitsForm: FC<Props> = ({ formData, handleChange, bgColor}) => {


  return (
    <details className="border border-gray-300 shadow-md rounded-xl p-5 w-10/12 bg-white transition-all">
      <summary className={`cursor-pointer font-semibold text-lg flex justify-between items-center p-3 hover:text-blue-600 rounded-lg ${bgColor}`}>
        Hábitos
        <span className="text-gray-500 group-open:hidden">➕</span>
        <span className="text-gray-500 hidden group-open:block">➖</span>
      </summary>

      <div className="mt-4 flex flex-col gap-4">
        {/* Fumar */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden p-3 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Cigarette className="text-gray-500" />
          <label className="ml-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="smoking"
              checked={formData.habits.smoking}
              onChange={handleChange}
              className="w-5 h-5 accent-blue-500"
            />
            ¿Fuma actualmente?
          </label>
        </div>

        {/* Exfumador */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden p-3 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Cigarette className="text-gray-500" />
          <label className="ml-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="exSmoker"
              checked={formData.habits.exSmoker}
              onChange={handleChange}
              className="w-5 h-5 accent-blue-500"
            />
            ¿Exfumador?
          </label>
        </div>

        {/* Cigarrillos por día */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Cigarette className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Cigarrillos/dia</label>
          <input
            type="number"
            name="cigarettesPerDay"
            placeholder="Cigarrillos por día"
            value={formData.habits.cigarettesPerDay}
            onChange={handleChange}
            min="0"
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Años de consumo */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Cigarette className="p-3 bg-gray-100 text-gray-500" />
          <label className="text-gray-500">Años de consumo</label>
          <input
            type="number"
            name="yearsOfConsumption"
            placeholder="Años de consumo"
            value={formData.habits.yearsOfConsumption}
            onChange={handleChange}
            min="0"
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Alcohol */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden p-3 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Wine className="text-gray-500" />
          <label className="ml-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="alcohol"
              checked={formData.habits.alcohol}
              onChange={handleChange}
              className="w-5 h-5 accent-blue-500"
            />
            ¿Consume alcohol?
          </label>
        </div>

        {/* Frecuencia de alcohol */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Wine className="p-3 bg-gray-100 text-gray-500" />
          <input
            type="text"
            name="alcoholFrequency"
            placeholder="Frecuencia de consumo de alcohol"
            value={formData.habits.alcoholFrequency}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>

        {/* Sustancias psicoactivas */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden p-3 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Leaf className="text-gray-500" />
          <label className="ml-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="substances"
              checked={formData.habits.substances}
              onChange={handleChange}
              className="w-5 h-5 accent-blue-500"
            />
            ¿Consume sustancias psicoactivas?
          </label>
        </div>

        {/* Deporte */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden p-3 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Dumbbell className="text-gray-500" />
          <label className="ml-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="sports"
              checked={formData.habits.sports}
              onChange={handleChange}
              className="w-5 h-5 accent-blue-500"
            />
            ¿Practica deporte?
          </label>
        </div>

        {/* Frecuencia deportiva */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Dumbbell className="p-3 bg-gray-100 text-gray-500" />
          <input
            type="text"
            name="sportsFrequency"
            placeholder="Frecuencia de deporte"
            value={formData.habits.sportsFrequency}
            onChange={handleChange}
            className="w-full p-3 border-none focus:outline-none bg-white"
          />
        </div>
      </div>
    </details>
  );
};

export default HabitsForm;
