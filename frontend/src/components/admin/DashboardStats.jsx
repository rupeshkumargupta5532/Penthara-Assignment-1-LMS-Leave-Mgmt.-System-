import { useEffect, useState } from "react";
import { getDashboard } from "../../services/adminService";

/**
 * Admin Dashboard Statistics
 * Displays leave count grouped by status
 */
const DashboardStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await getDashboard();
      setStats(response?.data || []);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((item) => (
        <div key={item._id} className="bg-white shadow rounded p-4 text-center">
          <h3 className="text-lg font-bold capitalize">{item._id}</h3>
          <p className="text-2xl">{item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
