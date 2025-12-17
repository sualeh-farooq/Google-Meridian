import { Search } from "lucide-react";

interface MLModelsSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function MLModelsSearchBar({ value, onChange }: MLModelsSearchBarProps) {
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
          
    <div>
                <select
        className="rounded-xl border border-gray-300 bg-gray-50 py-2.5 px-6 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition" 
      >
        <option value="">Company </option>
        <option value="Company A">Company A</option>
        <option value="Company B">Company B</option>
        <option value="Company C">Company C</option>
        <option value="Company D">Company D</option>
      </select>
    </div>
    </div>
  );
}
 
