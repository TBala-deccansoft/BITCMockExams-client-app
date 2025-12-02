import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import Card from '../components/ui/Card';
import { teamMembers, companyValues } from '../data/mockData';
import './About.css';

const About = () => {
    return (
        <div className="about">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">About Us</h1>
                    <p className="page-subtitle">
                        Empowering professionals to achieve cloud certification success
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section section-light">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                At AzureA2Z, we are dedicated to transforming the way professionals approach
                                cloud certifications. Our mission is to provide world-class training, comprehensive
                                practice exams, and personalized guidance that empowers individuals and organizations
                                to succeed in their cloud journey.
                            </p>
                            <p>
                                Founded by cloud experts with decades of combined experience, we understand the
                                challenges of certification preparation. That's why we've created a platform that
                                combines expert instruction, real-world scenarios, and proven study methodologies
                                to ensure your success.
                            </p>
                        </div>
                        <div className="mission-image">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                alt="Team collaboration"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section section-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Core Values</h2>
                        <p className="section-description">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-2">
                        {companyValues.map((value) => (
                            <Card key={value.id}>
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p className="text-secondary">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Meet Our Team</h2>
                        <p className="section-description">
                            Experienced professionals dedicated to your success
                        </p>
                    </div>

                    <div className="grid grid-4">
                        {teamMembers.map((member) => (
                            <Card key={member.id} hover>
                                <div className="team-image-wrapper">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="team-image"
                                    />
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-title">{member.title}</p>
                                <p className="team-bio">{member.bio}</p>
                                <a
                                    href={member.linkedin}
                                    className="team-linkedin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn /> Connect on LinkedIn
                                </a>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section section-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Journey</h2>
                        <p className="section-description">
                            Milestones in our mission to empower cloud professionals
                        </p>
                    </div>

                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-year">2018</div>
                            <div className="timeline-content">
                                <h4>Company Founded</h4>
                                <p>Started with a vision to make cloud certification accessible to everyone</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2019</div>
                            <div className="timeline-content">
                                <h4>10,000 Students</h4>
                                <p>Reached our first major milestone of 10,000 successful students</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2021</div>
                            <div className="timeline-content">
                                <h4>Global Expansion</h4>
                                <p>Expanded services to 50+ countries worldwide</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2024</div>
                            <div className="timeline-content">
                                <h4>50,000+ Students</h4>
                                <p>Celebrating 50,000+ certified professionals and counting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
