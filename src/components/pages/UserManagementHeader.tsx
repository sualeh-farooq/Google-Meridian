import { UserPlus } from "lucide-react";

interface UserManagementHeaderProps {
  onAddUser: () => void;
}

export default function UserManagementHeader({ onAddUser }: UserManagementHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-gray-200 pb-6 mb-6">
      <div>
        <h2 className="text-2xl font-semibold text-blue-950">User Management</h2>
        <p className="mt-1 text-sm text-gray-500 max-w-xl">
          Manage user accounts, view user roles, and login dates, and statuses. 
          Filter by role and status to quickly review users.
        </p>
      </div>

      <button
        onClick={onAddUser}
        className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-950 shadow-sm transition-colors"
      >
        <UserPlus size={18} />
        Add User
      </button>
    </div>
  );
}