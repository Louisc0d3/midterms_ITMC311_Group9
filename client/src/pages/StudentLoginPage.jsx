import { useState } from 'react';
import '../styles/StudentResponsive.css';

function StudentLoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.username.trim() || !formData.password.trim()) {
      setMessage('Username and password are required.');
      return;
    }

    setMessage('Student login form is ready.');
  };

  return (
    <main className="student-page">
      <div className="student-container student-container--narrow">
        <section className="student-card">
          <h1 className="student-heading">Student Login</h1>

          <p className="student-subheading">
            Sign in to view your attendance.
          </p>

          <form onSubmit={handleSubmit} className="student-form">
            <div className="student-field">
              <label htmlFor="username" className="student-label">
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                required
                placeholder="Enter username"
                className="student-input"
              />
            </div>

            <div className="student-field">
              <label htmlFor="password" className="student-label">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                placeholder="Enter password"
                className="student-input"
              />
            </div>

            {message && (
              <p role="status" className="student-message">
                {message}
              </p>
            )}

            <button type="submit" className="student-button">
              Login
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default StudentLoginPage;
