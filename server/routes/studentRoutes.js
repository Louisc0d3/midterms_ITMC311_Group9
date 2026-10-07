const express = require('express');

const {
  getStudents,
  getStudentAttendance
} = require('../controllers/studentController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getStudents);
router.get('/:id/attendance', authMiddleware, getStudentAttendance);

module.exports = router;
