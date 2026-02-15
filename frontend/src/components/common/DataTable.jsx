/**
 * Reusable DataTable Component
 *
 * @param {Array} columns - Array of column definitions
 * @param {Array} data - Table data
 * @param {String} title - Optional table title
 * @param {String} emptyMessage - Message when no data
 */
const DataTable = ({ columns, data, title, emptyMessage }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-4 shadow rounded-lg">
        <p className="text-gray-500 text-center">
          {emptyMessage || "No data found"}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr className="text-left">
              {columns.map((col) => (
                <th key={col.header} className="p-3 border">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={row._id || rowIndex}
                className="border-t hover:bg-gray-50 transition"
              >
                {columns.map((col) => (
                  <td key={col.header} className="p-3 border">
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
