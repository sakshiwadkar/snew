import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'; // Import CSS for custom styling



export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/register', {
            email: email,
            password: password,
            mobilenumber: mobileNumber,
            address: address
        })
        .then(function (response) {
            console.log(response);
            navigate('/login');
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response && error.response.status === 401) {
                alert('Invalid credentials');
            } else {
                alert('An error occurred. Please try again later.');
            }
        });
    };

    return (
        <div className="register-page-container">
            <div className="form-container">
                <form className="register-form">
                    <h2>Create Your Account</h2>

                    <div className="form-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter a valid email address"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="form-control"
                            placeholder="Enter your mobile number"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            placeholder="Enter your address"
                        />
                    </div>

                   

                    <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={registerUser}
                    >
                        Sign Up
                    </button>

                    <p className="login-link">Login to your account <a href="/login">Login</a></p>
                </form>
            </div>

           
        </div>
    );
}
