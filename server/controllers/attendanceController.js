const Attendance = require('../models/Attendance');

const markAttendance = async (req, res) => {
    try {
        const { student, date, status } = req.body;

        if (!student || !date || !status) {
            return res.status(400).json({
                success: false,
                message: 'Student, date, and status are required',
                data: {}
            });
        }

        const validStatuses = ['present', 'absent', 'late'];

        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Status must be present, absent, or late',
                data: {}
            });
        }

        const attendance = await Attendance.create({
            student,
            date,
            status
        });

        return res.status(201).json({
            success: true,
            message: 'Attendance marked successfully',
            data: attendance
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to mark attendance',
            data: {}
        });
    }
};

module.exports = {
    markAttendance
};
