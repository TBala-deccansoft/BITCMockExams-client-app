import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { services } from '../data/mockData';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <p className="page-subtitle">
                        Comprehensive solutions to accelerate your cloud certification journey
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section section-light">
                <div className="container">
                    <div className="grid grid-2">
                        {services.map((service) => (
                            <Card key={service.id} hover>
                                <div className="service-icon-large">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p className="text-secondary">{service.description}</p>

                                <h4 className="features-title">Key Features:</h4>
                                <ul className="service-features-list">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <FaCheckCircle className="feature-check" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button variant="primary" fullWidth>
                                    Learn More <FaArrowRight />
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section section-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>How We Work</h2>
                        <p className="section-description">
                            Our proven process to ensure your certification success
                        </p>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h3>Assessment</h3>
                            <p>We evaluate your current knowledge and identify your goals</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h3>Customized Plan</h3>
                            <p>Create a personalized study plan tailored to your needs</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h3>Training & Practice</h3>
                            <p>Engage in live training sessions and practice with mock exams</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h3>Certification Success</h3>
                            <p>Pass your exam with confidence and advance your career</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-light">
                <div className="container">
                    <div className="services-cta">
                        <h2>Ready to Get Started?</h2>
                        <p>
                            Contact us today to discuss how we can help you achieve your certification goals
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact">
                                <Button variant="primary" size="large">
                                    Contact Us
                                </Button>
                            </Link>
                            <Link to="/mock-exams">
                                <Button variant="outline" size="large">
                                    Browse Mock Exams
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
