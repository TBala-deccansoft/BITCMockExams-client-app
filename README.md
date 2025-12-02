# Consulting Website

A modern, professional website for a technology consulting business built with React and Vite.

## Features

- **Modern Design**: Clean, professional UI with Azure-inspired color palette
- **Responsive**: Fully responsive design for desktop, tablet, and mobile
- **Pages**:
  - Home - Hero section, services overview, featured exams, testimonials
  - About - Mission, team, values, company timeline
  - Mock Exams - Searchable exam catalog with filters
  - Services - Detailed service offerings
  - Blog/Insights - Blog posts with category filtering
  - Contact - Contact form and information
  - Login/SignUp - Authentication pages

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **CSS3** - Styling with custom properties

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       └── Input.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── MockExams.jsx
│   ├── Services.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Login.jsx
│   └── SignUp.jsx
├── data/
│   └── mockData.js
├── App.jsx
├── main.jsx
└── index.css
```

## Design System

### Colors
- Primary Blue: #0078D4
- Secondary Blue: #106EBE
- Accent Blue: #50E6FF
- Text Primary: #1A1A1A
- Text Secondary: #666666

### Typography
- Font Family: Inter (Google Fonts)
- Responsive font sizes
- Clear hierarchy

### Components
- Reusable UI components
- Consistent styling
- Accessible markup

## License

MIT
