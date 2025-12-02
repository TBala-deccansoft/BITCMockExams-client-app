# SkillCert Pro - Modern Consulting Website

A professional, modern React website for IT certification training and consulting services, built with Vite.

## Features

- 🎨 Modern, clean design with blue color scheme
- 📱 Fully responsive (desktop, tablet, mobile)
- ⚡ Fast performance with Vite
- 🎯 Six main pages: Home, About, Mock Exams, Services, Blog, Contact
- 🔄 Smooth animations and transitions
- 📝 Contact form with validation
- 🎓 Mock exam catalog with filtering
- 📰 Blog with article cards
- 💼 Comprehensive services showcase

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with CSS variables
- **Google Fonts (Inter)** - Typography

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd consulting-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
consulting-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── common/      # Button, Card, Input, Textarea
│   │   └── layout/      # Navbar, Footer, Layout
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── MockExams.jsx
│   │   ├── Services.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── styles/          # Global styles
│   │   ├── variables.css
│   │   └── index.css
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Pages

### Home
- Hero section with CTA buttons
- Services overview
- Features section
- Testimonials
- Statistics
- Final CTA

### About
- Company mission and vision
- Core values
- Team members
- Company story

### Mock Exams
- Exam catalog with filtering
- Category-based navigation
- Exam details (questions, difficulty, price)
- Student ratings

### Services
- Detailed service descriptions
- Key features for each service
- CTA sections

### Blog & Insights
- Article grid layout
- Author information
- Read time and categories
- Article excerpts

### Contact
- Contact form with validation
- Contact information
- Business hours
- Map placeholder

## Design System

### Colors
- Primary: #0066CC
- Primary Dark: #004C99
- White: #FFFFFF
- Gray scale: 50-900

### Typography
- Font Family: Inter
- Sizes: xs (12px) to 6xl (60px)
- Weights: 300-800

### Components
- Buttons (primary, secondary, outline, ghost)
- Cards with hover effects
- Form inputs with validation
- Responsive navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Contact

For questions or support, please visit the Contact page or email info@skillcertpro.com
