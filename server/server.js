const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes'); // STU-BE-02

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use('/api/students', studentRoutes); // STU-BE-02

app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Server is running',
        data: {}
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});