import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const sendOtp = () => {
        if (email.length === 0) {
            alert('Email cannot be blank.');
            return;
        }

        axios
            .post('http://127.0.0.1:5000/forgot', { email })
            .then((response) => {
                alert('OTP has been sent to your email.');
                window.location.href = `/verify-otp?email=${email}`;
            })
            .catch((error) => {
                console.error(error);
                alert('An error occurred. Please try again later.');
            });
    };

    return (
        <div className="forgot-password-container">
            <div className="form-container">
                <form>
                    <h2>Forgot Password</h2>
                    <div className="form-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={sendOtp}
                        >
                            Send OTP
                        </button>
                    </div>
                    <p className="login-link text-center mt-3">
                        Remember your password? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
