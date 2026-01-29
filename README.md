# Fort Myers Mattress By Appointment

A fast, modern website for a local mattress store in Fort Myers, Florida. Built with Astro and Tailwind CSS for optimal performance.

## Quick Start

```bash
# Install dependencies
npm install

# Fetch images from Unsplash
npm run fetch-assets

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Netlify (Recommended)

### Option 1: One-Click Deploy

1. Push this code to a GitHub repository
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Build settings are auto-detected from `netlify.toml`
6. Click "Deploy"

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (creates new site)
netlify deploy --prod
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or deploy to production
vercel --prod
```

## Project Structure

```
fort-myers-mattress/
├── public/
│   ├── images/           # Downloaded Unsplash images
│   ├── favicon.svg       # Site favicon
│   ├── og-image.svg      # Social sharing image
│   └── robots.txt        # Search engine instructions
├── src/
│   ├── components/       # Reusable Astro components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Site pages (index, book, about)
│   ├── styles/           # Global CSS with Tailwind
│   └── config.ts         # Business info configuration
├── scripts/
│   └── fetch_assets.ts   # Image download script
├── CREDITS.md            # Image attribution
├── netlify.toml          # Netlify configuration
└── package.json
```

## Configuration

All business information is in `src/config.ts`. Update these values:

- Business name, phone, address
- Email address
- Google Maps embed URL
- Social media links
- Hours (if applicable)
- Site URL (for SEO)

## Pages

1. **Home** (`/`) - Hero, value props, how it works, products, testimonials, location
2. **Book Appointment** (`/book`) - Contact form with Netlify Forms
3. **About & FAQ** (`/about`) - Company info and 12 FAQs

## Features

- **Performance**: Minimal JS, optimized images, Astro static generation
- **SEO**: Meta tags, Open Graph, LocalBusiness schema, sitemap
- **Mobile-first**: Responsive design, sticky header, touch-friendly
- **Forms**: Netlify Forms with honeypot spam protection
- **Click-to-call/text**: Direct phone and SMS links

## Customization Checklist

After deploying, update these items:

### Required Updates

- [ ] `src/config.ts` - Update email address
- [ ] `src/config.ts` - Update `siteUrl` with your actual domain
- [ ] `astro.config.mjs` - Update `site` URL
- [ ] `public/robots.txt` - Update sitemap URL

### Recommended Updates

- [ ] `src/config.ts` - Add social media URLs
- [ ] `src/config.ts` - Update Google Maps embed URL with actual coordinates
- [ ] `src/components/Testimonials.astro` - Replace placeholder reviews with real ones
- [ ] Replace Unsplash images with actual store photos

### Optional

- [ ] Add Google Analytics or Plausible tracking
- [ ] Connect a scheduling tool (Calendly, etc.)
- [ ] Set up email forwarding for form submissions

## Form Handling

The appointment form uses Netlify Forms by default. When deployed to Netlify:

1. Forms are automatically detected
2. Submissions appear in Netlify dashboard → Forms
3. Set up email notifications in Netlify settings

For non-Netlify hosting, update the form to use:
- Formspree
- EmailJS
- Your own backend

## Performance Goals

Target: 90+ Lighthouse score on mobile

- Static HTML generation (Astro)
- Minimal JavaScript (only mobile menu toggle)
- Optimized images (lazy loading, proper sizing)
- System fonts (no web font loading)
- Inlined critical CSS

## License

Images are from Unsplash (see CREDITS.md). All other code is proprietary.
