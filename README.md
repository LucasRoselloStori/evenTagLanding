# EventTag Landing Page

> 🚀 **Built with [v0](https://v0.dev)** - AI-powered development platform

A modern, responsive landing page for EventTag - an advanced RFID-based event analytics platform that helps event organizers optimize their layouts and improve attendee engagement through real-time data insights.

## 🚀 Features

### Core Functionality
- **Real-time Analytics Dashboard**: Interactive visualizations of crowd density, traffic flow, and attendee behavior
- **AI-Powered Insights**: Intelligent analysis of visitor patterns and movement data
- **Heat Maps**: Visual representation of popular areas and congestion points
- **Movement Flow Analysis**: Track common routes between event zones
- **Natural Language Queries**: Chat with your metrics using AI-powered data analysis

### Technical Features
- **Dark Mode Support**: Complete theme switching with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Video Background**: Dynamic video background with zoom and opacity effects
- **Interactive Carousel**: Showcase dashboard features with smooth transitions
- **WhatsApp Integration**: Direct contact through WhatsApp for demo requests

## 🛠️ Tech Stack

- **Development Platform**: [v0](https://v0.dev) - AI-powered development
- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **Package Manager**: pnpm
- **Deployment**: Vercel (with Analytics)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LucasRoselloStori/evenTagLanding.git
   cd evenTagLanding
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal)

## 🎨 Design System

### Color Palette
- **Primary**: Cyan tones for CTAs and highlights
- **Secondary**: Gray scale for backgrounds and text
- **Accent**: Orange and green for feature highlights
- **Dark Mode**: Full dark theme support with proper contrast ratios

### Typography
- **Font**: Geist Sans (primary), Geist Mono (code)
- **Responsive**: Scales appropriately across device sizes

### Components
- **Cards**: Feature showcases with hover effects
- **Buttons**: Multiple variants with consistent styling
- **Navigation**: Sticky header with smooth scrolling
- **Carousel**: Interactive dashboard feature showcase

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- **Desktop**: Full feature set with side-by-side layouts
- **Tablet**: Adapted layouts with maintained functionality
- **Mobile**: Stacked layouts with touch-friendly interactions

## 🌙 Dark Mode

The application includes a complete dark mode implementation:
- **System Detection**: Automatically detects user's system preference
- **Manual Toggle**: Users can switch themes using the toggle in the header
- **Persistent**: Theme preference is saved and persists between sessions
- **Smooth Transitions**: Elegant theme switching animations

## 🎥 Video Background

The hero section features a dynamic video background with:
- **Effects**: 150% zoom with 60% opacity
- **Fallback**: Static image for browsers that don't support video
- **Performance**: Optimized loading with proper poster images

## 📊 Interactive Features

### Dashboard Carousel
- **Auto-play**: Slides change every 4 seconds
- **Manual Navigation**: Arrow buttons and dot indicators
- **Smooth Transitions**: CSS-based animations
- **Content**: Real-time analytics visualizations

### Contact Integration
- **WhatsApp**: Direct messaging to +54 11 3355-7537
- **Pre-filled Message**: Professional inquiry template
- **Multiple CTAs**: Strategic placement throughout the page

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
3. Deploy automatically on push to main branch

### Environment Variables
No environment variables required for basic functionality.

## 📁 Project Structure

```
evenTagLanding/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── theme-provider.tsx   # Theme management
│   └── theme-toggle.tsx     # Dark mode toggle
├── public/
│   ├── eventtag-logo.png    # Company logo
│   ├── landing-2.mp4        # Hero video background
│   └── modern-event-space-with-people-networking.png  # Video poster
├── lib/
│   └── utils.ts             # Utility functions
└── package.json             # Dependencies and scripts
```

## 🎯 Key Sections

1. **Hero Section**: Video background with main value proposition
2. **Features**: Six key features with icons and descriptions
3. **Analytics Dashboard**: Interactive carousel showcasing platform capabilities
4. **Testimonials**: Customer success story
5. **Call-to-Action**: WhatsApp integration for demo requests
6. **Footer**: Company information and contact details

## 🔧 Development

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting
- **Tailwind**: Utility-first CSS approach

## 📈 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Caching**: Proper cache headers for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Contact

- **WhatsApp**: +54 11 3355-7537
- **Email**: Contact through the landing page
- **Website**: [EventTag Landing Page](https://your-domain.com)

---

Built with ❤️ using [v0](https://v0.dev), Next.js and Tailwind CSS