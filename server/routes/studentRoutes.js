const express = require('express');

const {
  getStudents,
  getStudentAttendance,
  getAttendanceSummary
} = require('../controllers/studentController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getStudents);
router.get('/:id/attendance/summary', authMiddleware, getAttendanceSummary);
router.get('/:id/attendance', authMiddleware, getStudentAttendance);

module.exports = router;
