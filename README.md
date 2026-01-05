# Afrotech Report 25

A comprehensive report website showcasing African technology trends, innovations, and insights for 2025. Built as a modern, responsive web application with static export capabilities for easy deployment.

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.10 with App Router
- **Runtime**: React 19.2.0
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives (shadcn/ui)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Theme**: next-themes for dark/light mode
- **Analytics**: Vercel Analytics (disabled in static export)
- **Package Manager**: pnpm / npm
- **Build Tool**: Turbopack (Next.js 16)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.17 or later
- npm, pnpm, or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AfrotechReport25
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Or using pnpm
   pnpm install
   ```

3. **Start development server**
   ```bash
   # Using npm
   npm run dev

   # Or using pnpm
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development
- Hot reload is enabled for instant updates
- TypeScript checking runs automatically
- ESLint ensures code quality

## 📜 Available Scripts

### Development
- `npm run dev` / `pnpm dev` - Start the development server with hot reload
- `npm run lint` / `pnpm lint` - Run ESLint for code quality checks

### Production
- `npm run build` / `pnpm build` - Build the application for production (server-side)
- `npm run start` / `pnpm start` - Start the production server

### Static Export (GitHub Pages)
- `npm run export` / `pnpm export` - Export as static files for GitHub Pages
- `npm run deploy` / `pnpm deploy` - Build static files and deploy to GitHub Pages

### Usage Examples
```bash
# Development
npm run dev

# Production build
npm run build && npm run start

# GitHub Pages deployment
npm run deploy
```

## 🚀 Deployment

### GitHub Pages (Static Hosting)

This project is configured for static export, making it perfect for GitHub Pages hosting.

#### Automatic Deployment
```bash
npm run deploy
# or
pnpm deploy
```

#### Manual Deployment Steps

1. **Build static export**
   ```bash
   npm run export
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npx gh-pages -d out -t true
   ```

#### GitHub Repository Setup

1. Push your code to GitHub
2. Go to **Settings → Pages**
3. Set source to **"Deploy from a branch"**
4. Select **`gh-pages`** branch and **`/ (root)`** folder
5. Click **Save**

#### Repository Path Configuration

If your repository name differs from your GitHub username, update `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/your-repo-name',      // ← Uncomment and update
  assetPrefix: '/your-repo-name',   // ← Uncomment and update
}
```

#### Static Export Limitations

Since GitHub Pages is static hosting, the following features are **not available**:
- ❌ API routes
- ❌ Server-side rendering (SSR)
- ❌ Middleware
- ❌ Vercel Analytics (in static export)

**✅ What works perfectly:**
- Static page generation
- Client-side interactivity
- All UI components and animations
- Responsive design
- Image optimization
- Form handling (client-side only)

## 📁 Project Structure

```
AfrotechReport25/
├── app/                          # Next.js 16 App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with theme provider
│   └── page.tsx                 # Home page component
├── components/                   # React components
│   ├── ui/                      # shadcn/ui component library (40+ components)
│   │   ├── button.tsx           # Button variants and styles
│   │   ├── card.tsx             # Card layouts
│   │   ├── dialog.tsx           # Modal dialogs
│   │   └── ...                  # Accordion, forms, charts, etc.
│   ├── hero-section.tsx         # Main hero banner
│   ├── overview-section.tsx     # Report overview
│   ├── key-trends-section.tsx   # Technology trends
│   ├── ideas-section.tsx        # Innovation ideas
│   ├── action-highlights-section.tsx # Key actions
│   ├── reflections-section.tsx  # Final thoughts
│   ├── photo-gallery.tsx        # Image gallery
│   └── theme-provider.tsx       # Dark/light theme provider
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile detection
│   └── use-toast.ts             # Toast notifications
├── lib/                          # Utilities
│   └── utils.ts                 # Tailwind class merging utilities
├── public/                       # Static assets
│   ├── placeholder-*.png/svg    # Demo images and logos
│   └── icon-*                   # Favicons and app icons
└── styles/                       # Additional styles
    └── globals.css              # Additional global styles
```

## 🎨 Key Features

### Design & User Experience
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern UI**: Built with Radix UI primitives for accessibility and consistency
- **Dark/Light Theme**: Automatic theme switching with next-themes
- **Smooth Animations**: CSS animations powered by Tailwind CSS v4

### Technical Excellence
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Performance Optimized**: Next.js 16 with Turbopack for fast builds
- **Static Export Ready**: Configured for GitHub Pages deployment
- **SEO Friendly**: Proper meta tags and semantic HTML structure

### Component Library
- **40+ UI Components**: Complete shadcn/ui component library
- **Form Handling**: React Hook Form with Zod validation
- **Data Visualization**: Recharts for interactive charts and graphs
- **Icons**: Lucide React icon library (1000+ icons)

### Content Sections
- **Hero Section**: Engaging introduction with call-to-action
- **Overview**: Executive summary of African tech landscape
- **Key Trends**: Current technology trends and innovations
- **Ideas Section**: Innovative concepts and solutions
- **Action Highlights**: Key initiatives and recommendations
- **Reflections**: Final thoughts and future outlook
- **Photo Gallery**: Visual showcase of African tech achievements

## 🔧 Development Guidelines

### Code Style
- **ESLint**: Configured for code quality and consistency
- **TypeScript**: Strict mode enabled for type safety
- **Tailwind CSS**: Utility-first approach with custom design tokens
- **Component Structure**: shadcn/ui patterns for consistency

### Adding New Components
1. Use the existing UI component library from `components/ui/`
2. Follow the established naming conventions
3. Include proper TypeScript types
4. Add responsive design considerations

### Customization
- **Colors**: Update Tailwind config for brand colors
- **Content**: Edit section components in `components/`
- **Layout**: Modify `app/layout.tsx` and `app/page.tsx`
- **Styling**: Customize `app/globals.css` for global styles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the development guidelines
4. Test with `npm run export` to ensure static export works
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ for showcasing African technology excellence**

*Afrotech Report 25 - Illuminating the future of African innovation*
