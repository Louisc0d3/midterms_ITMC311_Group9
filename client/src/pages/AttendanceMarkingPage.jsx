import AttendanceMarking from '../components/AttendanceMarking.jsx'
import '../styles/AttendanceMarkingPage.css'

function AttendanceMarkingPage() {
  const students = []

  function handleSave(records) {
    console.log('Attendance records ready for API integration:', records)
  }

  return (
    <main className="attendance-marking-page">
      <AttendanceMarking
        students={students}
        onSave={handleSave}
      />
    </main>
  )
}

export default AttendanceMarkingPage
