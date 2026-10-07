import { useState } from 'react'
import { login } from '../api'
import '../styles/TeacherLogin.css'

function TeacherLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Email and password are required.')
      return
    }

    try {
      setLoading(true)
      const result = await login(email, password)

      if (result.data?.user?.role && result.data.user.role !== 'user') {
        setError('Login successful.')
      }

      onLoginSuccess?.(result.data.user)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="teacher-login-page">
      <section className="teacher-login-card">
        <h1>Teacher Login</h1>
        <p>Sign in to manage student attendance.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="teacher-email">Email</label>
          <input
            id="teacher-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="teacher-password">Password</label>
          <input
            id="teacher-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
          />

          {error && <p className="teacher-login-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default TeacherLogin
