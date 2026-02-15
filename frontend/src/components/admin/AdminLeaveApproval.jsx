import { updateLeaveByAdmin } from "../../services/adminService";
import { formatDate } from "../../utils/formatDate";

/**
 * AdminLeaveApproval Component
 * Displays leave requests with Approve / Reject buttons
 */
const AdminLeaveApproval = ({ leaves, refreshLeaves }) => {
  const handleUpdateStatus = async (leaveId, status) => {
    try {
      await updateLeaveByAdmin(leaveId, { status });
      refreshLeaves(); // refresh data after update
    } catch (error) {
      console.error("Error updating leave:", error);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Leave Approval Panel</h2>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">EmployeeID</th>
              <th className="p-3 border">Employee</th>
              <th className="p-3 border">Department</th>
              <th className="p-3 border">From</th>
              <th className="p-3 border">To</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((leave) => (
              <tr key={leave._id} className="border-t">
                <td className="p-3 border">{leave.user?.empId}</td>
                <td className="p-3 border">{leave.user?.name}</td>

                <td className="p-3 border">{leave.user?.department}</td>

                <td className="p-3 border">{formatDate(leave.fromDate)}</td>

                <td className="p-3 border">{formatDate(leave.toDate)}</td>

                <td
                  className={`p-3 border font-semibold ${
                    leave.status === "Approved"
                      ? "text-green-600"
                      : leave.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                  }`}
                >
                  {leave.status}
                </td>

                <td className="p-3 border space-x-2">
                  {leave.status === "Pending" && (
                    <>
                      <button
                        onClick={() =>
                          handleUpdateStatus(leave._id, "Approved")
                        }
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          handleUpdateStatus(leave._id, "Rejected")
                        }
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminLeaveApproval;
