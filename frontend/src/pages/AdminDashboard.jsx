import { useEffect, useState } from "react";
import UserTable from "../components/admin/UserTable";
import DepartmentAnalytics from "../components/admin/DepartmentAnalytics";
import LeaveFilter from "../components/leave/LeaveFilter";
import AdminLeaveTable from "../components/admin/AdminLeaveTable";
import AdminLeaveApproval from "../components/admin/AdminLeaveApproval";
import LeaveBalance from "../components/leave/LeaveBalance";

import {
  getAllLeaves,
  getAllUsers,
  getDashboard,
} from "../services/adminService";
import Loader from "../components/common/Loader";

/**
 * AdminDashboard Component
 *
 * Main admin dashboard layout.
 * Fetches and displays:
 * - All users
 * - All leave requests
 * - Leave approval panel
 * - Leave statistics summary
 * - Department analytics
 *
 * Manages dashboard-level state and data initialization.
 */

const AdminDashboard = () => {
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  /**
   * Fetch all dashboard data
   */
  const initializeDashboard = async () => {
    try {
      const [usersRes, leavesRes, statsRes] = await Promise.all([
        getAllUsers(),
        getAllLeaves(),
        getDashboard(),
      ]);

      setUsers(usersRes?.data?.data || []);
      setLeaves(leavesRes?.data?.data || []);
      setStats(statsRes?.data || {});
    } catch (error) {
      console.error("Error loading dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeDashboard();
  }, []);

  /**
   * Refresh leaves after approval/rejection
   */
  const refreshLeaves = async () => {
    const response = await getAllLeaves();
    setLeaves(response?.data?.data || []);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <LeaveFilter onResults={setFilteredLeaves} />

      {/* Filtered Results */}
      {filteredLeaves.length > 0 && <AdminLeaveTable leaves={filteredLeaves} />}

      {/* Leave Approval Panel */}
      <AdminLeaveApproval leaves={leaves} refreshLeaves={refreshLeaves} />

      {/* Dashboard Stats */}
      <LeaveBalance
        summary={{
          totalLeaves: stats.totalLeaves || 0,
          approved: stats.approved || 0,
          pending: stats.pending || 0,
          rejected: stats.rejected || 0,
        }}
      />

      {/* Users */}
      <UserTable users={users} />

      {/* Department Analytics */}
      <DepartmentAnalytics />
    </div>
  );
};

export default AdminDashboard;
