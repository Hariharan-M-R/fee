const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT =  3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/fee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  rollNo: String,
  password: String,
  name: String,
}, { versionKey: false });

const Student = mongoose.model('student', studentSchema);


const FeeDetailsSchema = new mongoose.Schema({
  rollNo: String,
  name: String,
  academic: Number,
  hostelbus: Number,
}, { versionKey: false }); // Set versionKey to false

const FeeDetails = mongoose.model('feedetails', FeeDetailsSchema);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.post('/login', async (req, res) => {
  const { rollNo, password } = req.body;
  console.log(rollNo);
  console.log(password);
  const data = await Student.findOne({ rollNo, password });

  if (data != null) {
    res.json({ status: true, name: data.name, rollNo: data.rollNo });
  } else {
    res.json({ status: false });
  }
});

app.post('/FeeDetails', async (req, res) => {
  const { rollNo } = req.body;
  try {
    const data = await FeeDetails.findOne({ rollNo });
    if (data != null) {
      console.log(data)
      const { rollNo, name, academic, hostelbus } = data;
      res.json({ status: true, feeDetails:data });
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
});
app.post('/updateFee', async (req, res) => {
  const { rollNo, academic, hostelbus } = req.body; // Updated from academicFee and hostelBusFee

  try {
    const data = await FeeDetails.findOneAndUpdate(
      { rollNo },
      { academic, hostelbus }, // Updated from academicFee and hostelBusFee
      { new: true }
    );

    if (data != null) {
      res.json({ status: true });
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
});

const Admin = mongoose.model('admin', {
  email: String,
  password: String,
});

app.post('/AdminLogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const adminData = await Admin.findOne({ email, password });
    console.log(email)
    console.log(password)

    if (adminData != null) {
      res.json({ status: true, email: adminData.email });
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
});

app.post('/addStudent', async (req, res) => {
  const { rollNo, password, name } = req.body;

  try {
    const newStudent = new Student({ rollNo, password, name });
    await newStudent.save();

    res.json({ status: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
});

// server.js

app.post('/addFeeDetails', async (req, res) => {
  const { rollNo, name, academic, hostelbus } = req.body;

  try {
    const newFeeDetails = new FeeDetails({ rollNo, name, academic, hostelbus });
    await newFeeDetails.save();

    res.json({ status: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/fee', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const Student = mongoose.model('student', {
//   rollNo: String,
//   password: String,
// });

// const FeeDetails = mongoose.model('feedetails', {
//   rollNo: String,
//   name:String,
//   academicFee: Number,
//   hostelBusFee: Number,
// });

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });

// app.post('/login', async (req, res) => {
//   const { rollNo, password } = req.body;
//   const data = await Student.findOne({ rollNo, password });

//   if (data != null) {
//     res.json({ status: true });
//   } else {
//     res.json({ status: false });
//   }
// });

// app.post('/FeeDetails', async (req, res) => {
//   const { rollNo } = req.body;
//   const data = await FeeDetails.findOne({ rollNo });

//   if (data != null) {
//     res.json({ status: true, feeDetails: data });
//   } else {
//     res.json({ status: false });
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Hello from Node.js server!');
// });

