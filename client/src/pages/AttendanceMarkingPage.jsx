import { useState } from 'react'
import { markAttendance } from '../api'
import AttendanceMarking from '../components/AttendanceMarking'
import '../styles/AttendanceMarkingPage.css'

function AttendanceMarkingPage({ students = [], onBack }) {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function handleSave(records) {
    setMessage('')
    setError('')

    try {
      const date = new Date().toISOString()

      await Promise.all(
        records.map((record) =>
          markAttendance(record.studentId, date, record.status.toLowerCase())
        )
      )

      setMessage('Attendance saved successfully.')
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return (
    <main className="attendance-marking-page">
      <section className="attendance-marking-card">
        <div className="attendance-marking-header">
          <button type="button" onClick={onBack}>
            Back
          </button>
          <h1>Mark Attendance</h1>
        </div>

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}

        <AttendanceMarking
          students={students}
          onSave={handleSave}
        />
      </section>
    </main>
  )
}

export default AttendanceMarkingPage
