# Talentora - AI-Powered Interview Platform

A modern web application for AI-powered interview practice and management built with Next.js 16, React 19, TypeScript, Tailwind CSS, and ShadCN UI.

## Features

### Dashboard
- **Applicant Dashboard**: Personalized welcome and interview overview with clean white backgrounds
- **Interview Cards**: Display upcoming, in-progress, and past interviews with detailed information
  - Company name, interviewer, date/time
  - Interview type badges (Technical, Behavioral, Case, Consulting, System Design, Product)
  - Status indicators (upcoming, in-progress, failed, pass, completed)
  - Quick access to DemoScout practice sessions with intelligent popup positioning

### DemoScout - AI Interview Coach
- **Multiple AI Coaches**: 6 specialized AI interview coaches with profile images
  - Vincent (Technical)
  - Audi (Case)
  - Ruby (Behavioral)
  - Hongjin (Consulting)
  - Jamie (System Design)
  - Sarah (Product)
- **Smart Recommendations**: Contextual mock interview suggestions based on upcoming interview types
- **Interactive Popups**: Quick preview with intelligent positioning that adapts to card location
- **Detailed Mock Information**:
  - Interview type subtitle in modal dialog
  - Learning points, estimated time, AI coach descriptions
  - Clean modal UI with avatar, descriptions, and action buttons

### Interview Flow
1. **Get Ready Page**: System check for camera, microphone, and connection
2. **Live Interview Interface**:
   - Split-screen layout (AI/Script on left, camera on right)
   - Real-time transcript display
   - Control belt with mic, camera, settings, and end call controls
   - Recording indicator
   - Smart redirect: DemoScout sessions return to `/dashboard/demoscout`, real interviews return to `/dashboard`

### Navigation
- Main dashboard
- DemoScout page
- Placeholder pages (Solutions, Resources, Company)

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router with Turbopack)
- **Runtime**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Radix UI + ShadCN UI
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority, date-fns

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── dashboard/
│   │   ├── page.tsx                    # Main dashboard
│   │   ├── interview/[id]/
│   │   │   ├── ready/page.tsx         # Get ready (real interview)
│   │   │   └── live/page.tsx          # Live interview
│   │   └── demoscout/
│   │       ├── page.tsx                # DemoScout main page
│   │       └── [type]/
│   │           ├── ready/page.tsx      # Get ready (mock)
│   │           └── live/page.tsx       # Live mock interview
│   ├── solutions/page.tsx              # Placeholder
│   ├── resources/page.tsx              # Placeholder
│   ├── company/page.tsx                # Placeholder
│   ├── layout.tsx                      # Root layout
│   ├── page.tsx                        # Home (redirects to dashboard)
│   └── globals.css                     # Global styles
├── components/
│   ├── layout/
│   │   ├── header.tsx                  # App header
│   │   └── dashboard-layout.tsx        # Dashboard wrapper
│   ├── dashboard/
│   │   ├── interview-card.tsx          # Interview card with popups
│   │   └── welcome-section.tsx         # Welcome banner
│   ├── demoscout/
│   │   ├── demoscout-popup.tsx         # Tooltip popup
│   │   └── mock-card.tsx               # Mock interview card
│   ├── interview/
│   │   ├── get-ready.tsx               # System check component
│   │   └── live-interview.tsx          # Live interview UI
│   └── ui/                             # ShadCN UI components
├── lib/
│   ├── mock-data.ts                    # Sample data
│   └── utils.ts                        # Utility functions
└── public/                             # Static assets
```

## Mock Data

The application includes sample data for:
- **8 Real Interviews**: Google, Microsoft, Deloitte, Goldman Sachs, McKinsey, Amazon, Meta, Apple
- **6 DemoScout Mocks**: Technical (Vincent), Case (Audi), Behavioral (Ruby), Consulting (Hongjin), System Design (Jamie), Product (Sarah)

All data is located in `/lib/mock-data.ts` and can be easily customized. Bot profile images are stored in `/public/bots/`.

## Customization

### Colors
The Talentora brand colors are defined in `/app/globals.css`:
- Primary: #6366F1 (Indigo)
- Secondary: #EC4899 (Pink)
- Background: #F8F7FC (Light Lavender)

### Adding More Interviews
Edit `/lib/mock-data.ts` to add more sample interviews or DemoScout mocks.

### Styling
All components use Tailwind CSS and can be customized by editing the className props.

## Features Roadmap

### Current (MVP)
- ✅ Dashboard with interview cards and status tracking
- ✅ DemoScout AI coach system with 6 specialized coaches
- ✅ Get ready pages with system checks
- ✅ Live interview interface with camera/mic controls
- ✅ Smart recommendations based on interview type
- ✅ Intelligent popup positioning
- ✅ Smart redirect after interview completion
- ✅ Clean white background design (no gradients)
- ✅ Modal dialogs with interview type descriptions

### Future Enhancements
- [ ] Real camera/microphone integration using WebRTC
- [ ] Backend API integration
- [ ] Authentication system
- [ ] Real-time AI responses with speech recognition
- [ ] Interview recording and playback
- [ ] Performance analytics and feedback
- [ ] Mobile responsive design
- [ ] Interview scheduling system

## License

This is a proof-of-concept project for demonstration purposes.

## Contact

For questions or feedback about this POC, please reach out to the development team.
