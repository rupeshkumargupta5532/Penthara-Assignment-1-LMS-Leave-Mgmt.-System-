import DashboardStats from "../components/admin/DashboardStats";
import UserTable from "../components/admin/UserTable";
import DepartmentAnalytics from "../components/admin/DepartmentAnalytics";
import { useState } from "react";
import LeaveFilter from "../components/leave/LeaveFilter";
import AdminLeaveTable from "../components/admin/AdminLeaveTable";
import Button from "../components/common/Button";
/**
 * Admin Dashboard Page
 */
const AdminDashboard = () => {
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  console.log("filetered", filteredLeaves);
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      
      <LeaveFilter onResults={setFilteredLeaves} />
      <AdminLeaveTable leaves={filteredLeaves} />
      <DashboardStats />
      <UserTable />
      <DepartmentAnalytics />
    </div>
  );
};

export default AdminDashboard;
