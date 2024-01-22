import React, { useState, useEffect } from 'react';
import './FeeDetails.css';
import axios from 'axios';
import { useUser } from '../UserContext';

const FeeDetails = () => {
  const { user } = useUser();
  const [feeDetails, setFeeDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const rollNo = user;

        try {
          const feeDetailsResponse = await axios.post('http://localhost:3001/FeeDetails', { rollNo });
          console.log(feeDetailsResponse.data.feeDetails);
          if (feeDetailsResponse.data.status) {
            setFeeDetails(feeDetailsResponse.data.feeDetails);
          } else {
            console.log('Fee details not found');
          }
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="fee-details-page">
      <h1>Fee Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {user ? (
            <div className="floating-container">
              <div className="user-details">
                <div className="left-corner">Roll No: {feeDetails.rollNo}</div>
                <div className="right-corner">Name: {feeDetails.name}</div>
              </div>

              <ul className="fee-list">
                <li>
                  Academic Fee: <span>{feeDetails.academic}</span>
                </li>
                <li>
                  Hostel/Bus Fee: <span>{feeDetails.hostelbus}</span>
                </li>
                {/* Display additional details here */}
                <li>
                  Total Fee: <span>{feeDetails.academic+feeDetails.hostelbus}</span>
                </li>
              </ul>
            </div>
          ) : (
            <p>User not logged in.</p>
          )}
        </>
      )}
    </div>
  );
};

export default FeeDetails;

