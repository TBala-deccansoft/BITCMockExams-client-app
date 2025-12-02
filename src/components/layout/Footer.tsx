import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../ui/Button';
import Input from '../ui/Input';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter signup
        alert('Thank you for subscribing!');
        setEmail('');
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* About Section */}
                    <div className="footer-column">
                        <h3 className="footer-title">BITC<span className="text-primary">MockExams</span></h3>
                        <p className="footer-description">
                            Your trusted partner for cloud certification training, mock exams, and technology consulting services.
                        </p>
                        <div className="footer-social">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/mock-exams">Mock Exams</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Mock Exams */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Mock Exams</h4>
                        <ul className="footer-links">
                            <li><Link to="/mock-exams?difficulty=beginner">Fundamentals</Link></li>
                            <li><Link to="/mock-exams?difficulty=intermediate">Role Based</Link></li>
                            <li><Link to="/mock-exams?difficulty=advanced">Speciality</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <FaMapMarkerAlt />
                                <span>123 Tech Street, Suite 100<br />San Francisco, CA 94105</span>
                            </li>
                            <li>
                                <FaPhone />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li>
                                <FaEnvelope />
                                <span>info@bitcmockexams.com</span>
                            </li>
                        </ul>

                        <div className="footer-newsletter">
                            <h5 className="newsletter-title">Newsletter</h5>
                            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                                <Input
                                    type="email"
                                    name="newsletter-email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    required
                                />
                                <Button type="submit" variant="primary" size="small" fullWidth>
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} BITCMockExams. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span className="separator">|</span>
                        <Link to="/terms">Terms of Service</Link>
                        <span className="separator">|</span>
                        <Link to="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
