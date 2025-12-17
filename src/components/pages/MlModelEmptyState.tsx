import { Brain } from "lucide-react";

export default function MLModelsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mb-4">
        <Brain className="text-gray-400" size={36} />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No models found
      </h3>
      
      <p className="text-sm text-gray-500 text-center max-w-sm">
        Try adjusting your search or create a new model to get started.
      </p>
    </div>
  );
}