import { Users } from "lucide-react";

export default function UserEmptyState() {
  return (
    <div className="text-center py-16 px-4">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 mb-6">
        <Users className="w-10 h-10 text-blue-600" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No Users Found
      </h3>
      
      <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
        Try adjusting your search or filter criteria to find what you're looking for,
        or add a new user to get started.
      </p>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span>Active</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <span>Inactive</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <span>Pending</span>
        </div>
      </div>
    </div>
  );
}