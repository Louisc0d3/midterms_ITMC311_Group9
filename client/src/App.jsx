import { useState } from 'react'
import TeacherLogin from './pages/TeacherLogin'
import StudentListPage from './pages/StudentListPage'
import AttendanceMarkingPage from './pages/AttendanceMarkingPage'
import AttendanceRecordsPage from './pages/AttendanceRecordsPage'
import { isAuthenticated, logout } from './api'

function App() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated())
  const [page, setPage] = useState('students')
  const [students, setStudents] = useState([])

  if (!authenticated) {
    return (
      <TeacherLogin
        onLoginSuccess={() => {
          setAuthenticated(true)
          setPage('students')
        }}
      />
    )
  }

  if (page === 'attendance') {
    return (
      <AttendanceMarkingPage
        students={students}
        onBack={() => setPage('students')}
      />
    )
  }

  if (page === 'records') {
    return (
      <AttendanceRecordsPage
        students={students}
        onBack={() => setPage('students')}
      />
    )
  }

  return (
    <div>
      <StudentListPage
        onLogout={() => {
          logout()
          setAuthenticated(false)
        }}
        onSelectAttendance={(loadedStudents) => {
          setStudents(loadedStudents)
          setPage('attendance')
        }}
      />

      <div style={{ textAlign: 'center', padding: '0 24px 32px' }}>
        <button type="button" onClick={() => setPage('records')}>
          View Attendance Records
        </button>
      </div>
    </div>
  )
}

export default App
