# Corridor Bar & Kitchen Website

A stunning dark-themed website for Corridor Bar & Kitchen, Kolkata.

## Tech Stack
- **Frontend**: React + Tailwind CSS + Framer Motion
- **Backend**: FastAPI + MongoDB
- **Animations**: Lenis smooth scroll + react-fast-marquee

## Features
- Hero section with parallax effect
- Moving gallery with grayscale-to-color hover
- Typed menu with 7 categories
- Gallery with category filters
- Zomato booking integration
- Responsive design

## Setup Instructions

### Backend
```bash
cd backend
pip install -r requirements.txt
# Set environment variables in .env
uvicorn server:app --host 0.0.0.0 --port 8001
```

### Frontend
```bash
cd frontend
yarn install
# Update REACT_APP_BACKEND_URL in .env
yarn start
```

## Contact Info
- Phone: +91 92309 68100
- Instagram: @corridorbarandkitchen
- Location: Chowringhee, Kolkata

## Colors
- Primary: Gold (#C5A572)
- Background: Black (#000000)
- Fonts: Playfair Display (headings) + Manrope (body)
