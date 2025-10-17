# CEIPAL-Style Recruiting Platform - Project Documentation

## Overview
A modern, AI-powered recruiting and workforce management platform built with React, JavaScript, and Tailwind CSS. The entire design system is derived from the Stark Pharma logo colors.

## Color Palette (Extracted from Logo)

### Primary Colors
- **Primary Blue** (`--primary: 197 92% 45%`): Main brand color, used for primary actions and accents
- **Secondary Orange** (`--secondary: 38 90% 52%`): Energetic accent, used for secondary CTAs and highlights
- **Accent Yellow** (`--accent: 51 100% 50%`): Bright accent for special emphasis
- **Success Green** (`--success: 88 50% 49%`): Positive actions, success states, growth indicators

### Gradients
- `--gradient-primary`: Blue gradient for primary CTAs
- `--gradient-secondary`: Orange gradient for secondary CTAs
- `--gradient-hero`: Blue to orange for hero sections
- `--gradient-subtle`: Light background gradient

## Project Structure

```
src/
├── assets/
│   └── logo.webp                 # Stark Pharma logo
├── components/
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   └── ... (other UI components)
│   ├── Navbar.jsx                # Global navigation with responsive menu
│   ├── Hero.jsx                  # Homepage hero section with stats
│   ├── Features.jsx              # Feature cards showcase
│   └── Footer.jsx                # Global footer with links
├── pages/
│   ├── Index.jsx                 # Homepage (Hero + Features)
│   ├── Features.jsx              # Detailed features page
│   ├── AIRecruiting.jsx          # AI recruiting capabilities
│   ├── ATS.jsx                   # Applicant Tracking System
│   ├── Workforce.jsx             # Workforce management modules
│   ├── Dashboard.jsx             # Analytics dashboard preview
│   ├── Login.jsx                 # Authentication page
│   ├── Signup.jsx                # Registration with benefits
│   └── NotFound.jsx              # 404 page
├── hooks/
│   ├── use-mobile.jsx            # Mobile breakpoint detection
│   └── use-toast.js              # Toast notifications
├── lib/
│   └── utils.js                  # Utility functions (cn)
├── App.jsx                       # Main app with routing
├── index.css                     # Design system & CSS variables
└── main.jsx                      # App entry point
```

## Page Descriptions

### Homepage (`/`)
- **Hero Section**: Compelling headline with AI focus, CTA buttons, and key stats (50K+ users, 85% faster hiring, AI-first)
- **Features Grid**: Six main features with icons and descriptions
- **Footer**: Comprehensive sitemap and contact info

### Features Page (`/features`)
- Detailed breakdown of platform capabilities
- Six feature categories: AI Recruiting, ATS, Sourcing, Communication, Analytics, Compliance
- Each card includes feature lists and icons
- CTA section at bottom

### AI Recruiting (`/ai-recruiting`)
- Focus on AI-powered intelligence
- "How It Works" section with 3 steps
- Benefits breakdown with progress bars showing AI accuracy
- Statistics: 98% resume screening, 95% matching, 92% assessment, 89% interview success

### ATS (`/ats`)
- Visual workflow demonstration
- 4-stage pipeline: Job Posting → Screening → Interview → Offer
- Live stats display (156 candidates, 23 in interview, 8 offers)
- Six key features with detailed descriptions

### Workforce Management (`/workforce`)
- Six modules: Time Tracking, Leave Management, Expense Management, Document Management, Employee Self-Service, Analytics
- Each module has feature bullets
- Stats section: 60% time saved, 99.9% accuracy, 50+ countries supported

### Dashboard (`/dashboard`)
- Real-time recruiting metrics
- Four stat cards: Active Jobs (24), Total Candidates (1,247), Interviews (56), Offers (12)
- Pipeline overview with progress bars
- Top candidates table with AI scores
- Quick action buttons

### Login (`/login`)
- Email/password authentication
- Social login options (Google, WhatsApp)
- Forgot password link
- Link to signup

### Signup (`/signup`)
- Two-column layout
- Left: Benefits list with checkmarks, stats
- Right: Registration form (name, email, company, phone, password)
- Social proof with user counts

## Design System Implementation

### Colors (HSL Format)
All colors defined in `src/index.css` using HSL values:
```css
:root {
  --primary: 197 92% 45%;      /* Blue */
  --secondary: 38 90% 52%;     /* Orange */
  --accent: 51 100% 50%;       /* Yellow */
  --success: 88 50% 49%;       /* Green */
}
```

