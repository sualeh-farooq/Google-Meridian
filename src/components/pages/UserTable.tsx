import { Edit2, Trash2 } from "lucide-react";
import { useState } from "react";

interface User {
  id: number;
  fullName: string;
  email: string;
  role: string;
  company: string;
  lastLogin: string;
  status: "Active" | "Inactive" | "Pending";
}

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export default function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full border-collapse">
        {/* TABLE HEADER */}
        <thead>
          <tr className="bg-gradient-to-br from-blue-950 to-blue-900 text-white text-xs font-semibold uppercase tracking-wider rounded-t-xl">
            {[
              "Full Name",
              "E-mail",
              "Role",
              "Company",
              "Last Login",
              "Status",
              "Actions",
            ].map((head, idx) => (
              <th
                key={head}
                className={`px-6 py-4 ${
                  head === "Actions" ? "text-right" : "text-left"
                } ${idx === 0 ? "rounded-tl-xl" : ""} ${
                  idx === 6 ? "rounded-tr-xl" : ""
                }`}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody className="divide-y divide-gray-200 bg-white">
          {currentUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {user.fullName}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{user.role}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{user.company}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{user.lastLogin}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyles(
                    user.status
                  )}`}
                >
                  {user.status}
                </span>
              </td>

              {/* ACTION ICONS */}
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => onEdit(user)}
                    className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition"
                    title="Edit"
                  >
                    <Edit2 size={16} />
                  </button>

                  <button
                    onClick={() => onDelete(user)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <span className="text-sm text-gray-600">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, users.length)} of {users.length} users
        </span>

        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 text-sm border rounded-lg disabled:opacity-50 hover:bg-gray-50"
          >
            Prev
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 text-sm border rounded-lg disabled:opacity-50 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
