const Student = require('../models/Student');
const Attendance = require('../models/Attendance');

const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ name: 1 });

    return res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: {
        students
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve students',
      errors: null
    });
  }
};

const getStudentAttendance = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
        errors: null
      });
    }

    const attendance = await Attendance.find({
      student: req.params.id
    }).sort({ date: -1 });

    return res.status(200).json({
      success: true,
      message: 'Student attendance retrieved successfully',
      data: {
        attendance
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve student attendance',
      errors: null
    });
  }
};

const getAttendanceSummary = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
        errors: null
      });
    }

    const attendance = await Attendance.find({
      student: req.params.id
    });

    const summary = attendance.reduce(
      (totals, record) => {
        totals.total += 1;

        if (record.status === 'present') {
          totals.present += 1;
        } else if (record.status === 'absent') {
          totals.absent += 1;
        } else if (record.status === 'late') {
          totals.late += 1;
        }

        return totals;
      },
      {
        total: 0,
        present: 0,
        absent: 0,
        late: 0
      }
    );

    return res.status(200).json({
      success: true,
      message: 'Attendance summary retrieved successfully',
      data: {
        summary
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve attendance summary',
      errors: null
    });
  }
};

module.exports = {
  getStudents,
  getStudentAttendance,
  getAttendanceSummary
};
