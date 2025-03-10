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
  const markAsNotApplicable = (key: string) => {
    const inputElement = document.createElement("input");
    inputElement.name = key;
    inputElement.value = "N/A";
    inputElement.setAttribute("data-section", sectionKey);

    const event = new Event("input", { bubbles: true });
    Object.defineProperty(event, "target", {
      value: inputElement,
      writable: false,
    });

    handleChange(event as unknown as ChangeEvent<HTMLInputElement>);
  };

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
          <div key={key} className="mb-3 flex items-center gap-2">
            <div className="flex-1">
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
            {typeof formData[sectionKey][key] !== "boolean" && (
              <button
                type="button"
                onClick={() => markAsNotApplicable(key)}
                className="px-3 py-1 text-sm bg-orange-300 rounded hover:bg-orange-400"
              >
                No Aplica
              </button>
            )}
          </div>
        ))}
      </div>
    </details>
  );
};

export default Section;
