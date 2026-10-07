const express = require('express');
const {
    markAttendance,
    updateAttendance
} = require('../controllers/attendanceController');

const router = express.Router();

router.post('/', markAttendance);
router.put('/:id', updateAttendance);

module.exports = router;
