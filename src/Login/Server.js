const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/fee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Student = mongoose.model('student', {
  rollNo: String,
  password: String,
});

app.post('/Login', async (req, res) => {
  const { rollNo, password } = req.body;

  try {
    const student = await student.findOne({ rollNo, password });

    if (student) {
      res.json({ success: true, message: 'Login successful!' });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
