const express = require('express');

const {
    markAttendance,
    updateAttendance,
    getAttendance
} = require('../controllers/attendanceController');

const router = express.Router();

router.post('/', markAttendance);
router.get('/', getAttendance);
router.put('/:id', updateAttendance);

module.exports = router;
