import { useState } from "react";
import { applyLeave } from "../../services/leaveService";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { formatDate } from "../../utils/formatDate";

/**
 * Leave Application Form
 * Includes date validation (fromDate < toDate)
 */
const LeaveForm = () => {
  const [formData, setFormData] = useState({
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const [error, setError] = useState("");

  /**
   * Handle input change
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError(""); // clear error when user edits
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fromDate, toDate } = formData;

    //  Date Validation
    if (formatDate(fromDate) > formatDate(toDate)) {
      setError("From Date must be earlier than To Date");
      return;
    }

    try {
      await applyLeave(formData);

      alert("Leave Applied Successfully");

      setFormData({
        leaveType: "",
        fromDate: "",
        toDate: "",
        reason: "",
      });
    } catch (error) {
      console.error("Error applying leave:", error);
      alert("Error applying leave");
    }
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Apply Leave</h2>

      <form onSubmit={handleSubmit}>
        {/* Leave Type Dropdown */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Leave Type</label>
          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Leave Type</option>
            <option value="Sick">Sick</option>
            <option value="Casual">Casual</option>
            <option value="Paid">Paid</option>
          </select>
        </div>

        <InputField
          label="From Date"
          type="date"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleChange}
        />

        <InputField
          label="To Date"
          type="date"
          name="toDate"
          value={formData.toDate}
          onChange={handleChange}
        />

        {/* Error Message */}
        {error && <p className="text-red-600 mb-4 font-medium">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 font-medium">Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
            rows="3"
          />
        </div>

        <Button type="submit" variant="success">
          Submit Leave
        </Button>
      </form>
    </div>
  );
};

export default LeaveForm;
