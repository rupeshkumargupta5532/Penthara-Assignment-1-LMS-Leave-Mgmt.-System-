import DataTable from "../common/DataTable";
import { formatDate } from "../../utils/formatDate";
/**
 * AdminLeaveTable Component
 *
 * Displays filtered leave results based on
 * status and/or department.
 *
 * @param {Array} leaves - Filtered leave records
 */

const AdminLeaveTable = ({ leaves }) => {
  const columns = [
    {
      header: "Employee",
      render: (row) => row.userData?.name,
    },
    {
      header: "Department",
      render: (row) => row.userData?.department,
    },
    {
      header: "From",
      render: (row) => formatDate(row.fromDate),
    },
    {
      header: "To",
      render: (row) => formatDate(row.toDate),
    },
    {
      header: "Status",
      render: (row) => (
        <span
          className={`font-semibold ${
            row.status === "Approved"
              ? "text-green-600"
              : row.status === "Rejected"
                ? "text-red-600"
                : "text-yellow-600"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <DataTable
      title="Filtered Leave Results"
      columns={columns}
      data={leaves}
      emptyMessage="No filtered leaves found"
    />
  );
};

export default AdminLeaveTable;
