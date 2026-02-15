import { useState } from "react";
import { filterLeaves } from "../../services/adminService";
import Button from "../common/Button";
import Loader from "../common/Loader";

/**
 * LeaveFilter Component
 *
 * Allows admin to filter leave requests by:
 * - Status
 * - Department
 *
 * Returns filtered results to parent component.
 *
 * @param {Function} onResults - Callback to pass filtered leave data
 */

const LeaveFilter = ({ onResults }) => {
  const [filters, setFilters] = useState({
    status: "",
    department: "",
  });

  const [loading, setLoading] = useState(false);

  /**
   * Handles input change
   */
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  /**
   * Fetch filtered leaves from API
   */
  const handleFilter = async () => {
    try {
      setLoading(true);
      const response = await filterLeaves(filters.status, filters.department);
      onResults(response?.data?.data);
    } catch (error) {
      console.error("Error filtering leaves:", error);
      alert("Failed to filter leaves");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Reset filters
   */
  const handleReset = () => {
    setFilters({ status: "", department: "" });
    onResults([]);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Filter Leaves</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Status Dropdown */}
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

        {/* Department Input */}
        <input
          type="text"
          name="department"
          placeholder="Department (e.g., HR)"
          value={filters.department}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Buttons */}
        <div className="flex gap-2">
          <Button onClick={handleFilter} variant="primary">
            {loading ? <Loader /> : "Apply"}
          </Button>

          <Button onClick={handleReset} variant="danger">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeaveFilter;
