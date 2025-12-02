import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './MockExams.css';

const MockExams = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'AWS', 'Google Cloud', 'Azure', 'Security', 'DevOps', 'Project Management'];

    const exams = [
        {
            title: 'AWS Solutions Architect Associate',
            category: 'AWS',
            questions: 65,
            difficulty: 'Intermediate',
            price: '$29.99',
            rating: 4.8,
            students: 12500
        },
        {
            title: 'Google Cloud Professional Architect',
            category: 'Google Cloud',
            questions: 50,
            difficulty: 'Advanced',
            price: '$34.99',
            rating: 4.9,
            students: 8200
        },
        {
            title: 'Azure Administrator Associate',
            category: 'Azure',
            questions: 60,
            difficulty: 'Intermediate',
            price: '$29.99',
            rating: 4.7,
            students: 10300
        },
        {
            title: 'CCSP Cloud Security Professional',
            category: 'Security',
            questions: 125,
            difficulty: 'Advanced',
            price: '$39.99',
            rating: 4.9,
            students: 5600
        },
        {
            title: 'Certified Kubernetes Administrator',
            category: 'DevOps',
            questions: 75,
            difficulty: 'Advanced',
            price: '$34.99',
            rating: 4.8,
            students: 7800
        },
        {
            title: 'PMP Project Management Professional',
            category: 'Project Management',
            questions: 180,
            difficulty: 'Advanced',
            price: '$39.99',
            rating: 4.9,
            students: 15200
        },
        {
            title: 'AWS Certified Security Specialty',
            category: 'AWS',
            questions: 65,
            difficulty: 'Advanced',
            price: '$34.99',
            rating: 4.8,
            students: 6400
        },
        {
            title: 'Google Cloud Associate Engineer',
            category: 'Google Cloud',
            questions: 50,
            difficulty: 'Beginner',
            price: '$24.99',
            rating: 4.7,
            students: 9500
        },
        {
            title: 'CEH v11 Certified Ethical Hacker',
            category: 'Security',
            questions: 125,
            difficulty: 'Intermediate',
            price: '$34.99',
            rating: 4.8,
            students: 11200
        }
    ];

    const filteredExams = selectedCategory === 'All'
        ? exams
        : exams.filter(exam => exam.category === selectedCategory);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return '#10B981';
            case 'Intermediate': return '#F59E0B';
            case 'Advanced': return '#EF4444';
            default: return '#6B7280';
        }
    };

    return (
        <div className="mock-exams">
            {/* Hero Section */}
            <section className="exams-hero">
                <div className="container">
                    <div className="exams-hero-content">
                        <h1 className="exams-hero-title">Mock Exams</h1>
                        <p className="exams-hero-subtitle">
                            Practice with real exam questions and boost your confidence
                        </p>
                    </div>
                </div>
            </section>

            {/* Exams Section */}
            <section className="section exams-section">
                <div className="container">
                    {/* Category Filter */}
                    <div className="category-filter">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Exams Grid */}
                    <div className="grid grid-cols-3 exams-grid">
                        {filteredExams.map((exam, index) => (
                            <Card key={index} className="exam-card">
                                <div className="exam-header">
                                    <span className="exam-category">{exam.category}</span>
                                    <span
                                        className="exam-difficulty"
                                        style={{ backgroundColor: getDifficultyColor(exam.difficulty) }}
                                    >
                                        {exam.difficulty}
                                    </span>
                                </div>
                                <h3 className="exam-title">{exam.title}</h3>
                                <div className="exam-meta">
                                    <div className="exam-meta-item">
                                        <span className="meta-icon">📝</span>
                                        <span>{exam.questions} Questions</span>
                                    </div>
                                    <div className="exam-meta-item">
                                        <span className="meta-icon">⭐</span>
                                        <span>{exam.rating} Rating</span>
                                    </div>
                                    <div className="exam-meta-item">
                                        <span className="meta-icon">👥</span>
                                        <span>{exam.students.toLocaleString()} Students</span>
                                    </div>
                                </div>
                                <div className="exam-footer">
                                    <div className="exam-price">{exam.price}</div>
                                    <Button>Start Exam</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MockExams;
