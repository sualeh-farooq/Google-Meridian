import { Search } from "lucide-react";

interface UserFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCompany: string;
  onCompanyChange: (value: string) => void;
  selectedRole: string;
  onRoleChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
  companies: string[];
}

export default function UserFilters({
  searchQuery,
  onSearchChange,
  selectedCompany,
  onCompanyChange,
  selectedRole,
  onRoleChange,
  selectedStatus,
  onStatusChange,
  companies,
}: UserFiltersProps) {
  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition"
        />
      </div>

      {/* Company Dropdown */}
      <select
        value={selectedCompany}
        onChange={(e) => onCompanyChange(e.target.value)}
        className="rounded-xl border border-gray-300 bg-gray-50 py-2.5 px-4 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition"
      >
        <option value="">All Companies</option>
        {companies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>

      {/* Role Filter */}
      <select
        value={selectedRole}
        onChange={(e) => onRoleChange(e.target.value)}
        className="rounded-xl border border-gray-300 bg-gray-50 py-2.5 px-4 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition"
      >
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="Role A">Role A</option>
        <option value="Role B">Role B</option>
        <option value="Manager">Manager</option>
      </select>

      {/* Status Filter */}
      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-xl border border-gray-300 bg-gray-50 py-2.5 px-4 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
}