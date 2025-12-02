import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { mockExams } from '../data/mockData';
import './MockExams.css';

const MockExams = () => {
    const [searchParams] = useSearchParams();
    const difficulty = searchParams.get('difficulty');

    // Filter exams based on difficulty parameter
    const filteredExams = difficulty
        ? mockExams.filter(exam => exam.difficulty.toLowerCase() === difficulty.toLowerCase())
        : mockExams;

    const getDifficultyBadge = (difficulty: string) => {
        switch (difficulty) {
            case 'Beginner':
                return 'BEGINNER';
            case 'Intermediate':
                return 'INTERMEDIATE';
            case 'Advanced':
                return 'ADVANCED';
            default:
                return difficulty.toUpperCase();
        }
    };

    return (
        <div className="mock-exams">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Microsoft Certification Exams</h1>
                    <p className="page-subtitle">
                        Practice with real exam scenarios and boost your confidence before the actual test
                    </p>
                </div>
            </section>

            {/* Exams Grid */}
            <section className="section section-light">
                <div className="container">
                    <div className="exams-card-grid">
                        {filteredExams.map((exam) => (
                            <Card key={exam.id} className="exam-card-item">
                                <div className="exam-card-header">
                                    <span className="exam-vendor-badge">{exam.vendor}</span>
                                    <span className={`difficulty-badge difficulty-${exam.difficulty.toLowerCase()}`}>
                                        {getDifficultyBadge(exam.difficulty)}
                                    </span>
                                </div>

                                <h3 className="exam-card-title">{exam.title}</h3>
                                <p className="exam-card-code">{exam.code}</p>

                                <div className="exam-stats">
                                    <div className="exam-stat">
                                        <span className="stat-label">Questions:</span>
                                        <span className="stat-value">{exam.questions}</span>
                                    </div>
                                    <div className="exam-stat">
                                        <span className="stat-label">Duration:</span>
                                        <span className="stat-value">{exam.duration} min</span>
                                    </div>
                                    <div className="exam-stat">
                                        <span className="stat-label">Students:</span>
                                        <span className="stat-value">{exam.students.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="exam-card-footer">
                                    <div className="exam-rating">
                                        <FaStar className="star-icon" />
                                        <span>{exam.rating}</span>
                                    </div>
                                    <div className="exam-price">${exam.price}</div>
                                </div>

                                <Button variant="primary" fullWidth>Start Practice</Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section section-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose Our Mock Exams?</h2>
                    </div>

                    <div className="grid grid-3">
                        <div className="feature-card">
                            <div className="feature-icon">📊</div>
                            <h3>Real Exam Questions</h3>
                            <p>Practice with questions taken from actual certification exams</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💡</div>
                            <h3>Detailed Explanations</h3>
                            <p>Understand every answer with comprehensive explanations</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📈</div>
                            <h3>Performance Analytics</h3>
                            <p>Track your progress and identify areas for improvement</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔄</div>
                            <h3>Unlimited Attempts</h3>
                            <p>Practice as many times as you need to build confidence</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⏱️</div>
                            <h3>Timed Mode</h3>
                            <p>Simulate real exam conditions with time limits</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">✅</div>
                            <h3>Up-to-Date Content</h3>
                            <p>Regularly updated to match the latest exam patterns</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MockExams;
