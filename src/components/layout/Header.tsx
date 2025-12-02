import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/mock-exams', label: 'Mock Exams' },
        { path: '/contact', label: 'Contact' }
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <span className="logo-text">BITC<span className="logo-highlight">MockExams</span></span>
                    </Link>

                    <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            {navLinks.map((link) => (
                                <li key={link.path} className="nav-item">
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="nav-auth">
                            <Link to="/login">
                                <Button variant="ghost" size="small">Login</Button>
                            </Link>
                            <a href="https://www.bestitcourses.com/" target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" size="small">Sign Up</Button>
                            </a>
                        </div>
                    </nav>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
