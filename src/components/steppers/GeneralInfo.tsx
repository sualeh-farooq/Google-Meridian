interface Step1GeneralInfoProps {
  formData: any;
  updateFormData: (data: any) => void;
}

import CustomSelect from '../ui/select/CustomSelect';

export default function Step1GeneralInfo({
  formData,
  updateFormData,
}: Step1GeneralInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          General Information
        </h3>
        <p className="text-sm text-gray-500">
          Start by naming your analysis and adding a brief description.
        </p>
      </div>

      {/* Model Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Model Name
        </label>
        <input
          type="text"
          value={formData.modelName || ""}
          onChange={(e) =>
            updateFormData({ ...formData, modelName: e.target.value })
          }
          placeholder="Enter model name"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300
            focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20
            outline-none transition"
        />
      </div>

      {/* Model Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Model Description
        </label>
        <textarea
          rows={4}
          value={formData.modelDescription || ""}
          onChange={(e) =>
            updateFormData({ ...formData, modelDescription: e.target.value })
          }
          placeholder="Describe your model in detail..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300
            focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20
            outline-none transition resize-none"
        />
      </div>

      {/* Code Version */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Code Version
        </label>
        <CustomSelect
          value={formData.codeVersion || ""}
          options={[
            { value: "v1.0", label: "v1.0" },
            { value: "v1.1", label: "v1.1" },
            { value: "v2.0", label: "v2.0" }
          ]}
          placeholder="Select code version"
          onChange={(value) =>
            updateFormData({ ...formData, codeVersion: value })
          }
        />
      </div>
    </div>
  );
}
