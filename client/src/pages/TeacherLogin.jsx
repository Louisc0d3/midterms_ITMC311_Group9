import { useState } from 'react'
import '../styles/TeacherLogin.css'

function TeacherLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSubmitted(false)

    if (!username.trim() || !password) {
      setError('Please enter your username and password.')
      return
    }

    setSubmitted(true)
  }

  return (
    <main className="teacher-login-page">
      <section className="teacher-login-card" aria-labelledby="teacher-login-title">
        <div className="teacher-login-header">
          <p className="teacher-login-label">Student Attendance System</p>
          <h1 id="teacher-login-title">Teacher Login</h1>
          <p>Sign in to manage student attendance.</p>
        </div>

        <form className="teacher-login-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              placeholder="Enter your username"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <p className="login-message login-error" role="alert">
              {error}
            </p>
          )}

          {submitted && (
            <p className="login-message login-success" role="status">
              Login form submitted successfully.
            </p>
          )}

          <button type="submit" className="teacher-login-button">
            Login
          </button>
        </form>
      </section>
    </main>
  )
}

export default TeacherLogin
