/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FC } from "react";

interface SectionProps {
  title: string;
  sectionKey: any;
  fields: string[];
  formData: any;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  getSectionStatus: (section: never, fields: never[]) => string;
}

const Section: FC<SectionProps> = ({
  title,
  sectionKey,
  fields,
  formData,
  handleChange,
  getSectionStatus,
}) => {
  return (
    <details className="mb-2 border-b pb-2">
      <summary
        className={`cursor-pointer text-lg font-medium p-3 rounded-lg hover:bg-gray-300 ${getSectionStatus(
          sectionKey,
          fields
        )}`}
      >
        {title}
      </summary>
      <div className="p-3">
        {fields.map((key) => (
          <div key={key} className="mb-3">
            <label className="block mb-1 capitalize" htmlFor={key}>
              {key}
            </label>
            {typeof formData[sectionKey][key] === "boolean" ? (
              <input
                type="checkbox"
                id={key}
                name={key}
                checked={formData[sectionKey][key]}
                onChange={handleChange}
                data-section={sectionKey}
                className="mr-2"
              />
            ) : (
              <input
                type="text"
                id={key}
                name={key}
                value={formData[sectionKey][key]}
                onChange={handleChange}
                data-section={sectionKey}
                className="w-full p-2 border rounded border-gray-400"
              />
            )}
          </div>
        ))}
      </div>
    </details>
  );
};

export default Section;
