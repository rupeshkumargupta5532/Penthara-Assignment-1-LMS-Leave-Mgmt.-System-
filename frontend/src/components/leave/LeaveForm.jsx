import { useState } from "react";
import { applyLeave } from "../../services/leaveService";

/**
 * Leave Application Form
 */
const LeaveForm = () => {
  const [formData, setFormData] = useState({
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await applyLeave(formData);
      alert("Leave Applied Successfully");
    } catch (error) {
      console.error(error);
      alert("Error applying leave");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-6 rounded-lg"
    >
      <h2 className="text-xl font-bold mb-4">Apply Leave</h2>

      <input
        type="text"
        placeholder="Leave Type"
        onChange={(e) =>
          setFormData({ ...formData, leaveType: e.target.value })
        }
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="date"
        onChange={(e) =>
          setFormData({ ...formData, fromDate: e.target.value })
        }
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="date"
        onChange={(e) =>
          setFormData({ ...formData, toDate: e.target.value })
        }
        className="w-full mb-3 p-2 border rounded"
      />

      <textarea
        placeholder="Reason"
        onChange={(e) =>
          setFormData({ ...formData, reason: e.target.value })
        }
        className="w-full mb-3 p-2 border rounded"
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default LeaveForm;
