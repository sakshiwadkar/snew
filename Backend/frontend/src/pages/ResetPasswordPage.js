import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './ResetPasswordPage.css';
const ResetPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = new URLSearchParams(location.search).get('email');
    const otp = new URLSearchParams(location.search).get('otp');

    const resetPassword = () => {
        if (password.length === 0 || confirmPassword.length === 0) {
            alert('Password fields cannot be blank.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        axios
            .post('http://127.0.0.1:5000/reset_password', { email, otp, password })
            .then((response) => {
                alert('Password reset successfully.');
                navigate('/login');
            })
            .catch((error) => {
                console.error(error);
                alert('An error occurred. Please try again later.');
            });
    };

    return (
        <div className="reset-password-container">
            <div className="form-container">
                <form>
                    <h2>Reset Password</h2>
                    <div className="form-group">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter new password"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="form-control"
                            placeholder="Confirm new password"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={resetPassword}
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
