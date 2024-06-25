import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerifyOtpPage from './pages/VerifyOtpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';



import Students from './pages/Students';
import Instructors from './pages/Instructors';
import Schedules from './pages/Schedules';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import Gallery from './pages/gallery';
import Contact from './pages/Contact';
import Dashboard from './components/Home';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ContactUs from './pages/Contactus';
import Footer from './pages/Footer';
import Enquiry from './pages/Enquiry';
const App = () => {
    return (
        <Router>
            <div className="vh-100 gradient-custom">
                <div className="container">
                    <h1 className="page-header text-center">
                        
                    </h1>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/AboutUs" element={<AboutUs />} />
                        <Route path="/Courses" element={<Courses />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/forgot" element={<ForgotPasswordPage />} />
                        <Route path="/verify-otp" element={<VerifyOtpPage />} />
                        <Route path="/reset-password" element={<ResetPasswordPage />} />
                        
                       
                        <Route path="/Students" element={<Students />} />
                        <Route path="/Instructors" element={<Instructors />} />
                        <Route path="/Schedules" element={<Schedules />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/Sidebar" element={<Sidebar />} />
                        <Route path="/Contactus" element={<ContactUs />} />
                        <Route path="/Footer" element={<Footer />} />
                        <Route path="/Enquiry" element={<Enquiry />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
