import { Search } from "lucide-react";
import { useState } from "react";
import CustomSelect from "../ui/select/CustomSelect";

interface MLModelsSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function MLModelsSearchBar({ value, onChange }: MLModelsSearchBarProps) {
  const [company, setCompany] = useState("");

  const companyOptions = [
    { value: "Company A", label: "Company A" },
    { value: "Company B", label: "Company B" },
    { value: "Company C", label: "Company C" },
    { value: "Company D", label: "Company D" }
  ];

  return (
    <div className="mb-8 flex gap-4">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm focus:border-blue-900 focus:ring-blue-900"
        />
      </div>
          
      <div className="w-48">
        <CustomSelect
          value={company}
          options={companyOptions}
          placeholder="Company"
          onChange={setCompany}
        />
      </div>
    </div>
  );
}
 
