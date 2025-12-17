import { Plus } from "lucide-react";

export default function CompaniesHeader({ onAdd }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-gray-200 pb-6 mb-6">
      <div>
        <h2 className="text-2xl font-semibold text-blue-950">Companies</h2>
        <p className="mt-1 text-sm text-gray-500 max-w-xl">
          Manage your companies and their access settings. You can add, edit or remove companies anytime.
        </p>
      </div>

      <button
        onClick={onAdd}
        className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-950 shadow-sm"
      >
        <Plus size={18} />
        Add Company
      </button>
    </div>
  );
}

