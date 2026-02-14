import LeaveForm from "../components/leave/LeaveForm";
import LeaveTable from "../components/leave/LeaveTable";

/**
 * Employee Dashboard
 */
const EmployeeDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <LeaveForm />
      <LeaveTable />
    </div>
  );
};

export default EmployeeDashboard;
