import AttendanceHistory from '../components/AttendanceHistory';
import '../styles/StudentResponsive.css';

function AttendanceHistoryPage() {
  const attendanceRecords = [];

  return (
    <main className="student-page">
      <div className="student-container">
        <header className="student-section-header">
          <h1 className="student-heading">Attendance History</h1>

          <p className="student-subheading">
            View your recorded attendance.
          </p>
        </header>

        <AttendanceHistory records={attendanceRecords} />
      </div>
    </main>
  );
}

export default AttendanceHistoryPage;
