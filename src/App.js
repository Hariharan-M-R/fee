
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage/HomePage.js';
import Login from './Login/StudentLogin.js';
import Adminlogin from './Login/AdminLogin.js';
import Contactus from './AboutUs/Contactus';
import Footer from './Footer';
import { UserProvider } from './UserContext'; // Import UserProvider
import FeeDetails from './FeeDetails/FeeDetails.js';
import AdminPanel from './Admin_panel/AdminPanel';
import AddStudent from './AddStudent/AddStudent';
import AddFeedetails from './AddFeeDetails/AddFeedetails';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Adminlogin' element={<Adminlogin />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/FeeDetails' element={<FeeDetails />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/addFeeDetails" element={<AddFeedetails/>} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
