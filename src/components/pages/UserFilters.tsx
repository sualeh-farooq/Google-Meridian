import { Search } from "lucide-react";
import CustomSelect from "../ui/select/CustomSelect";

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
  // Company options
  const companyOptions = [
    { value: "", label: "All Companies" },
    ...companies.map(company => ({ value: company, label: company }))
  ];

  // Role options
  const roleOptions = [
    { value: "", label: "All Roles" },
    { value: "Admin", label: "Admin" },
    { value: "Role A", label: "Role A" },
    { value: "Role B", label: "Role B" },
    { value: "Manager", label: "Manager" }
  ];

  // Status options
  const statusOptions = [
    { value: "", label: "All Status" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    { value: "Pending", label: "Pending" }
  ];

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
      <CustomSelect
        value={selectedCompany}
        onChange={onCompanyChange}
        options={companyOptions}
        placeholder="All Companies"
      />

      {/* Role Filter */}
      <CustomSelect
        value={selectedRole}
        onChange={onRoleChange}
        options={roleOptions}
        placeholder="All Roles"
      />

      {/* Status Filter */}
      <CustomSelect
        value={selectedStatus}
        onChange={onStatusChange}
        options={statusOptions}
        placeholder="All Status"
      />
    </div>
  );
}