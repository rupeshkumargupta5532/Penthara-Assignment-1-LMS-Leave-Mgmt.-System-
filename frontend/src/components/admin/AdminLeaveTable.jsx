/**
 * Displays filtered leave results for admin
 */
const AdminLeaveTable = ({ leaves }) => {
  if (!leaves || leaves.length === 0) {
    return (
      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500 text-center">No filtered leaves found</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Filtered Leave Results</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Employee</th>
              <th className="p-3 border">Department</th>
              <th className="p-3 border">From</th>
              <th className="p-3 border">To</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((leave) => (
              <tr key={leave._id} className="border-t hover:bg-gray-50">
                <td className="p-3 border">{leave.userData?.name}</td>

                <td className="p-3 border">{leave.userData?.department}</td>

                <td className="p-3 border">{leave.fromDate}</td>

                <td className="p-3 border">{leave.toDate}</td>

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

export default AdminLeaveTable;
