import React, { useState } from 'react';
import { FaClock, FaUser } from 'react-icons/fa';
import Card from '../components/ui/Card';
import { blogPosts } from '../data/mockData';
import './Blog.css';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Certification Tips', 'Cloud Computing', 'DevOps', 'Security', 'Career', 'Architecture'];

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const featuredPost = blogPosts[0];

    return (
        <div className="blog-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Blog & Insights</h1>
                    <p className="page-subtitle">
                        Expert tips, industry insights, and certification guidance
                    </p>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    {/* Featured Post */}
                    <div className="featured-post">
                        <div className="featured-image">
                            <img src={featuredPost.image} alt={featuredPost.title} />
                            <span className="featured-badge">Featured</span>
                        </div>
                        <div className="featured-content">
                            <span className="post-category">{featuredPost.category}</span>
                            <h2>{featuredPost.title}</h2>
                            <p className="post-excerpt">{featuredPost.excerpt}</p>
                            <div className="post-meta">
                                <span className="meta-item">
                                    <FaUser /> {featuredPost.author}
                                </span>
                                <span className="meta-item">
                                    <FaClock /> {featuredPost.readTime}
                                </span>
                                <span className="meta-item">{featuredPost.date}</span>
                            </div>
                            <a href="#" className="read-more">Read Article →</a>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="category-filter">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-3">
                        {filteredPosts.map((post) => (
                            <Card
                                key={post.id}
                                image={post.image}
                                imageAlt={post.title}
                                badge={post.category}
                                hover
                            >
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-meta">
                                    <span className="meta-item">
                                        <FaUser /> {post.author}
                                    </span>
                                    <span className="meta-item">
                                        <FaClock /> {post.readTime}
                                    </span>
                                </div>
                                <div className="blog-date">{post.date}</div>
                                <a href="#" className="read-more-link">Read More →</a>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
