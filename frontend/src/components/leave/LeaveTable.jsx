import { useEffect, useState } from "react";
import { getMyLeaves } from "../../services/leaveService";
import { formatDate } from "../../utils/formatDate";

/**
 * LeaveTable Component
 * Displays employee leave history in tabular format
 */
const LeaveTable = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const response = await getMyLeaves();
      setLeaves(response.data || []);
    } catch (error) {
      console.error("Error fetching leaves:", error);
    }
  };

  if (!leaves || leaves.length === 0) {
    return (
      <div className="bg-white p-4 shadow rounded-lg mt-6">
        <p className="text-gray-500 text-center">No leave records found</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">My Leave History</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3 border">Leave Type</th>
              <th className="p-3 border">From</th>
              <th className="p-3 border">To</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {leaves.map((leave) => (
              <tr
                key={leave._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 border font-medium">{leave.leaveType}</td>

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveTable;
