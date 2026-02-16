# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern news portal built with Next.js 16, featuring integrated ad zones. The project demonstrates how to build a responsive news website with advertisement placement capabilities. Designed to be deployed to GitHub Pages with a single script command.

## Development Commands

**Package Manager**: npm

```bash
npm install       # Install dependencies
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Build for production (outputs to /out)
npm run start     # Start production server (rarely used, project uses static export)
npm run lint      # Run ESLint
npm run deploy    # Deploy to GitHub Pages
```

## Architecture

### Static Site Generation

This project uses Next.js **static export** (`output: 'export'` in next.config.mjs) to generate a fully static site compatible with GitHub Pages:

- All pages pre-rendered at build time
- No server-side rendering or API routes
- Static files output to `out/` directory
- Client-side navigation with Next.js router

### Core Components

**Page Structure** ([app/page.tsx](app/page.tsx)):
- Composes all sections: Header → Hero → NewsGrid → Categories → Footer
- Single page application, no routing

**Component Hierarchy**:
1. **[Header](components/Header.tsx)** - Sticky navigation with responsive mobile menu
2. **[Hero](components/Hero.tsx)** - Featured news with 2x AdZone (300x250) in sidebar
3. **[NewsGrid](components/NewsGrid.tsx)** - Grid of 9 news cards with embedded AdZones
4. **[NewsCard](components/NewsCard.tsx)** - Individual news item card
5. **[Categories](components/Categories.tsx)** - Category grid with icons
6. **[AdZone](components/AdZone.tsx)** - Reusable ad placeholder component
7. **[Footer](components/Footer.tsx)** - Site footer with links and social media

### Ad Zone System

**[AdZone Component](components/AdZone.tsx)**:
- Simple visual placeholder for ad placement
- Props: `width`, `height`, `className`
- Displays dashed border with "Ad Zone {width}x{height}" text
- Standard IAB sizes supported: 300x250, 728x90, 160x600

**Ad Placement Strategy**:
- Hero sidebar: 2x vertical 300x250 zones
- NewsGrid: 1x 300x250 after 3rd card
- NewsGrid: 1x 728x90 leaderboard after 6th card

### Data Management

**[lib/mockNews.ts](lib/mockNews.ts)**:
- Contains all news data (mainNews, newsList, categories)
- TypeScript interfaces: `NewsItem`, category structure
- Uses Unsplash images for placeholders
- Easy to extend with new news items

### Styling

- **Tailwind CSS v4** with PostCSS plugin
- Custom colors defined in [tailwind.config.ts](tailwind.config.ts):
  - `primary: #2563eb` (blue)
  - `secondary: #64748b` (gray)
- Global styles in [app/globals.css](app/globals.css)
- Responsive breakpoints: `md` (768px), `lg` (1024px)

## GitHub Pages Configuration

### Critical Settings ([next.config.mjs](next.config.mjs))

```javascript
output: 'export'                    // Static export mode
basePath: '/next-ads-sample-1'      // Repository name
assetPrefix: '/next-ads-sample-1'   // Asset URL prefix
images: { unoptimized: true }       // Required for static export
```

**Important**: When deploying to a different repository, update `basePath` and `assetPrefix` in next.config.mjs to match the new repository name.

### Deploy Process

**[scripts/deploy.sh](scripts/deploy.sh)**:
1. Runs `npm run build` to generate static files
2. Uses `gh-pages` package to deploy `out/` directory to `gh-pages` branch
3. GitHub Pages automatically serves from `gh-pages` branch

**[public/.nojekyll](public/.nojekyll)**:
- Empty file that disables Jekyll processing on GitHub Pages
- Ensures proper serving of Next.js assets (files starting with underscore)

## Common Tasks

### Adding News Items

Edit [lib/mockNews.ts](lib/mockNews.ts):
```typescript
export const newsList: NewsItem[] = [
  // Add new items here
  {
    id: 10,
    title: "New headline",
    description: "Description",
    category: "Category",
    date: "16 февраля 2026",
    imageUrl: "https://..."
  }
];
```

### Adding Ad Zones

Import and use the AdZone component:
```tsx
import { AdZone } from "@/components/AdZone";

<AdZone width={300} height={250} className="optional-classes" />
```

### Changing Colors

Update [tailwind.config.ts](tailwind.config.ts):
```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
      secondary: "#your-color",
    }
  }
}
```

### Testing Build Locally

```bash
npm run build                    # Build to out/
npx serve out                    # Serve locally on port 3000
# Visit http://localhost:3000/next-ads-sample-1/
```

Note: Must include basePath in URL when testing locally.

## Important Constraints

### Next.js Static Export Limitations

- No Server Components with dynamic data fetching
- No API routes (`pages/api/*`)
- No Image Optimization (must use `unoptimized: true`)
- No rewrites, redirects, or headers in next.config.mjs
- All data must be available at build time

### GitHub Pages Limitations

- Only serves static files
- No server-side processing
- Supports custom domains via CNAME
- Free tier has bandwidth limits

## File Path Conventions

- All imports use `@/` alias (maps to project root via tsconfig.json)
- Component imports: `@/components/ComponentName`
- Lib imports: `@/lib/fileName`
- No relative imports like `../../components`

## Future Enhancements

If expanding this project to include actual ad serving:
1. Replace AdZone component with real ad integration (e.g., Google AdSense)
2. Add tracking scripts in [app/layout.tsx](app/layout.tsx)
3. Consider using environment variables for ad network IDs
4. Add privacy policy and cookie consent if required
