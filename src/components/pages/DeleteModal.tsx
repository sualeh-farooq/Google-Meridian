import { Trash2 } from "lucide-react";

export default function DeleteModal({ user, onConfirm, onCancel }) {
  return (
    
    <div className="text-center px-2  ">
      {/* ICON */}
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
        <Trash2 size={26} className="text-red-600" />
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Delete User
      </h3>

      {/* MESSAGE */}
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Are you sure you want to delete{" "}
        <span className="font-semibold text-gray-900">
          {user?.name || "this user"}
        </span>
        ? <br />
        This action cannot be undone.
      </p>

      {/* ACTIONS */}
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="flex-1 rounded-lg bg-red-600 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
