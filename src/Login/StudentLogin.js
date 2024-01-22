import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentLogin.css'; 
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const Login = () => {
  const {updateUser} = useContext(UserContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const rollNo = username;

    try {
      const response = await axios.post('http://localhost:3001/login', { rollNo, password });
      const data = response.data;
      console.log(data);
      if (data.status) {
        setLoggedIn(true);
        alert('Login successful!');
        updateUser(data.rollNo)
        navigate('/FeeDetails'); 
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="floating-box">
        <div className="heading">Login</div>
        {loggedIn ? (
          <p>You are logged in.</p>
        ) : (
          <form>
            <label className="username">
              Roll-No:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="password">
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

export default Login;
