import { useState } from "react";
import UserManagementHeader from "../../components/pages/UserManagementHeader";
import UserFilters from "../../components/pages/UserFilters";
import UserTable from "../../components/pages/UserTable";
import AddUserModal from "../../components/pages/AddUserModal";
import Modal from "../../components/common/Modal";
import DeleteModal from "../../components/pages/DeleteModal";


// Sample Data
const INITIAL_USERS = [
  {
    id: 1,
    fullName: "Sufiyan",
    email: "irvan@company.com",
    role: "Role A",
    company: "Company A",
    lastLogin: "09 Oct 2024 - 17:00",
    status: "Active" as const,
  },
  {
    id: 2,
    fullName: "Sualeh",
    email: "irvan@company.com",
    role: "Role A",
    company: "Company A",
    lastLogin: "09 Oct 2024 - 17:00",
    status: "Active" as const,
  },
  {
    id: 3,
    fullName: "John Doe",
    email: "irvan@company.com",
    role: "Role A",
    company: "Company B",
    lastLogin: "09 Oct 2024 - 17:00",
    status: "Active" as const,
  },
  {
    id: 4,
    fullName: "Alex Smith",
    email: "irvan@company.com",
    role: "Role A",
    company: "Company C",
    lastLogin: "09 Oct 2024 - 17:00",
    status: "Active" as const,
  },
  {
    id: 5,
    fullName: "Alice Johnson",
    email: "irvan@company.com",
    role: "Role A",
    company: "Company A",
    lastLogin: "09 Oct 2024 - 17:00",
    status: "Active" as const,
  },
  {
    id: 6,
    fullName: "Michael Brown",
    email: "irvan@company.com",
    role: "Role A",
    company: "Company B",
    lastLogin: "09 Oct 2024 - 17:00",
    status: "Inactive" as const,
  },
  {
    id: 7,
    fullName: "Alexandra Davis",
    email: "irvan@company.com",
    role: "Role A",
    company: "Company A",
    lastLogin: "09 Oct 2024 - 17:00",
    status: "Inactive" as const,
  },
  {
    id: 8,
    fullName: "Brian Wilson",
    email: "irvan@company.com",
    role: "Role A",
    company: "Company C",
    lastLogin: "09 Oct 2024 - 17:00",
    status: "Pending" as const,
  },
];

const COMPANIES = ["Company A", "Company B", "Company C"];

export default function UserManagement() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<any>(null);

  // Filter users
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCompany = !selectedCompany || user.company === selectedCompany;
    const matchesRole = !selectedRole || user.role === selectedRole;
    const matchesStatus = !selectedStatus || user.status === selectedStatus;

    return matchesSearch && matchesCompany && matchesRole && matchesStatus;
  });

  const handleAddUser = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: any) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (user: any) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter((u) => u.id !== userToDelete.id));
      setIsDeleteModalOpen(false);
      setUserToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const handleSubmitUser = (userData: any) => {
    if (editingUser) {
      // Update existing user
      setUsers(
        users.map((u) =>
          u.id === editingUser.id ? { ...u, ...userData } : u
        )
      );
    } else {
      // Add new user
      const newUser = {
        id: Math.max(...users.map((u) => u.id)) + 1,
        ...userData,
        lastLogin: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }) + " - " + new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setUsers([...users, newUser]);
    }
  };

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 xl:px-10">
        <UserManagementHeader onAddUser={handleAddUser} />

        <UserFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCompany={selectedCompany}
          onCompanyChange={setSelectedCompany}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          companies={COMPANIES}
        />

        {filteredUsers.length > 0 ? (
          <UserTable
            users={filteredUsers}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">No users found</h3>
            <p className="text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>

      <AddUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitUser}
        companies={COMPANIES}
        editUser={editingUser}
      />

      <Modal isOpen={isDeleteModalOpen} onClose={handleCancelDelete}>
        <DeleteModal
          user={{ name: userToDelete?.fullName }} 
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      </Modal>
    </div>
  );
}