import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Contactus.css';

function ContactUs() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [mobileNumber, setMobileNumber] = useState('');
const [address, setAddress] = useState('');
const [message, setMessage] = useState('');
const [submitting, setSubmitting] = useState(false);
const [error, setError] = useState('');
const navigate = useNavigate();
const contactusUser = () => {
    setSubmitting(true);
    axios.post('http://127.0.0.1:5000/contactus', {
        name: name,
        email: email,
        mobilenumber: mobileNumber,
        address: address,
        message: message
    })
        .then(function (response) {
            console.log(response);
            setSubmitting(false);
            navigate('/Contactus');
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
    <div className="contact-us-page">
        <div className="contact-info">
            <div>
                <iframe                        
                    title="Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6787233958926!2d73.89947507103096!3d18.54341502994423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11abf26f343%3A0xb1c7f997b16b5a61!2sRegus%20-%20Pune%2C%20Kalyani%20Nagar!5e0!3m2!1sen!2sin!4v1712827631806!5m2!1sen!2sin"
                    width="650"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        <div className="form-container">
            <form className="enquiry-form">
                <h2>Send Your Message</h2>
                {error && <div className="error">{error}</div>}
                <div className="form-group">
                    <input
                        type="text"
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
                    onClick={contactusUser}
                    disabled={submitting}
                >
                    {submitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    </div>
);
}

export default ContactUs;