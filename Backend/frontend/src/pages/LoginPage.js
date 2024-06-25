import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import './LoginPage.css'; // Import CSS for custom styling

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const logInUser = () => {
        if (email.length === 0 || password.length === 0) {
            alert('Email and password cannot be blank.');
            return;
        }

        axios
            .post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                const accessToken = response.data.access_token;
                localStorage.setItem('accessToken', accessToken); // Store JWT token in local storage
                navigate('/Home'); // Navigate to the dashboard
            })
            .catch(function (error) {
                console.log(error);
                if (error.response && error.response.status === 401) {
                    alert('Invalid email or password.');
                } else {
                    alert('An error occurred. Please try again later.');
                }
            });
    };

    return (
        <div className="login-page-container">
            <div className="form-container">
                <form>
                    <h2>Log Into Your Account</h2>
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
                    <div className="text-center mt-4">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={logInUser}
                        >
                            Login 
                        </button>
                    </div>
                    <p className="register-link">Forget password <Link to="/forgot">Click here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
