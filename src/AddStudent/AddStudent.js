import React, { useState } from 'react';
import axios from 'axios';
import './AddStudent.css'

const AddStudent = () => {
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAddStudent = async () => {
    try {
      const response = await axios.post('http://localhost:3001/addStudent', {
        rollNo,
        password,
        name,
      });

      if (response.data.status) {
        alert('Student added successfully');
      } else {
        alert('Failed to add student');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="add-student">
      <h1>Add Student</h1>
      <label>
        Roll No:
        <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default AddStudent;
