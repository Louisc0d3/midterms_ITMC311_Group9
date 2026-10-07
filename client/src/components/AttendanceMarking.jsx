import { useState } from 'react'
import '../styles/AttendanceMarking.css'

const ATTENDANCE_STATUSES = ['Present', 'Late', 'Absent']

function AttendanceMarking({ students = [], onSave }) {
  const [attendance, setAttendance] = useState({})
  const [message, setMessage] = useState('')

  function handleStatusChange(studentId, status) {
    setAttendance((current) => ({
      ...current,
      [studentId]: status,
    }))
    setMessage('')
  }

  function handleSave() {
    if (students.length === 0) {
      setMessage('No students are available to mark attendance.')
      return
    }

    const records = students.map((student) => ({
      studentId: student._id,
      status: attendance[student._id] || 'Absent',
    }))

    if (onSave) {
      onSave(records)
    }

    setMessage('Attendance is ready to be saved.')
  }

  return (
    <section className="attendance-marking">
      <header className="attendance-marking-header">
        <p className="attendance-marking-label">Teacher</p>
        <h1>Mark Attendance</h1>
        <p>Select an attendance status for each student.</p>
      </header>

      {students.length === 0 ? (
        <div className="attendance-empty">
          <p>No students are available to mark attendance.</p>
        </div>
      ) : (
        <>
          <div className="attendance-table-wrapper">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th scope="col">Student</th>
                  <th scope="col">Attendance Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>
                      <select
                        value={attendance[student._id] || 'Present'}
                        onChange={(event) =>
                          handleStatusChange(student._id, event.target.value)
                        }
                        aria-label={`Attendance status for ${student.name}`}
                      >
                        {ATTENDANCE_STATUSES.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="button"
            className="attendance-save-button"
            onClick={handleSave}
          >
            Save Attendance
          </button>
        </>
      )}

      {message && (
        <p className="attendance-message" role="status">
          {message}
        </p>
      )}
    </section>
  )
}

export default AttendanceMarking
