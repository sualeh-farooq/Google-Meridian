import { Search } from "lucide-react";

export default function CompanySearchBar({ value, onChange }) {
  return (
    <div className="mb-8">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search company..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm focus:border-blue-900 focus:ring-blue-900"
        />
      </div>
    </div>
  );
}
