import React from 'react';
import Card from '../components/common/Card';
import './Blog.css';

const Blog = () => {
    const articles = [
        {
            title: 'Top 10 Cloud Certifications to Boost Your Career in 2024',
            excerpt: 'Discover the most in-demand cloud certifications that can significantly enhance your career prospects and earning potential in the tech industry.',
            author: 'Dr. James Anderson',
            date: 'November 20, 2024',
            readTime: '8 min read',
            category: 'Career Advice',
            image: '☁️'
        },
        {
            title: 'How to Pass AWS Solutions Architect on Your First Try',
            excerpt: 'A comprehensive guide with proven strategies, study tips, and resources to help you ace the AWS Solutions Architect certification exam.',
            author: 'Sarah Mitchell',
            date: 'November 18, 2024',
            readTime: '12 min read',
            category: 'AWS',
            image: '🎯'
        },
        {
            title: 'The Ultimate Study Plan for Google Cloud Certifications',
            excerpt: 'Learn how to create an effective study plan that maximizes your preparation time and increases your chances of passing Google Cloud exams.',
            author: 'Michael Chen',
            date: 'November 15, 2024',
            readTime: '10 min read',
            category: 'Google Cloud',
            image: '📚'
        },
        {
            title: 'Cybersecurity Certifications: Which One is Right for You?',
            excerpt: 'Navigate the complex world of cybersecurity certifications and find the perfect credential to match your career goals and experience level.',
            author: 'Emily Rodriguez',
            date: 'November 12, 2024',
            readTime: '7 min read',
            category: 'Security',
            image: '🔒'
        },
        {
            title: 'DevOps Certification Roadmap: From Beginner to Expert',
            excerpt: 'A step-by-step guide to building your DevOps expertise through strategic certification planning and hands-on practice.',
            author: 'Michael Chen',
            date: 'November 10, 2024',
            readTime: '15 min read',
            category: 'DevOps',
            image: '🚀'
        },
        {
            title: 'Common Mistakes to Avoid When Preparing for IT Certifications',
            excerpt: 'Learn from the mistakes of others and avoid these common pitfalls that prevent candidates from passing their certification exams.',
            author: 'Dr. James Anderson',
            date: 'November 8, 2024',
            readTime: '6 min read',
            category: 'Study Tips',
            image: '⚠️'
        },
        {
            title: 'Azure Administrator vs Azure Solutions Architect: Which to Choose?',
            excerpt: 'Understand the key differences between these two popular Azure certifications and determine which one aligns with your career path.',
            author: 'Sarah Mitchell',
            date: 'November 5, 2024',
            readTime: '9 min read',
            category: 'Azure',
            image: '💼'
        },
        {
            title: 'The ROI of IT Certifications: Are They Worth It?',
            excerpt: 'An in-depth analysis of the return on investment for IT certifications, including salary increases and career advancement opportunities.',
            author: 'Emily Rodriguez',
            date: 'November 3, 2024',
            readTime: '11 min read',
            category: 'Career Advice',
            image: '💰'
        },
        {
            title: 'Kubernetes Certification Guide: CKA, CKAD, and CKS Explained',
            excerpt: 'A comprehensive breakdown of the three main Kubernetes certifications and how to choose the right one for your career goals.',
            author: 'Michael Chen',
            date: 'November 1, 2024',
            readTime: '13 min read',
            category: 'DevOps',
            image: '⚙️'
        }
    ];

    return (
        <div className="blog">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="container">
                    <div className="blog-hero-content">
                        <h1 className="blog-hero-title">Blog & Insights</h1>
                        <p className="blog-hero-subtitle">
                            Expert advice, study tips, and industry insights to help you succeed
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles Section */}
            <section className="section articles-section">
                <div className="container">
                    <div className="grid grid-cols-3 articles-grid">
                        {articles.map((article, index) => (
                            <Card key={index} className="article-card">
                                <div className="article-image">
                                    <div className="article-image-placeholder">{article.image}</div>
                                    <span className="article-category">{article.category}</span>
                                </div>
                                <div className="article-content">
                                    <h3 className="article-title">{article.title}</h3>
                                    <p className="article-excerpt">{article.excerpt}</p>
                                    <div className="article-meta">
                                        <div className="article-author">
                                            <div className="author-avatar-small">
                                                {article.author.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div className="author-details">
                                                <div className="author-name-small">{article.author}</div>
                                                <div className="article-date">{article.date}</div>
                                            </div>
                                        </div>
                                        <div className="article-read-time">{article.readTime}</div>
                                    </div>
                                    <a href="#" className="article-link">Read More →</a>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
