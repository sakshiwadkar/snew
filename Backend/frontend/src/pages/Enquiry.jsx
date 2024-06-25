import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Enquiry() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const enquiryUser = () => {
        setSubmitting(true);
        axios.post('http://127.0.0.1:5000/enquiry', {
            name:name,
            email: email,
            mobilenumber: mobileNumber,
            address: address,
            message:message

        })
        .then(function (response) {
            console.log(response);
            setSubmitting(false);
            navigate('/Home');
            // Show success message to the user
            alert('submitted successfully!');
        })
        .catch(function (error) {
            console.log(error);
            setSubmitting(false);
            if (error.response && error.response.status === 409) {
                setError('Email already exists');
            } else {
                setError('An error occurred. Please try again later.');
            }
        });
    };

    return (
        <div className="register-page-container">
            <div className="form-container">
                <form className="register-form">
                    <h2>Enquiry Form</h2>
                    {error && <div className="error">{error}</div>}
                    <div className="form-group">
                        <input
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            placeholder="Enter a valid name"
                        />
                    </div>
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
                    <div className="form-group">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="form-control"
                            placeholder="Enter your message"
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={enquiryUser}
                        disabled={submitting}
                    >
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
}