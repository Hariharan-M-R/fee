
import React, { useState } from 'react';
import axios from 'axios';
import './AddFeedetails.css'

const AddFeedetails = () => {
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [academic, setAcademic] = useState(0);
  const [hostelbus, setHostelBus] = useState(0);

  const handleAddFeeDetails = async () => {
    try {
      const response = await axios.post('http://localhost:3001/addFeeDetails', {
        rollNo,
        name,
        academic,
        hostelbus,
      });

      if (response.data.status) {
        alert('Fee details added successfully');
      } else {
        alert('Failed to add fee details');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="add-feedetails">
      <h1>Add Fee Details</h1>
      <label>
        Roll No:
        <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Academic Fee:
        <input type="number" value={academic} onChange={(e) => setAcademic(e.target.value)} />
      </label>
      <label>
        Hostel/Bus Fee:
        <input type="number" value={hostelbus} onChange={(e) => setHostelBus(e.target.value)} />
      </label>
      <button onClick={handleAddFeeDetails}>Add Fee Details</button>
    </div>
  );
};

export default AddFeedetails;
