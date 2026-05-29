# Longstake Website

A modern, professional marketing website for Longstake - a Canada-based firm delivering digital product engineering, paid media, social setup, and integrated engineering: websites, mobile apps, Meta and Google Ads, Instagram/social setup, and B2B/IoT integration.

## Features

- **Responsive Design**: Mobile-first approach with clean, professional layout
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Sticky Header**: Header stays fixed at the top while scrolling
- **Scroll Animations**: Fade-in animations triggered on scroll
- **Professional Design**: Corporate consulting firm aesthetic with dark blue and white color scheme

## Tech Stack

- React 18
- Vite (build tool)
- CSS3 (with CSS variables for theming)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Header.jsx          # Sticky navigation header
    BrandWordmark.jsx   # SVG Longstake wordmark
    Footer.jsx          # Footer with links
    SEO.jsx             # JSON-LD structured data
  pages/
    HomePage.jsx        # Landing page (overview + what we do + typical mandates)
    CareersPage.jsx     # Careers
    PrivacyPolicyPage.jsx
    CompanyPolicyPage.jsx
  App.jsx               # Main app component + routes
  main.jsx              # Entry point
  index.css             # Global styles
```

## Design System

- **Primary Color**: Dark Blue (#1e3a5f)
- **Background**: White (#ffffff)
- **Light Sections**: Light Gray (#f5f7fa)
- **Typography**: Inter font family

## Sections (Home)

1. **Hero**: Headline and overview of what Longstake does
2. **Our history**: How the firm developed
3. **What we’ve achieved**: Highlights
4. **When we started / Customers**: Background and engagement model
5. **Build, integrate, launch, and show up**: Capability pillars
6. **Typical mandates**: How teams engage us
7. **Footer**: Contact details, links, and copyright
