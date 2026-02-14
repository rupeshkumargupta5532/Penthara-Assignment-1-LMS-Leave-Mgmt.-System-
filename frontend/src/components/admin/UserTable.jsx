import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/adminService";

/**
 * Displays all users for admin
 */
const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getAllUsers();
    setUsers(response.data.data || []);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Users</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Emp ID</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user) => (
            <tr key={user._id} className="border-t text-center">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>{user.empId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
