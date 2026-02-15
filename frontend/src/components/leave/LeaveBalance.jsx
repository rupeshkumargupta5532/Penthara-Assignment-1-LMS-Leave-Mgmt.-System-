/**
 * LeaveBalance Component
 *
 * Displays leave summary statistics.
 *
 * Shows:
 * - Total leaves
 * - Approved leaves
 * - Pending leaves
 * - Rejected leaves
 *
 * @param {Object} summary - Leave statistics object
 */

const LeaveBalance = ({ summary }) => {
  const {
    totalLeaves = 0,
    approved = 0,
    pending = 0,
    rejected = 0,
  } = summary || {};

  const cards = [
    {
      title: "Total Leaves",
      value: totalLeaves,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Approved",
      value: approved,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Pending",
      value: pending,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Rejected",
      value: rejected,
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-6 mt-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`p-6 rounded-xl shadow-md ${card.color}`}
        >
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-3xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default LeaveBalance;
