const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            required: true
        },

        date: {
            type: Date,
            required: true
        },

        status: {
            type: String,
            enum: ['present', 'absent', 'late'],
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Prevent the same student from having more than one
// attendance record for the same date.
attendanceSchema.index(
    { student: 1, date: 1 },
    { unique: true }
);

module.exports = mongoose.model('Attendance', attendanceSchema);