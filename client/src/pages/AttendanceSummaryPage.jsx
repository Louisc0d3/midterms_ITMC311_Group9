import AttendanceSummary from '../components/AttendanceSummary';

function AttendanceSummaryPage() {
  const summary = {
    total: 0,
    present: 0,
    absent: 0,
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Attendance Summary
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Review an overview of your attendance.
          </p>
        </div>

        <AttendanceSummary
          total={summary.total}
          present={summary.present}
          absent={summary.absent}
        />
      </div>
    </main>
  );
}

export default AttendanceSummaryPage;
