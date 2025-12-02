import React from 'react';
import './Textarea.css';

const Textarea = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    error,
    required = false,
    rows = 4,
    className = '',
    ...props
}) => {
    return (
        <div className={`textarea-group ${className}`}>
            {label && (
                <label htmlFor={name} className="textarea-label">
                    {label}
                    {required && <span className="textarea-required">*</span>}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                className={`textarea ${error ? 'textarea-error' : ''}`}
                required={required}
                {...props}
            />
            {error && <span className="textarea-error-message">{error}</span>}
        </div>
    );
};

export default Textarea;
