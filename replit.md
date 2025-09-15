# Overview

Soyth is a volunteer web developer initiative platform designed to connect developers with meaningful projects and build a supportive community. The project currently features a modern landing page built with a static frontend and is being transitioned to a full-stack application with React components and database integration capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application uses a hybrid approach combining static HTML with modern web technologies:

- **Static Landing Page**: Built with vanilla HTML, CSS, and JavaScript for the main marketing site
- **Component Library**: Extensive Radix UI component system for building rich interactive interfaces
- **Styling**: Tailwind CSS with custom design tokens and theme configuration
- **Typography**: Inter font family for consistent visual identity
- **Responsive Design**: Mobile-first approach with responsive navigation and layout

## Backend Architecture

The backend is structured as a Node.js application with TypeScript:

- **Server Framework**: Custom HTTP server implementation using Node.js built-in modules
- **Build System**: Vite for frontend builds, esbuild for backend bundling
- **Development**: tsx for TypeScript execution in development mode
- **Static File Serving**: Custom static file server with MIME type handling and security checks

## Data Storage Solutions

The application is configured for database integration using:

- **ORM**: Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple

## Authentication and Authorization

The project includes infrastructure for user management:

- **Form Handling**: React Hook Form with Hookform resolvers for validation
- **Session Management**: PostgreSQL-backed session storage
- **Component Library**: Radix UI components for authentication forms and dialogs

## Design System

A comprehensive design system built on:

- **Component Architecture**: Radix UI primitives for accessibility and functionality
- **Styling System**: Class Variance Authority for consistent component styling
- **Utility Libraries**: clsx for conditional class names, cmdk for command interfaces
- **State Management**: TanStack React Query for server state management

# External Dependencies

## UI and Styling
- **Radix UI**: Complete set of React components for building accessible interfaces
- **Tailwind CSS**: Utility-first CSS framework loaded via CDN
- **Google Fonts**: Inter font family for typography

## Database and Backend
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: TypeScript ORM for database operations
- **connect-pg-simple**: PostgreSQL session store for Express-compatible sessions

## Development Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for backend code
- **tsx**: TypeScript execution engine for development
- **TypeScript**: Static type checking

## React Ecosystem
- **TanStack React Query**: Data fetching and caching library
- **React Hook Form**: Form state management and validation
- **Embla Carousel**: Carousel/slider component library

## Utility Libraries
- **date-fns**: Date manipulation and formatting
- **class-variance-authority**: Component styling variants
- **clsx**: Conditional CSS class utilities
- **cmdk**: Command menu interface components