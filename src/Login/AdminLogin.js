
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AdminLogin.css';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/AdminLogin', {
        email,
        password,
      });

      if (response.data.status) {
        setLoggedIn(true);
        alert('Login successful!');
        navigate('/AdminPanel');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="floating-box">
        <div className="heading">Admin Login</div>
        {loggedIn ? (
          <p>You are logged in as an admin.</p>
        ) : (
          <form>
            <label className='email'>
              Email: 
              <input
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className='pass'>
              Password:
              <input
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
