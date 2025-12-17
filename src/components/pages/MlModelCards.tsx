import { Brain, MoreVertical } from "lucide-react";

interface MLModel {
  id: string | number;
  name: string;
  description: string;
  version: string;
}

interface MLModelCardProps {
  model: MLModel;
  onEdit: (model: MLModel) => void;
  onDelete: (model: MLModel) => void;
  onClick: (model: MLModel) => void;
}

export default function MLModelCard({ model, onEdit, onDelete, onClick }: MLModelCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl 
        bg-white border border-gray-200 p-6
        shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
      onClick={() => onClick(model)}
    >
      {/* Subtle Gradient Overlay (Light) */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl
        bg-gradient-to-br from-blue-50/20 via-transparent to-blue-50/20 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Three Dots Menu */}
      <div className="absolute right-4 top-4 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            // You can add dropdown menu logic here
          }}
          className="rounded-lg bg-white/80 p-2 shadow-sm backdrop-blur hover:bg-gray-100 transition opacity-0 group-hover:opacity-100"
          title="Options"
        >
          <MoreVertical size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Icon */}
      <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center 
        rounded-xl bg-gradient-to-br from-blue-900 to-blue-500 shadow-md">
        <Brain className="text-white" size={24} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-2">
          {model.name}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">
          {model.description}
        </p>

  
      </div>
    </div>
  );
}