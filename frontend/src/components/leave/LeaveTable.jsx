import { useEffect, useState } from "react";
import { getMyLeaves } from "../../services/leaveService";
import { formatDate } from "../../utils/formatDate";
import DataTable from "../common/DataTable";

/**
 * LeaveTable Component
 *
 * Displays logged-in employee's leave history.
 *
 * Features:
 * - Date formatting
 * - Status color indicators
 * - Reusable DataTable integration
 */

const LeaveTable = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const response = await getMyLeaves();
      setLeaves(response?.data || []);
    } catch (error) {
      console.error("Error fetching leaves:", error);
    }
  };

  const columns = [
    {
      header: "Leave Type",
      accessor: "leaveType",
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
    <div className="mt-6">
      <DataTable
        title="My Leave History"
        columns={columns}
        data={leaves}
        emptyMessage="No leave records found"
      />
    </div>
  );
};

export default LeaveTable;
