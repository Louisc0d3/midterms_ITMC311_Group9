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

const updateAttendance = async (req, res) => {
    try {
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({
                success: false,
                message: 'Status is required',
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

        const attendance = await Attendance.findByIdAndUpdate(
            req.params.id,
            { status },
            {
                new: true,
                runValidators: true
            }
        );

        if (!attendance) {
            return res.status(404).json({
                success: false,
                message: 'Attendance record not found',
                data: {}
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Attendance updated successfully',
            data: attendance
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to update attendance',
            data: {}
        });
    }
};

module.exports = {
    markAttendance,
    updateAttendance
};
