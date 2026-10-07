const validateStudent = (req, res, next) => {
  const errors = {};
  const { name, studentId } = req.body || {};

  if (typeof name !== 'string' || !name.trim()) {
    errors.name = 'Name is required';
  }

  if (typeof studentId !== 'string' || !studentId.trim()) {
    errors.studentId = 'Student ID is required';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Student validation failed',
      errors
    });
  }

  req.body.name = name.trim();
  req.body.studentId = studentId.trim();

  next();
};

module.exports = validateStudent;
