function AttendanceHistory({ records = [] }) {
  if (!records.length) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <p className="text-gray-600">
          No attendance records are available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Date
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {records.map((record) => (
            <tr key={record._id}>
              <td className="px-4 py-3 text-sm text-gray-700">
                {record.date || '—'}
              </td>

              <td className="px-4 py-3 text-sm font-medium text-gray-900">
                {record.status || '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceHistory;
