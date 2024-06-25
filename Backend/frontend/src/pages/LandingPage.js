import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

export default function LandingPage() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" >Coachingcentre</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto"></ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link btn btn-info mx-1" to="/login">
                                    <i className="fas fa-sign-in-alt"></i> Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-info mx-1" to="/register">
                                    <i className="fas fa-user-plus"></i> Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="image-container">
                <img src="https://images01.nicepagecdn.com/page/79/35/website-template-preview-79358.jpg" alt="Sample" className="landing-image" />
            </div>
        </div>
    );
}
