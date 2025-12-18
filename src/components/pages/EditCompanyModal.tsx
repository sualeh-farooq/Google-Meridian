import { useState } from "react";
import CustomSelect from "../ui/select/CustomSelect";

interface Company {
  id: string | number;
  name: string;
  description: string;
  frequency: string;
}

interface EditCompanyModalProps {
  company: Company | null;
  onSubmit: (company: Company) => void;
  onCancel: () => void;
}

export default function EditCompanyModal({
  company,
  onSubmit,
  onCancel,
}: EditCompanyModalProps) {
  const [formData, setFormData] = useState<Company>(
    company || {
      id: 0,
      name: "",
      description: "",
      frequency: "Daily Row",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-gray-900">Edit Company</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Frequency
          </label>
          <CustomSelect
            value={formData.frequency}
            options={[
              { value: "Daily Row", label: "Daily Row" },
              { value: "Weekly Row", label: "Weekly Row" },
              { value: "Monthly Row", label: "Monthly Row" }
            ]}
            onChange={(value) => setFormData({ ...formData, frequency: value })}
          />
        </div>

        <div className="flex gap-3 pt-6">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save Company
          </button>
        </div>
      </form>
    </div>
  );
}
