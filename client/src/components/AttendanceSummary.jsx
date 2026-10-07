import '../styles/StudentResponsive.css';

function AttendanceSummary({
  total = 0,
  present = 0,
  absent = 0,
}) {
  const attendanceRate =
    total > 0 ? Math.round((present / total) * 100) : 0;

  return (
    <section className="student-summary-grid">
      <div className="student-summary-card">
        <p className="student-summary-label">Total Records</p>
        <p className="student-summary-value">{total}</p>
      </div>

      <div className="student-summary-card">
        <p className="student-summary-label">Present</p>
        <p className="student-summary-value">{present}</p>
      </div>

      <div className="student-summary-card">
        <p className="student-summary-label">Absent</p>
        <p className="student-summary-value">{absent}</p>
      </div>

      <div className="student-summary-card">
        <p className="student-summary-label">Attendance Rate</p>
        <p className="student-summary-value">{attendanceRate}%</p>
      </div>
    </section>
  );
}

export default AttendanceSummary;
