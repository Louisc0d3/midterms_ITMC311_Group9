import AttendanceRecords from '../components/AttendanceRecords'
import '../styles/AttendanceRecordsPage.css'

function AttendanceRecordsPage() {
  const records = []

  return (
    <main className="attendance-records-page">
      <section className="attendance-records-card">
        <div className="attendance-records-header">
          <h1>Attendance Records</h1>
          <p>View recorded student attendance.</p>
        </div>

        <AttendanceRecords records={records} />
      </section>
    </main>
  )
}

export default AttendanceRecordsPage
