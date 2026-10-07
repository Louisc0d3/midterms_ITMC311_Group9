function StudentList({ students = [] }) {
  if (students.length === 0) {
    return (
      <div className="student-list-empty">
        <p>No students available.</p>
      </div>
    )
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <div className="student-list-item" key={student._id}>
          <span className="student-list-name">{student.name}</span>
        </div>
      ))}
    </div>
  )
}

export default StudentList
