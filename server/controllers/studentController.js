const Student = require('../models/Student');

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

module.exports = {
  getStudents
};
