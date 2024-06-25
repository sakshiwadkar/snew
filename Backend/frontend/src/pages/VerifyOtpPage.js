// VerifyOtpPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './VerifyOtpPage.css'; 
const VerifyOtpPage = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = new URLSearchParams(location.search).get('email');

    const verifyOtp = () => {
        if (otp.length === 0) {
            alert('OTP cannot be blank.');
            return;
        }

        axios
            .post('http://127.0.0.1:5000/verify-otp', { email, otp })
            .then((response) => {
                alert('OTP verified successfully.');
                // Navigate to reset password page
                navigate(`/reset-password?email=${email}&otp=${otp}`);
            })
            .catch((error) => {
                console.error(error);
                alert('Invalid OTP. Please try again.');
            });
    };

    return (
        <div className="verify-otp-container">
            <div className="form-container">
                <form>
                    <h2>Verify OTP</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="form-control"
                            placeholder="Enter OTP"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={verifyOtp}
                        >
                            Verify OTP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtpPage;
