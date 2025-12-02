import React from 'react';
import './Card.css';

const Card = ({
    children,
    className = '',
    hover = true,
    image,
    imageAlt = '',
    ...props
}) => {
    return (
        <div className={`card ${hover ? 'card-hover' : ''} ${className}`} {...props}>
            {image && (
                <div className="card-image">
                    <img src={image} alt={imageAlt} />
                </div>
            )}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;
