import { Check } from "lucide-react";

interface Measures {
  id: string;
  name: string;
  label: string;
}

interface Step4ModelDetailProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const measures: Measures[] = [
  { id: "0", name: "TV" , label: " (Watch Time in Minutes)"},
  { id: "1", name: "Radio" , label: "(Listener Count)"},
  { id: "2", name: "Brochures" , label: "(Distributed Quantity)"},
  { id: "3", name: "Sales" , label: "(Total Sales)"},
];

export default function Step4ModelDetail({
  formData,
  updateFormData,
}: Step4ModelDetailProps) {
  const selectedPlatform = formData.selectedPlatform || "";

  const selectPlatform = (platformId: string) => {
    updateFormData({
      ...formData,
      selectedPlatform: platformId,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-1 text-lg font-semibold text-gray-900">
          What to Measure
        </h3>
        <p className="text-sm text-gray-500">
          Choose the dependent variable you want to analyze.
        </p>
      </div>

      <div className="space-y-3">
        {measures.map((measure) => {
          const isSelected = selectedPlatform === measure.id;

          return (
            <div
              key={measure.id}
              onClick={() => selectPlatform(measure.id)}
              className={`
                relative flex cursor-pointer items-center justify-between rounded-xl border-2 p-4
                transition-colors duration-200
                ${
                  isSelected
                    ? "border-blue-900 bg-blue-50/50"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }
              `}
            >
              <div>
                <p className="font-semibold  text-gray-900">
                  {measure.name} 
                  <span className="font-medium text-gray-700"> {measure.label}</span>
                </p>
              </div>

              <div
                className={`
                  flex h-6 w-6 items-center justify-center rounded-full border-2
                  ${
                    isSelected
                      ? "border-blue-900 bg-blue-900"
                      : "border-gray-300 bg-white"
                  }
                `}
              >
                {isSelected && <Check size={14} className="text-white" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
