import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  const navigate = useNavigate(); 
  const [rollNo, setRollNo] = useState('');
  const [academic, setAcademic] = useState(0);
  const [hostelbus, setHostelBus] = useState(0);

  const handleUpdateFee = async () => {
    try {
      const response = await axios.post('http://localhost:3001/updateFee', {
        rollNo,
        academic,
        hostelbus,
      });

      if (response.data.status) {
        alert('Fee details updated successfully');
      } else {
        alert('Failed to update fee details');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleAddStudent = () => {
    navigate('/addStudent');
  };
  const handleAddFeeDetails = () => {
    navigate('/addFeeDetails');
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel - Update Fee Details</h1>
      <label>
        Roll No:
        <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
      </label>
      <label>
        Academic Fee:
        <input type="number" value={academic} onChange={(e) => setAcademic(e.target.value)} />
      </label>
      <label>
        Hostel/Bus Fee:
        <input type="number" value={hostelbus} onChange={(e) => setHostelBus(e.target.value)} />
      </label>
      <button onClick={handleUpdateFee}>Update Fee Details</button>

      <button onClick={handleAddStudent}>Add Student</button>
      <button onClick={handleAddFeeDetails}>Add Fee Details</button>
    </div>
  );
};

export default AdminPanel;
