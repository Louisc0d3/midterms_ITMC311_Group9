import StudentList from '../components/StudentList.jsx'
import '../styles/StudentListPage.css'

function StudentListPage() {
  const students = []

  return (
    <main className="student-list-page">
      <section className="student-list-container">
        <header className="student-list-header">
          <p className="student-list-label">Teacher</p>
          <h1>Student List</h1>
          <p>View the students whose attendance you will manage.</p>
        </header>

        <StudentList students={students} />
      </section>
    </main>
  )
}

export default StudentListPage
