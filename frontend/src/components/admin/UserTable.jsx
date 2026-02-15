import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/adminService";

/**
 * UserTable Component
 */
const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  if (!users || users.length === 0) {
    return (
      <div className="bg-white p-4 shadow rounded-lg">
        <p className="text-gray-500 text-center">No users found</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">All Users</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Department</th>
              <th className="p-3 border">Employee ID</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 border font-medium">{user.name}</td>

                <td className="p-3 border">{user.email}</td>

                <td className="p-3 border">{user.department}</td>

                <td className="p-3 border">{user.empId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
