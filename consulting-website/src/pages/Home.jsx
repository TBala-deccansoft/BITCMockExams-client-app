import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import './Home.css';

const Home = () => {
    const services = [
        {
            icon: '📝',
            title: 'Mock Exams',
            description: 'Practice with real exam questions and test your knowledge before the actual certification exam.'
        },
        {
            icon: '🎯',
            title: 'Expert Training',
            description: 'Learn from industry experts with comprehensive training programs tailored to your needs.'
        },
        {
            icon: '🏆',
            title: 'Certification Prep',
            description: 'Get prepared for top IT certifications with our proven study materials and guidance.'
        },
        {
            icon: '💡',
            title: 'Consulting Services',
            description: 'Professional consulting to help you choose the right certification path for your career.'
        }
    ];

    const features = [
        {
            icon: '✓',
            title: 'Real Exam Questions',
            description: 'Questions taken from previous exams to give you authentic practice experience.'
        },
        {
            icon: '✓',
            title: 'Up-to-Date Content',
            description: 'Regularly updated materials to match the latest exam objectives and requirements.'
        },
        {
            icon: '✓',
            title: 'High Success Rate',
            description: 'Our students achieve a 95% pass rate on their first attempt.'
        },
        {
            icon: '✓',
            title: 'Expert Support',
            description: '24/7 support from certified professionals to answer your questions.'
        }
    ];

    const stats = [
        { number: '50,000+', label: 'Students Trained' },
        { number: '95%', label: 'Pass Rate' },
        { number: '200+', label: 'Certification Exams' },
        { number: '24/7', label: 'Expert Support' }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Cloud Architect',
            company: 'Tech Corp',
            text: 'SkillCert Pro helped me pass my AWS Solutions Architect exam on the first try. The practice tests were incredibly accurate!',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Security Engineer',
            company: 'SecureNet',
            text: 'The best certification prep platform I\'ve used. The explanations are clear and the questions mirror the actual exam.',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'DevOps Engineer',
            company: 'CloudTech',
            text: 'Excellent platform with comprehensive coverage. I passed my Google Cloud certification with confidence!',
            rating: 5
        }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background"></div>
                <div className="container">
                    <div className="hero-content animate-fadeIn">
                        <h1 className="hero-title">
                            Excel in Your IT Certification Journey
                        </h1>
                        <p className="hero-subtitle">
                            Prepare and pass your IT certifications on the first attempt with our world-class
                            practice tests, expert training, and comprehensive study materials.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/mock-exams">
                                <Button size="large">Explore Mock Exams</Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="outline" size="large">Learn More</Button>
                            </Link>
                        </div>
                        <div className="hero-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="hero-stat">
                                    <div className="hero-stat-number">{stat.number}</div>
                                    <div className="hero-stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-description">
                            Everything you need to prepare and quickly pass tough certification exams
                        </p>
                    </div>
                    <div className="grid grid-cols-4 services-grid">
                        {services.map((service, index) => (
                            <Card key={index} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-description">{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Why Choose SkillCert Pro?</h2>
                        <p className="section-description">
                            We provide the best certification preparation experience
                        </p>
                    </div>
                    <div className="grid grid-cols-2 features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">What Our Students Say</h2>
                        <p className="section-description">
                            Join thousands of successful certification candidates
                        </p>
                    </div>
                    <div className="grid grid-cols-3 testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="testimonial-card">
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">{testimonial.name}</div>
                                        <div className="author-role">{testimonial.role} at {testimonial.company}</div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Your Certification Journey?</h2>
                        <p className="cta-description">
                            Join over 50,000 students who have successfully passed their certifications with SkillCert Pro
                        </p>
                        <Link to="/mock-exams">
                            <Button size="large">Get Started Today</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
