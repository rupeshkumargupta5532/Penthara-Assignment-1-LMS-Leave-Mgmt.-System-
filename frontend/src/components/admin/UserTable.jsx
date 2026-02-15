import DataTable from "../common/DataTable";

/**
 * UserTable Component
 *
 * Displays all registered users for admin.
 *
 * Shows:
 * - Name
 * - Email
 * - Department
 * - Employee ID
 *
 * Uses reusable DataTable component.
 */

const UserTable = ({ users }) => {
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Department", accessor: "department" },
    { header: "Employee ID", accessor: "empId" },
  ];

  return (
    <DataTable
      title="All Users"
      columns={columns}
      data={users}
      emptyMessage="No users found"
    />
  );
};

export default UserTable;
