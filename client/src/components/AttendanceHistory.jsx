import '../styles/StudentResponsive.css';

function AttendanceHistory({ records = [] }) {
  if (!records.length) {
    return (
      <div className="student-card">
        <p>No attendance records are available.</p>
      </div>
    );
  }

  return (
    <div className="student-table-wrap">
      <table className="student-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record) => (
            <tr key={record._id}>
              <td>{record.date || '—'}</td>
              <td>{record.status || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceHistory;
