import React, { FC } from "react";
import { format } from "date-fns";

interface PatientCardProps {
  personalData: {
    name: string;
    identification: string;
    birthCity: string;
    birthDate: Date;
    age: number;
    education: string;
    maritalStatus: string;
    address: string;
    phone: string;
    healthInsurance: string;
    occupationalRiskInsurance: string;
  };
}

const PatientCard: FC<PatientCardProps> = ({ personalData }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-xl rounded-2xl p-6 w-full max-w-md border border-blue-200">
      <h4 className="text-blue-900 font-bold text-2xl text-center mb-4">
        Información del Paciente
      </h4>
      <div className="flex flex-col gap-3 text-gray-800">
        {[
          { label: "Nombre", value: personalData.name },
          { label: "Identificación", value: personalData.identification },
          { label: "Ciudad Nacimiento", value: personalData.birthCity },
          {
            label: "Fecha Nacimiento",
            value:
              personalData.birthDate instanceof Date
                ? format(personalData.birthDate, "dd/MM/yyyy")
                : "N/A",
          },
          { label: "Edad", value: personalData.age },
          { label: "Escolaridad", value: personalData.education },
          { label: "Estado Civil", value: personalData.maritalStatus },
          { label: "Dirección", value: personalData.address },
          { label: "Teléfono", value: personalData.phone },
          { label: "EPS", value: personalData.healthInsurance },
          { label: "ARL", value: personalData.occupationalRiskInsurance },
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b last:border-none"
          >
            <span className="font-semibold text-gray-700">{item.label}:</span>
            <span className="text-gray-900">{item.value || "N/A"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientCard;
