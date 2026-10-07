import { useEffect, useState } from 'react'
import { getStudentAttendance } from '../api'
import AttendanceRecords from '../components/AttendanceRecords'
import '../styles/AttendanceRecordsPage.css'

function AttendanceRecordsPage({ students = [], onBack }) {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadRecords() {
      try {
        setLoading(true)

        const attendanceLists = await Promise.all(
          students.map((student) => getStudentAttendance(student._id))
        )

        const combinedRecords = attendanceLists.flat().map((record) => {
          const student = students.find(
            (item) => item._id === record.student
          )

          return {
            ...record,
            studentName: student?.name || record.student
          }
        })

        setRecords(combinedRecords)
      } catch (requestError) {
        setError(requestError.message)
      } finally {
        setLoading(false)
      }
    }

    if (students.length > 0) {
      loadRecords()
    } else {
      setRecords([])
      setLoading(false)
    }
  }, [students])

  return (
    <main className="attendance-records-page">
      <section className="attendance-records-card">
        <div className="attendance-records-header">
          <button type="button" onClick={onBack}>
            Back
          </button>
          <h1>Attendance Records</h1>
          <p>View recorded student attendance.</p>
        </div>

        {loading && <p>Loading attendance records...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && <AttendanceRecords records={records} />}
      </section>
    </main>
  )
}

export default AttendanceRecordsPage
