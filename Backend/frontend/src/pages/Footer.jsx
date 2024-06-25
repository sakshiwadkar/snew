import React, { useState } from 'react';
import './Footer.css';
import Modal from 'react-bootstrap/Modal';
import Enquiry from './Enquiry'; // Import the Enquiry component

export default function Footer() {
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);

    const handleShowEnquiryModal = () => setShowEnquiryModal(true);
    const handleCloseEnquiryModal = () => setShowEnquiryModal(false);

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h2>About Us</h2>
                    <p>At Coaching Centre, we are dedicated to helping students achieve their goals through comprehensive suggestions and expert guidance.</p>
                </div>
                <div className="footer-links">
                    <h2>Quick Links</h2>
                    <a href="#home" className="footer-link">Home</a>
                    <a href="AboutUs" className="footer-link">About Us</a>
                    <a href="gallery" className="footer-link">Gallery</a>
                    <a href="#terms" className="footer-link">Terms & Conditions</a>
                    <a href="#contact" className="footer-link">Contact Us</a>
                </div>
                <div className="footer-contact">
                    <h2>Get In Touch</h2>
                   
                    {/* Button to trigger the Enquiry modal */}
                    <button className="footer-link" onClick={handleShowEnquiryModal}>Enquiry Here</button>
                </div>
                <div className="footer-social">
                    <h2>Follow Us</h2>
                    <a href="https://www.facebook.com" className="social-link" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" className="social-link" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com" className="social-link" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com" className="social-linky" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.instagram.com" className="social-linki" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <p className="footer-copy">&copy; 2024 Coaching Centre. All rights reserved.</p>

            {/* Modal for Enquiry form */}
            <Modal show={showEnquiryModal} onHide={handleCloseEnquiryModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Enquiry Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Enquiry/>
                </Modal.Body>
            </Modal>
        </footer>
    );
}