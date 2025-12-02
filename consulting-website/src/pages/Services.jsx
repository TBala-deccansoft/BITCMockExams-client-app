import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '📝',
            title: 'Mock Exams & Practice Tests',
            description: 'Comprehensive practice exams that mirror the real certification tests. Our questions are carefully crafted by certified professionals to ensure accuracy and relevance.',
            features: [
                'Real exam-like questions',
                'Detailed explanations for each answer',
                'Performance tracking and analytics',
                'Unlimited practice attempts',
                'Mobile-friendly interface'
            ]
        },
        {
            icon: '🎓',
            title: 'Expert-Led Training',
            description: 'Learn from industry experts with years of real-world experience. Our training programs are designed to give you practical knowledge along with exam preparation.',
            features: [
                'Live instructor-led sessions',
                'On-demand video courses',
                'Hands-on labs and exercises',
                'Q&A sessions with experts',
                'Course completion certificates'
            ]
        },
        {
            icon: '💼',
            title: 'Corporate Training',
            description: 'Customized training solutions for organizations looking to upskill their teams. We offer group discounts and tailored learning paths.',
            features: [
                'Custom learning paths',
                'Group licensing options',
                'Progress tracking dashboard',
                'Dedicated account manager',
                'Volume discounts available'
            ]
        },
        {
            icon: '🎯',
            title: 'Career Consulting',
            description: 'Get personalized guidance on which certifications to pursue based on your career goals. Our consultants help you create a strategic certification roadmap.',
            features: [
                'One-on-one consultation sessions',
                'Personalized certification roadmap',
                'Career advancement strategies',
                'Resume and LinkedIn optimization',
                'Interview preparation tips'
            ]
        },
        {
            icon: '📊',
            title: 'Study Plans & Resources',
            description: 'Structured study plans and comprehensive resources to help you prepare efficiently. We provide everything you need in one place.',
            features: [
                'Customized study schedules',
                'Downloadable study guides',
                'Flashcards and cheat sheets',
                'Community discussion forums',
                'Regular content updates'
            ]
        },
        {
            icon: '🔧',
            title: 'Custom Solutions',
            description: 'Need something specific? We can create custom training programs and practice exams tailored to your unique requirements.',
            features: [
                'Bespoke content creation',
                'White-label solutions',
                'API integration options',
                'Custom reporting tools',
                'Flexible pricing models'
            ]
        }
    ];

    return (
        <div className="services">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-content">
                        <h1 className="services-hero-title">Our Services</h1>
                        <p className="services-hero-subtitle">
                            Comprehensive solutions to help you achieve certification success
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-list-section">
                <div className="container">
                    <div className="services-list">
                        {services.map((service, index) => (
                            <Card key={index} className="service-detail-card">
                                <div className="service-detail-header">
                                    <div className="service-detail-icon">{service.icon}</div>
                                    <div>
                                        <h3 className="service-detail-title">{service.title}</h3>
                                        <p className="service-detail-description">{service.description}</p>
                                    </div>
                                </div>
                                <div className="service-features">
                                    <h4 className="features-title">Key Features:</h4>
                                    <ul className="features-list">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="feature-item">
                                                <span className="feature-check">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="service-action">
                                    <Button>Learn More</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section services-cta-section">
                <div className="container">
                    <div className="services-cta-content">
                        <h2 className="services-cta-title">Ready to Get Started?</h2>
                        <p className="services-cta-description">
                            Choose the service that best fits your needs and start your certification journey today
                        </p>
                        <div className="services-cta-buttons">
                            <Button size="large">View All Exams</Button>
                            <Button variant="outline" size="large">Contact Sales</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
