# Benjamin Garcia - Art Portfolio

A modern, responsive portfolio website showcasing the artistic work of Benjamin Garcia, a visual artist based in Madrid, Spain.

## Overview

This portfolio website serves as a comprehensive platform for displaying paintings, providing artist information, and facilitating visitor engagement through contact and newsletter features. The application features a clean, minimalist design with smooth animations and responsive layouts optimized for both desktop and mobile devices.

## Tech Stack

### Core Technologies

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool and development server
- **React Router v7** - Client-side routing

### Styling & UI

- **Tailwind CSS v4** - Utility-first CSS framework
- **Headless UI** - Accessible, unstyled UI components
- **Swiper.js** - Touch-enabled carousel

### Third-Party Services

- **Cloudinary** - Image and video hosting
- **Formspree** - Contact form backend
- **Mailchimp** - Newsletter management

### Deployment

- **Vercel** - Hosting and continuous deployment

## Features

### Core Functionality

- **Landing Page**: Full-screen video background with animated hero text and call-to-action
- **Paintings Gallery**: Year-organized collection (2013-2025) with:
  - Desktop: Swiper carousel with custom navigation controls
  - Mobile: Grid layout with lightbox image viewer
- **About Page**: Artist biography, education, and exhibition history
- **Contact Form**: Integrated email submission via Formspree
- **Newsletter Subscription**: Mailchimp integration for mailing list management

### User Experience

- Fully responsive design with mobile-first approach
- Smooth page transitions and animations
- Custom hamburger menu with fade effects for mobile
- Dynamic navbar with gradient fade on landing page
- Optimized image delivery via Cloudinary CDN

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/benjamingarciap/art-portfolio.git
cd art-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── AboutInfo.tsx
│   ├── Carousel.tsx
│   ├── ContactForm.tsx
│   ├── HamburgerButton.tsx
│   ├── MobileImageGrid.tsx
│   ├── MobileMenu.tsx
│   ├── Navbar.tsx
│   └── NewsletterForm.tsx
├── pages/             # Page components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Landing.tsx
│   ├── Newsletter.tsx
│   └── YearPage.tsx
├── data/              # JSON data files
│   └── images.json
├── lib/               # Utility functions
│   └── formatTitleAndDetailsWithYear.tsx
├── scripts/           # Build and utility scripts
│   └── fetchCloudinaryImages.js
├── App.tsx            # Root component with layout
└── main.tsx           # Application entry point
```

## Design System

### Color Palette

- Background: `#F8F8F8` (Light gray)
- Primary Text: `#222` (Dark gray)
- Landing Page Text: `#F8F8F8` (Light)
- Dark Accent: `#131313` (Near black)

### Typography

- Primary Font: System fonts stack
- Letter Spacing: Varied (tighter for headings, wider for body)
- Font Weights: Normal, Medium, Black

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

This is a personal portfolio project. If you find any bugs or have suggestions, please open an issue.

## License

This project is private and proprietary.

## Contact

Benjamin Garcia

- Portfolio: [URL to add]
- Email: [Via contact form on website]

---
