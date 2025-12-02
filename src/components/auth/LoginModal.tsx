import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaMicrosoft, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useAuth } from '../../context/AuthContext';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        // Handle checkbox separately since HTMLTextAreaElement doesn't have 'checked' property
        const checked = (e.target as HTMLInputElement).checked;
        const type = e.target.type;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            login(formData.email);
            alert('Login successful!');
            setIsSubmitting(false);
            onClose();
            navigate('/'); // Optional: redirect to dashboard or keep on same page
        }, 1500);
    };

    const handleSocialLogin = (provider: string) => {
        alert(`Login with ${provider} - Feature coming soon!`);
    };

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-[480px] bg-white rounded-xl shadow-2xl p-8 m-4 animate-scaleIn max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
                >
                    <FaTimes size={24} />
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-text-secondary m-0">Login to your account to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="mb-6">
                    <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="you@example.com"
                        required
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                        placeholder="Enter your password"
                        required
                    />

                    <div className="flex justify-between items-center mb-6">
                        <label className="flex items-center gap-2 cursor-pointer text-sm">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            <span>Remember me</span>
                        </label>
                        <Link to="/forgot-password" className="text-primary-blue text-sm font-semibold" onClick={onClose}>
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        size="large"
                        fullWidth
                        loading={isSubmitting}
                    >
                        Login
                    </Button>
                </form>

                <div className="relative text-center my-6 before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:h-px before:bg-border">
                    <span className="relative bg-white px-4 text-text-light text-sm font-semibold">OR</span>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                    <button
                        className="flex items-center justify-center gap-4 px-6 py-3 border-2 border-border bg-white rounded-md font-semibold cursor-pointer transition-all duration-250 hover:border-primary-blue hover:bg-light-blue"
                        onClick={() => handleSocialLogin('Google')}
                    >
                        <FaGoogle className="text-[#DB4437]" /> Continue with Google
                    </button>
                    <button
                        className="flex items-center justify-center gap-4 px-6 py-3 border-2 border-border bg-white rounded-md font-semibold cursor-pointer transition-all duration-250 hover:border-primary-blue hover:bg-light-blue"
                        onClick={() => handleSocialLogin('Microsoft')}
                    >
                        <FaMicrosoft className="text-[#00A4EF]" /> Continue with Microsoft
                    </button>
                </div>

                <div className="text-center pt-6 border-t border-border">
                    <p className="text-text-secondary m-0">
                        Don't have an account? <a href="https://www.bestitcourses.com/" target="_blank" rel="noopener noreferrer" className="text-primary-blue font-semibold">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
