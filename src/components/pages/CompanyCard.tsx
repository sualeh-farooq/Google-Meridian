import { Building2, Edit2, Trash2 } from "lucide-react";

export default function CompanyCard({ company, onEdit, onDelete }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl 
      bg-white border border-gray-200 p-6
      shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Subtle Gradient Overlay (Light) */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl
        bg-gradient-to-br from-blue-50/20 via-transparent to-blue-50/20 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Action Buttons - Always Visible */}
      <div className="absolute right-4 top-4 z-10 flex gap-2">
        <button
          onClick={() => onEdit(company)}
          className="rounded-lg bg-white/80 p-2 shadow-sm backdrop-blur hover:bg-blue-50 transition"
          title="Edit"
        >
          <Edit2 size={16} className="text-blue-600" />
        </button>

        <button
          onClick={() => onDelete(company)}
          className="rounded-lg bg-white/80 p-2 shadow-sm backdrop-blur hover:bg-red-50 transition"
          title="Delete"
        >
          <Trash2 size={16} className="text-red-600" />
        </button>
      </div>

      {/* Icon */}
      <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center 
        rounded-xl bg-gradient-to-br from-blue-900 to-blue-500 shadow-md">
        <Building2 className="text-white" size={24} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          {company.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {company.description}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full 
            bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {company.frequency}
          </span>

          <span className="text-xs font-medium text-gray-400">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
}
