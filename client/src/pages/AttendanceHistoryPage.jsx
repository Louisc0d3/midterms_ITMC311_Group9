import AttendanceHistory from '../components/AttendanceHistory';

function AttendanceHistoryPage() {
  const attendanceRecords = [];

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Attendance History
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            View your recorded attendance.
          </p>
        </div>

        <AttendanceHistory records={attendanceRecords} />
      </div>
    </main>
  );
}

export default AttendanceHistoryPage;
