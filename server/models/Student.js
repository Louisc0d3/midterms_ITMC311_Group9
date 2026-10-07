const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    studentId: {
      type: String,
      required: [true, 'Student ID is required'],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.models.Student ||
  mongoose.model('Student', studentSchema);
