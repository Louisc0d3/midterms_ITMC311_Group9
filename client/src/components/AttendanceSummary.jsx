function AttendanceSummary({
  total = 0,
  present = 0,
  absent = 0,
}) {
  const attendanceRate =
    total > 0 ? Math.round((present / total) * 100) : 0;

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm font-medium text-gray-500">
          Total Records
        </p>

        <p className="mt-2 text-3xl font-bold text-gray-900">
          {total}
        </p>
      </div>

      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm font-medium text-gray-500">
          Present
        </p>

        <p className="mt-2 text-3xl font-bold text-gray-900">
          {present}
        </p>
      </div>

      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm font-medium text-gray-500">
          Absent
        </p>

        <p className="mt-2 text-3xl font-bold text-gray-900">
          {absent}
        </p>
      </div>

      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm font-medium text-gray-500">
          Attendance Rate
        </p>

        <p className="mt-2 text-3xl font-bold text-gray-900">
          {attendanceRate}%
        </p>
      </div>
    </section>
  );
}

export default AttendanceSummary;
