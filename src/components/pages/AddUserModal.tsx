import { X } from "lucide-react";
import { useState } from "react";
import CustomSelect from "../ui/select/CustomSelect";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userData: any) => void;
  companies: string[];
  editUser?: any;
}

export default function AddUserModal({
  isOpen,
  onClose,
  onSubmit,
  companies,
  editUser,
}: AddUserModalProps) {
  const [formData, setFormData] = useState({
    fullName: editUser?.fullName || "",
    email: editUser?.email || "",
    password: "",
    role: editUser?.role || "",
    company: editUser?.company || "",
    status: editUser?.status || "Active",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
         className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"

        onClick={onClose}
      />

      {/* Modal */}
<div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 rounded-t-2xl">
            <h3 className="text-xl font-semibold text-gray-900">
              {editUser ? "Edit User" : "Add User"}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
            <input
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
            />

            {!editUser && (
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
              />
            )}

            <CustomSelect
              value={formData.role}
              options={[
                { value: "Admin", label: "Admin" },
                { value: "Manager", label: "Manager" },
                { value: "Role A", label: "Role A" },
                { value: "Role B", label: "Role B" }
              ]}
              placeholder="Select Role"
              onChange={(value) => setFormData({ ...formData, role: value })}
            />

            <CustomSelect
              value={formData.company}
              options={companies.map((c) => ({ value: c, label: c }))}
              placeholder="Select Company"
              onChange={(value) => setFormData({ ...formData, company: value })}
            />

            <CustomSelect
              value={formData.status}
              options={[
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
                { value: "Pending", label: "Pending" }
              ]}
              placeholder="Select Status"
              onChange={(value) => setFormData({ ...formData, status: value })}
            />

            {/* Actions (SAME AS DELETE MODAL) */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2.5 bg-blue-900 text-white rounded-xl hover:bg-blue-950 font-medium"
              >
                {editUser ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
