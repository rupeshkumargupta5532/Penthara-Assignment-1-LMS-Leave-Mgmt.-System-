import { useEffect, useState } from "react";
import { getDepartmentAnalytics } from "../../services/adminService";

/**
 * Department Leave Analytics
 * Displays leave statistics grouped by department
 */
const DepartmentAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await getDepartmentAnalytics();
      setAnalytics(response?.data || []);
    } catch (error) {
      console.error("Error fetching department analytics:", error);
    }
  };

  return (
    <div className="mt-6 bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Department Leave Analytics</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          {/* Table Headings */}
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3 border">Department</th>
              <th className="p-3 border">Approved</th>
              <th className="p-3 border">Pending</th>
              <th className="p-3 border">Rejected</th>
              <th className="p-3 border">Total Leaves</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {analytics.map((item) => (
              <tr
                key={item._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 border font-medium">{item._id}</td>

                <td className="p-3 border text-green-600 font-semibold">
                  {item.approved}
                </td>

                <td className="p-3 border text-yellow-600 font-semibold">
                  {item.pending}
                </td>

                <td className="p-3 border text-red-600 font-semibold">
                  {item.rejected}
                </td>

                <td className="p-3 border font-bold">{item.totalLeaves}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentAnalytics;
