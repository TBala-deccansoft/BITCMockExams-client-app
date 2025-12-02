import React from 'react';
import Card from '../components/common/Card';
import './About.css';

const About = () => {
    const values = [
        {
            icon: '🎯',
            title: 'Excellence',
            description: 'We strive for excellence in everything we do, from our practice exams to customer support.'
        },
        {
            icon: '🤝',
            title: 'Integrity',
            description: 'We maintain the highest standards of integrity and transparency in all our services.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'We continuously innovate to provide the best learning experience for our students.'
        },
        {
            icon: '❤️',
            title: 'Student Success',
            description: 'Your success is our mission. We are committed to helping you achieve your certification goals.'
        }
    ];

    const team = [
        {
            name: 'Dr. James Anderson',
            role: 'Founder & CEO',
            expertise: 'Cloud Architecture & Security',
            bio: '15+ years in IT, holds 20+ certifications including AWS, Azure, and GCP.'
        },
        {
            name: 'Sarah Mitchell',
            role: 'Head of Content',
            expertise: 'Curriculum Development',
            bio: 'Former certification exam developer with deep expertise in creating quality content.'
        },
        {
            name: 'Michael Chen',
            role: 'Lead Instructor',
            expertise: 'DevOps & Cloud Engineering',
            bio: 'Certified trainer with 10+ years of experience in cloud technologies.'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Customer Success Manager',
            expertise: 'Student Support',
            bio: 'Dedicated to ensuring every student has the support they need to succeed.'
        }
    ];

    return (
        <div className="about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1 className="about-hero-title">About SkillCert Pro</h1>
                        <p className="about-hero-subtitle">
                            Empowering IT professionals to achieve certification success since 2015
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2 className="section-title">Our Mission</h2>
                            <p className="mission-description">
                                At SkillCert Pro, our mission is to provide world-class IT certification preparation
                                that empowers professionals to advance their careers and achieve their goals. We believe
                                that quality education should be accessible to everyone, and we're committed to delivering
                                the best learning experience possible.
                            </p>
                            <p className="mission-description">
                                Since our founding in 2015, we've helped over 50,000 students successfully pass their
                                certification exams on the first attempt. Our comprehensive practice tests, expert-led
                                training, and dedicated support team ensure that you have everything you need to succeed.
                            </p>
                        </div>
                        <div className="mission-stats">
                            <div className="stat-box">
                                <div className="stat-number">50,000+</div>
                                <div className="stat-label">Students Trained</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">95%</div>
                                <div className="stat-label">First-Time Pass Rate</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">200+</div>
                                <div className="stat-label">Certification Exams</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">8+</div>
                                <div className="stat-label">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section values-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-description">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid grid-cols-4 values-grid">
                        {values.map((value, index) => (
                            <Card key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3 className="card-title">{value.title}</h3>
                                <p className="card-description">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section team-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Meet Our Team</h2>
                        <p className="section-description">
                            Experienced professionals dedicated to your success
                        </p>
                    </div>
                    <div className="grid grid-cols-4 team-grid">
                        {team.map((member, index) => (
                            <Card key={index} className="team-card">
                                <div className="team-avatar">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <div className="team-role">{member.role}</div>
                                <div className="team-expertise">{member.expertise}</div>
                                <p className="team-bio">{member.bio}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-content">
                        <h2 className="section-title">Our Story</h2>
                        <div className="story-text">
                            <p>
                                SkillCert Pro was founded in 2015 by Dr. James Anderson, a seasoned IT professional
                                who recognized the need for high-quality, accessible certification preparation. After
                                struggling to find reliable study materials for his own certifications, James decided
                                to create a platform that would provide students with the resources they truly needed.
                            </p>
                            <p>
                                What started as a small collection of practice exams has grown into a comprehensive
                                certification preparation platform serving students worldwide. Our team of certified
                                professionals works tirelessly to ensure that our content is accurate, up-to-date,
                                and aligned with the latest exam objectives.
                            </p>
                            <p>
                                Today, SkillCert Pro is trusted by thousands of IT professionals and organizations
                                around the globe. We continue to expand our offerings and improve our platform,
                                always keeping our students' success at the forefront of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