### Usage in Components
Always use semantic tokens:
```jsx
// ✅ Correct - Using design tokens
<div className="bg-primary text-primary-foreground">
<div className="bg-gradient-primary shadow-glow-primary">

// ❌ Wrong - Direct colors
<div className="bg-blue-500 text-white">
```

### Tailwind Configuration
Extended in `tailwind.config.ts`:
- Custom colors mapped to CSS variables
- Background gradients as utilities
- Custom shadows (glow effects)
- Animation keyframes and utilities

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Responsive grid layouts
- Mobile menu in Navbar

## Component Patterns

### Cards
```jsx
<Card className="p-8 hover:shadow-glow-primary transition-all duration-300 border-2 hover:border-primary/50">
```

### Buttons with Gradients
```jsx
<Button className="bg-gradient-primary shadow-glow-primary">
  Start Free Trial
</Button>
```

### Icon Containers
```jsx
<div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
  <Icon size={28} />
</div>
```

### Animated Elements
```jsx
<div className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
```

## State Management Recommendations

### Current Implementation
- React Router v6 for routing
- React hooks (useState, useEffect) for local state
- TanStack Query already installed but not used yet

### For Full Implementation
1. **Authentication**: Use React Context or Zustand
2. **API Calls**: TanStack Query for server state
3. **Forms**: React Hook Form (already installed) with Zod validation
4. **Global State**: Zustand or Redux Toolkit

## API Integration Points

### Backend Endpoints Needed
1. **Authentication**
   - POST `/auth/login`
   - POST `/auth/signup`
   - POST `/auth/logout`
   - POST `/auth/forgot-password`

2. **Candidates**
   - GET `/candidates` (with filters, pagination)
   - POST `/candidates`
   - GET `/candidates/:id`
   - PUT `/candidates/:id`
   - DELETE `/candidates/:id`

3. **Jobs**
   - GET `/jobs`
   - POST `/jobs`
   - GET `/jobs/:id`
   - PUT `/jobs/:id`

4. **Dashboard**
   - GET `/dashboard/stats`
   - GET `/dashboard/pipeline`
   - GET `/dashboard/top-candidates`

5. **AI Features**
   - POST `/ai/match-candidates`
   - POST `/ai/rank-resumes`
   - POST `/ai/suggest-interview-questions`

## Animations & Transitions

### Keyframes (defined in tailwind.config.ts)
- `fade-in`: Opacity and translate Y
- `slide-up`: Vertical slide with opacity
- `scale-in`: Scale and opacity

### Usage
```jsx
className="animate-fade-in"
className="animate-slide-up delay-200"
className="hover:scale-105 transition-transform duration-300"
```

## Best Practices Implemented

1. **Semantic HTML**: Proper use of header, main, section, nav, footer
2. **Accessibility**: ARIA labels, keyboard navigation support
3. **Performance**: Lazy loading candidates, optimized images
4. **SEO**: Proper meta tags in index.html, semantic structure
5. **Code Quality**: JavaScript with best practices throughout
6. **Code Organization**: Clear separation of concerns
7. **Design Consistency**: All colors from design system

## Next Steps for Full Implementation

### Phase 1: Core Functionality
- [ ] Connect to backend API
- [ ] Implement authentication flow
- [ ] Add form validation with Zod
- [ ] Set up TanStack Query for data fetching

### Phase 2: Interactive Features
- [ ] Real candidate management (CRUD)
- [ ] Job posting creation and management
- [ ] Interview scheduling with calendar integration
- [ ] Real-time notifications

### Phase 3: Advanced Features
- [ ] AI candidate matching algorithm
- [ ] Resume parsing functionality
- [ ] Email/SMS integration
- [ ] Analytics charts (Recharts already installed)
- [ ] Document uploads and management

### Phase 4: Enhancements
- [ ] Dark mode toggle (system already supports it)
- [ ] Multi-language support
- [ ] Advanced filters and search
- [ ] Export functionality (PDF, CSV)
- [ ] Team collaboration features

## Environment Variables

Create a `.env` file:
```env
VITE_API_URL=http://localhost:3000/api
VITE_AI_API_KEY=your_ai_api_key
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used

- **React 18**: UI framework
- **JavaScript**: Modern ES6+ syntax
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Component library
- **React Router v6**: Client-side routing
- **TanStack Query**: Server state management (ready to use)
- **React Hook Form**: Form handling (ready to use)
- **Zod**: Schema validation (ready to use)
- **Lucide React**: Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Stark Pharma IT & Health Care Services
