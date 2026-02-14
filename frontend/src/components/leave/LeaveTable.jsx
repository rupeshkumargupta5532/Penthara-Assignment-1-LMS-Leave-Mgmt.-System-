import { useEffect, useState } from "react";
import { getMyLeaves } from "../../services/leaveService";

/**
 * Displays leave history table
 */
const LeaveTable = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    const response = await getMyLeaves();
    setLeaves(response.data);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">My Leaves</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <tr key={leave._id} className="text-center border-t">
              <td>{leave.leaveType}</td>
              <td>{leave.fromDate}</td>
              <td>{leave.toDate}</td>
              <td>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveTable;
