function AttendanceRecords({ records = [] }) {
  if (records.length === 0) {
    return (
      <div className="attendance-records-empty">
        <p>No attendance records available.</p>
      </div>
    )
  }

  return (
    <div className="attendance-records">
      {records.map((record, index) => (
        <div
          className="attendance-record"
          key={record._id || `${record.studentId}-${record.date || index}`}
        >
          <div className="attendance-record-info">
            <span className="attendance-record-student">
              {record.studentName || record.studentId || 'Unknown student'}
            </span>

            {record.date && (
              <span className="attendance-record-date">
                {record.date}
              </span>
            )}
          </div>

          <span
            className={`attendance-record-status attendance-record-status-${String(
              record.status || 'Unknown'
            ).toLowerCase()}`}
          >
            {record.status || 'Unknown'}
          </span>
        </div>
      ))}
    </div>
  )
}

export default AttendanceRecords
