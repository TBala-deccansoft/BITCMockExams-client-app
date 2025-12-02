import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { mockExams, testimonials, stats } from '../data/mockData';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="hero-text fade-in">
                        <h1 className="hero-title">
                            Transform Your Cloud Journey
                        </h1>
                        <p className="hero-subtitle">
                            Master cloud certifications with expert-led training, comprehensive mock exams,
                            and personalized guidance. Join 50,000+ successful students worldwide.
                        </p>
                        <div className="hero-cta">
                            <Link to="/mock-exams">
                                <Button variant="primary" size="large" icon={<FaArrowRight />}>
                                    Explore Mock Exams
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="secondary" size="large">
                                    View Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card scale-in">
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Microsoft Certifications */}
            <section className="section section-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Microsoft Certification Exams</h2>
                        <p className="section-description">
                            Practice with real exam scenarios and boost your confidence
                        </p>
                    </div>

                    <div className="categories-grid">
                        <div className="category-column">
                            <div className="category-column-header">
                                <div>
                                    <h3 className="category-column-title">FUNDAMENTALS</h3>
                                    <Link to="/mock-exams" className="category-column-subtitle">Master the basics</Link>
                                </div>
                                <svg width="60" height="60" viewBox="0 0 100 100" className="certification-badge">
                                    <defs>
                                        <linearGradient id="gradient-fundamentals" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#0078D4', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#004578', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M50 10 L80 25 L80 50 Q80 75 50 90 Q20 75 20 50 L20 25 Z"
                                        fill="url(#gradient-fundamentals)"
                                        stroke="#fff"
                                        strokeWidth="2"
                                    />
                                    <g transform="translate(50, 35)">
                                        <rect x="-12" y="-8" width="5" height="5" fill="#fff" />
                                        <rect x="-6" y="-8" width="5" height="5" fill="#fff" />
                                        <rect x="-12" y="-2" width="5" height="5" fill="#fff" />
                                        <rect x="-6" y="-2" width="5" height="5" fill="#fff" />
                                    </g>
                                    <text x="50" y="65" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">MICROSOFT</text>
                                    <text x="50" y="75" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="600">CERTIFIED</text>
                                    <text x="50" y="85" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="600">FUNDAMENTAL</text>
                                </svg>
                            </div>
                            <div className="exams-list">
                                {mockExams.filter(exam => exam.category === 'Fundamentals').map((exam) => (
                                    <div key={exam.id} className="exam-list-item">
                                        <span className="exam-code-text">{exam.code}</span>
                                        <span className="exam-separator">:</span>
                                        <span className="exam-title-text">{exam.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="category-column">
                            <div className="category-column-header">
                                <div>
                                    <h3 className="category-column-title">ROLE-BASED</h3>
                                    <Link to="/mock-exams" className="category-column-subtitle">Expand your technical skill set</Link>
                                </div>
                                <svg width="60" height="60" viewBox="0 0 100 100" className="certification-badge">
                                    <defs>
                                        <linearGradient id="gradient-rolebased" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#106EBE', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#004578', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M50 10 L80 25 L80 50 Q80 75 50 90 Q20 75 20 50 L20 25 Z"
                                        fill="url(#gradient-rolebased)"
                                        stroke="#fff"
                                        strokeWidth="2"
                                    />
                                    <g transform="translate(50, 35)">
                                        <rect x="-12" y="-8" width="5" height="5" fill="#fff" />
                                        <rect x="-6" y="-8" width="5" height="5" fill="#fff" />
                                        <rect x="-12" y="-2" width="5" height="5" fill="#fff" />
                                        <rect x="-6" y="-2" width="5" height="5" fill="#fff" />
                                    </g>
                                    <text x="50" y="65" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">MICROSOFT</text>
                                    <text x="50" y="75" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="600">CERTIFIED</text>
                                    <text x="50" y="85" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="600">EXPERT</text>
                                </svg>
                            </div>
                            <div className="exams-list">
                                {mockExams.filter(exam => exam.category === 'Role-Based').map((exam) => (
                                    <div key={exam.id} className="exam-list-item">
                                        <span className="exam-code-text">{exam.code}</span>
                                        <span className="exam-separator">:</span>
                                        <span className="exam-title-text">{exam.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="category-column">
                            <div className="category-column-header">
                                <div>
                                    <h3 className="category-column-title">SPECIALITY</h3>
                                    <Link to="/mock-exams" className="category-column-subtitle">Deepen your technical skills and manage industry solutions</Link>
                                </div>
                                <svg width="60" height="60" viewBox="0 0 100 100" className="certification-badge">
                                    <defs>
                                        <linearGradient id="gradient-speciality" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#50E6FF', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#004578', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M50 10 L80 25 L80 50 Q80 75 50 90 Q20 75 20 50 L20 25 Z"
                                        fill="url(#gradient-speciality)"
                                        stroke="#fff"
                                        strokeWidth="2"
                                    />
                                    <g transform="translate(50, 35)">
                                        <rect x="-12" y="-8" width="5" height="5" fill="#fff" />
                                        <rect x="-6" y="-8" width="5" height="5" fill="#fff" />
                                        <rect x="-12" y="-2" width="5" height="5" fill="#fff" />
                                        <rect x="-6" y="-2" width="5" height="5" fill="#fff" />
                                    </g>
                                    <text x="50" y="65" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">MICROSOFT</text>
                                    <text x="50" y="75" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="600">CERTIFIED</text>
                                    <text x="50" y="85" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="600">ASSOCIATE</text>
                                </svg>
                            </div>
                            <div className="exams-list">
                                {mockExams.filter(exam => exam.category === 'Speciality').map((exam) => (
                                    <div key={exam.id} className="exam-list-item">
                                        <span className="exam-code-text">{exam.code}</span>
                                        <span className="exam-separator">:</span>
                                        <span className="exam-title-text">{exam.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-xl">
                        <Link to="/mock-exams">
                            <Button variant="outline" size="large">
                                View All Exams <FaArrowRight />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>What Our Students Say</h2>
                        <p className="section-description">
                            Join thousands of successful cloud professionals
                        </p>
                    </div>

                    <div className="grid grid-3">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.id}>
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="star-icon" />
                                    ))}
                                </div>
                                <p className="testimonial-content">"{testimonial.content}"</p>
                                <div className="testimonial-author">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="testimonial-image"
                                    />
                                    <div>
                                        <h4 className="testimonial-name">{testimonial.name}</h4>
                                        <p className="testimonial-role">{testimonial.role}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Your Certification Journey?</h2>
                        <p className="cta-description">
                            Join our community of successful cloud professionals and achieve your career goals
                        </p>
                        <div className="cta-buttons">
                            <a href="https://www.bestitcourses.com/" target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" size="large">
                                    Get Started Free
                                </Button>
                            </a>
                            <Link to="/contact">
                                <Button variant="secondary" size="large">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
