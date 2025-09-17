# Replit.md

## Overview

This is a **Soyth Volunteer Landing Page** project - a responsive website built to showcase Soyth's volunteer web developer initiative. The project serves as both a recruitment tool for volunteers and study material for the community. It features a modern dark theme with neon accents, glassmorphism effects, and smooth animations to create an engaging user experience.

The application is built as a static landing page with basic interactivity, served through an Express.js server for deployment flexibility. It includes sections for hero content, about information, volunteer opportunities, application instructions, and contact details.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML/CSS/JavaScript**: The core frontend is built with vanilla web technologies for simplicity and performance
- **Tailwind CSS Framework**: Utility-first CSS framework integrated via CDN for rapid styling and responsive design
- **Custom CSS System**: Organized custom styles with CSS variables, design tokens, and a modular architecture including glassmorphism effects, 3D animations, and accessibility features
- **Responsive Design**: Mobile-first approach with smooth scrolling navigation and mobile menu toggle functionality

### Backend Architecture
- **Express.js Server**: Minimal Node.js/Express server serving static files with production and development environment support
- **Static File Serving**: Serves HTML, CSS, JavaScript, and assets from the public directory with proper security headers
- **SPA-style Routing**: Catch-all route handler that serves index.html for all requests, enabling client-side navigation

### Build System
- **TypeScript Configuration**: Server-side code written in TypeScript with ES2022 target and ESNext modules
- **ESBuild**: Fast bundler for production builds with platform-specific optimizations
- **Development Workflow**: Hot-reloading development server with TSX for TypeScript execution

### Design System
- **Dark Theme**: Consistent dark color palette with neon accent colors (purple, cyan, magenta)
- **Glassmorphism UI**: Modern glass-effect components with backdrop blur and transparency
- **Animation System**: Performance-optimized animations with accessibility support and reduced motion preferences
- **Component Architecture**: Modular CSS organization with reusable design tokens and utility classes

## External Dependencies

### Frontend Dependencies
- **Tailwind CSS**: Utility-first CSS framework loaded via CDN for rapid UI development
- **Google Fonts**: Inter font family for consistent typography
- **Radix UI Components**: Comprehensive React component library for advanced UI components (accordion, dialog, dropdown, etc.)
- **React Query**: Data fetching and state management library for React applications

### Backend Dependencies
- **Express.js**: Web application framework for Node.js
- **TypeScript**: Type-safe JavaScript development
- **ESBuild**: Fast JavaScript bundler and minifier
- **TSX**: TypeScript execution engine for development

### Database & ORM
- **Drizzle ORM**: Type-safe SQL ORM for database operations
- **Neon Database**: Serverless PostgreSQL database service
- **Connect PG Simple**: PostgreSQL session store for Express sessions

### Development Tools
- **Node.js**: JavaScript runtime environment
- **npm/npx**: Package management and script execution
- **TypeScript Compiler**: Type checking and compilation

### Utility Libraries
- **Date-fns**: Date manipulation and formatting
- **Class Variance Authority**: CSS-in-JS utility for component variants
- **CLSX**: Conditional CSS class composition
- **Zod**: Runtime type validation and schema parsing