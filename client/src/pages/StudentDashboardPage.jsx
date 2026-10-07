import { useState } from 'react';

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
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <section className="rounded-lg bg-white p-6 shadow">
          <h1 className="text-2xl font-bold text-gray-900">
            Student Dashboard
          </h1>

          {user ? (
            <div className="mt-6">
              <p className="text-gray-600">
                Welcome,
              </p>

              <p className="mt-1 text-xl font-semibold text-gray-900">
                {user.username}
              </p>

              {user.role && (
                <p className="mt-2 text-sm text-gray-500">
                  Role: {user.role}
                </p>
              )}

              <p className="mt-6 text-gray-600">
                View your attendance history and attendance summary from your
                student account.
              </p>
            </div>
          ) : (
            <div className="mt-6 rounded-md border border-gray-200 p-4">
              <p className="font-medium text-gray-800">
                No student session found.
              </p>

              <p className="mt-1 text-sm text-gray-500">
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
