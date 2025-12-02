import React from 'react';
import './Card.css';

const Card = ({
    children,
    image,
    imageAlt = '',
    title,
    subtitle,
    badge,
    hover = true,
    className = '',
    onClick
}) => {
    const cardClass = `card ${hover ? 'card-hover' : ''} ${className}`;

    return (
        <div className={cardClass} onClick={onClick}>
            {image && (
                <div className="card-image">
                    <img src={image} alt={imageAlt} loading="lazy" />
                </div>
            )}

            <div className="card-content">
                {badge && <span className="card-badge">{badge}</span>}
                {title && <h3 className="card-title">{title}</h3>}
                {subtitle && <p className="card-subtitle">{subtitle}</p>}
                {children}
            </div>
        </div>
    );
};

export default Card;
