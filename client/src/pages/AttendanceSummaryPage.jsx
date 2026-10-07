import AttendanceSummary from '../components/AttendanceSummary';
import '../styles/StudentResponsive.css';

function AttendanceSummaryPage() {
  const summary = {
    total: 0,
    present: 0,
    absent: 0,
  };

  return (
    <main className="student-page">
      <div className="student-container">
        <header className="student-section-header">
          <h1 className="student-heading">Attendance Summary</h1>

          <p className="student-subheading">
            Review an overview of your attendance.
          </p>
        </header>

        <AttendanceSummary
          total={summary.total}
          present={summary.present}
          absent={summary.absent}
        />
      </div>
    </main>
  );
}

export default AttendanceSummaryPage;
