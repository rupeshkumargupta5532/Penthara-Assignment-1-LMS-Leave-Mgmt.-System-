import DataTable from "../common/DataTable";
import Button from "../common/Button";
import { updateLeaveByAdmin } from "../../services/adminService";
import { formatDate } from "../../utils/formatDate";

/**
 * AdminLeaveApproval Component
 *
 * Displays all leave requests for admin review.
 *
 * Features:
 * - Approve / Reject actions
 * - Status indicators
 * - Responsive action buttons
 * - Refresh after status update
 *
 * @param {Array} leaves - List of leave requests
 * @param {Function} refreshLeaves - Function to refresh leave data
 */

const AdminLeaveApproval = ({ leaves, refreshLeaves }) => {
  const handleUpdateStatus = async (leaveId, status) => {
    await updateLeaveByAdmin(leaveId, { status });
    refreshLeaves();
  };

  const columns = [
    { header: "Employee ID", render: (row) => row.user?.empId },
    { header: "Employee", render: (row) => row.user?.name },
    { header: "Department", render: (row) => row.user?.department },
    { header: "From", render: (row) => formatDate(row.fromDate) },
    { header: "To", render: (row) => formatDate(row.toDate) },
    {
      header: "Status",
      render: (row) => (
        <span
          className={`font-semibold px-2 ${
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
    {
      header: "Action",
      render: (row) =>
        row.status === "Pending" && (
          <div className="flex flex-col sm:flex-col md:flex-row gap-2">
            <Button
              variant="success"
              onClick={() => handleUpdateStatus(row._id, "Approved")}
              className="w-full md:w-auto"
            >
              Approve
            </Button>

            <Button
              variant="danger"
              onClick={() => handleUpdateStatus(row._id, "Rejected")}
              className="w-full md:w-auto"
            >
              Reject
            </Button>
          </div>
        ),
    },
  ];

  return (
    <DataTable
      title="Leave Approval Panel"
      columns={columns}
      data={leaves}
      emptyMessage="No leave requests found"
    />
  );
};

export default AdminLeaveApproval;
