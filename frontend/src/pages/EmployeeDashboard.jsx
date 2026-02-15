import { useEffect, useState } from "react";
import LeaveForm from "../components/leave/LeaveForm";
import LeaveTable from "../components/leave/LeaveTable";
import LeaveBalance from "../components/leave/LeaveBalance";
import { statsUser } from "../services/leaveService";

/**
 * EmployeeDashboard Component
 *
 * Main dashboard for employee users.
 *
 * Responsibilities:
 * - Fetch employee leave statistics
 * - Display leave balance summary
 * - Render leave application form
 * - Render leave history table
 *
 * Uses:
 * - LeaveForm
 * - LeaveBalance
 * - LeaveTable
 */

const EmployeeDashboard = () => {
  const [summary, setSummary] = useState();

  const fetchStats = async () => {
    try {
      const response = await statsUser();
      console.log("respon", response);
      setSummary(response.data);
    } catch (error) {
      console.error("Error fetching leave stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <LeaveForm />
      <LeaveBalance summary={summary} />
      <LeaveTable />
    </div>
  );
};

export default EmployeeDashboard;
