

import { useEffect, useState } from "react";
import { getDepartmentAnalytics } from "../../services/adminService";
import DataTable from "../common/DataTable";

/**
 * DepartmentAnalytics Component
 *
 * Displays department-wise leave statistics.
 *
 * Shows:
 * - Approved leaves
 * - Pending leaves
 * - Rejected leaves
 * - Total leaves per department
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

  const columns = [
    { header: "Department", accessor: "_id" },
    { header: "Approved", accessor: "approved" },
    { header: "Pending", accessor: "pending" },
    { header: "Rejected", accessor: "rejected" },
    { header: "Total Leaves", accessor: "totalLeaves" },
  ];

  return (
    <DataTable
      title="Department Leave Analytics"
      columns={columns}
      data={analytics}
      emptyMessage="No department analytics available"
    />
  );
};

export default DepartmentAnalytics;
