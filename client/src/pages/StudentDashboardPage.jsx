import { useState } from 'react';
import '../styles/StudentResponsive.css';

function getStoredUser() {
  try {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      return null;
    }

    return JSON.parse(storedUser);
  } catch {
    return null;
  }
}

function StudentDashboardPage() {
  const [user] = useState(getStoredUser);

  return (
    <main className="student-page">
      <div className="student-container">
        <section className="student-card">
          <h1 className="student-heading">Student Dashboard</h1>

          {user ? (
            <div className="student-dashboard-content">
              <p>Welcome,</p>

              <h2>{user.username}</h2>

              {user.role && <p>Role: {user.role}</p>}

              <p className="student-subheading">
                View your attendance history and attendance summary from your
                student account.
              </p>
            </div>
          ) : (
            <div className="student-empty">
              <strong>No student session found.</strong>

              <p className="student-subheading">
                Please log in to access your student dashboard.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default StudentDashboardPage;
