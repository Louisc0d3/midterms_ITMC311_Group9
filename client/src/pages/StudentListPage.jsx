import { useEffect, useState } from 'react'
import { getStudents, logout } from '../api'
import StudentList from '../components/StudentList'
import '../styles/StudentListPage.css'

function StudentListPage({ onLogout, onSelectAttendance }) {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadStudents() {
      try {
        setLoading(true)
        const data = await getStudents()
        setStudents(data)
      } catch (requestError) {
        setError(requestError.message)
      } finally {
        setLoading(false)
      }
    }

    loadStudents()
  }, [])

  function handleLogout() {
    logout()
    onLogout?.()
  }

  return (
    <main className="student-list-page">
      <section className="student-list-card">
        <div className="student-list-header">
          <div>
            <h1>Student List</h1>
            <p>Select a student to manage attendance.</p>
          </div>

          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {loading && <p>Loading students...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <>
            <StudentList students={students} />

            {students.length > 0 && (
              <div className="student-list-actions">
                <button
                  type="button"
                  onClick={() => onSelectAttendance?.(students)}
                >
                  Mark Attendance
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  )
}

export default StudentListPage
