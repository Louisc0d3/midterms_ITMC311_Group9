import { useState } from 'react';

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
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">
          Student Login
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Sign in to view your attendance.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="username"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
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
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
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
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-500"
            />
          </div>

          {message && (
            <p role="status" className="text-sm text-gray-700">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-md bg-gray-900 px-4 py-2 font-medium text-white hover:bg-gray-700"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default StudentLoginPage;
