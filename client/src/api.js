const API_BASE_URL = 'http://localhost:5000/api'

async function request(path, options = {}) {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    }
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Request failed')
  }

  return data
}

export async function login(email, password) {
  const result = await request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })

  if (result.data?.token) {
    localStorage.setItem('token', result.data.token)
    localStorage.setItem('user', JSON.stringify(result.data.user))
  }

  return result
}

export async function getStudents() {
  const result = await request('/students')
  return result.data?.students || []
}

export async function markAttendance(student, date, status) {
  const result = await request('/attendance', {
    method: 'POST',
    body: JSON.stringify({
      student,
      date,
      status
    })
  })

  return result.data
}

export async function getStudentAttendance(studentId) {
  const result = await request(`/students/${studentId}/attendance`)
  return result.data?.attendance || []
}

export function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem('token'))
}
