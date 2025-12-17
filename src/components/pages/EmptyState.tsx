import { Building2 } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <div className="mb-4 rounded-full bg-gray-100 p-6">
        <Building2 size={36} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">
        No companies found
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Try searching again or add a new company.
      </p>
    </div>
  );
}
