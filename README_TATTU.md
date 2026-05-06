# Tattu London - Premium Modern Restaurant Website

A luxury, cinematic restaurant website built with Next.js, React Three Fiber, Tailwind CSS, and Framer Motion. Featuring dark luxury design, 3D animations, and premium UI/UX for an elevated dining experience.

## 🎭 Features

✨ **Premium Design Elements**
- Dark luxury color palette with gold accents
- Glassmorphism UI components
- Smooth scroll animations with Framer Motion
- 3D cherry blossom petals and glowing orbs
- Responsive design for all devices

🎬 **Advanced Animations**
- Text reveal animations on scroll
- Image parallax effects
- 3D particle effects (mobile-optimized)
- Hover magnetic button effects
- Smooth page transitions
- Auto-scrolling review carousel

📱 **Fully Responsive**
- Desktop, tablet, and mobile optimized
- Mobile-specific 3D performance optimization
- Touch-friendly navigation
- Hamburger menu on mobile

🔍 **SEO & Accessibility**
- Semantic HTML
- Meta tags and Open Graph support
- Lighthouse 90+ target
- WCAG accessibility compliance
- Proper alt text and contrast ratios

## 📦 Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber, Three.js
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Google Fonts (Playfair Display, Cormorant Garamond)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or bun
- npm or yarn package manager

### Installation

1. **Navigate to project**
```bash
cd "Tattu London(restaurant)/tattu-london"
```

2. **Install dependencies**
```bash
npm install
```

3. **Add real images** (Optional but recommended)
   - Replace SVG placeholders in `public/assets/` with actual JPEG images
   - See `public/assets/README.md` for details
   - Update file extensions if using .jpg instead of .svg

4. **Run development server**
```bash
npm run dev
```

5. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main home page
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles & animations
├── components/
│   ├── Navbar.tsx            # Sticky navigation with mobile menu
│   ├── Footer.tsx            # Footer with links & contact
│   ├── sections/             # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── VenueStorySection.tsx
│   │   ├── ExperienceCards.tsx
│   │   ├── MenuPreview.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── PrivateHireSection.tsx
│   │   ├── TheatreDiningSection.tsx
│   │   ├── LocationSection.tsx
│   │   └── BookingCTA.tsx
│   ├── three/
│   │   └── CherryBlossomScene.tsx  # 3D animation
│   └── ui/
│       ├── SectionHeading.tsx
│       ├── GlowCard.tsx
│       └── MagneticButton.tsx
├── data/
│   ├── siteData.ts           # Site config & contact info
│   ├── menuData.ts           # Menu items & tabs
│   ├── reviewsData.ts        # Guest reviews & themes
│   └── galleryData.ts        # Gallery images
├── hooks/
│   ├── useInView.ts          # Intersection observer hook
│   └── useMediaQuery.ts      # Media query hook
└── lib/
    └── (utility functions)
```

## 🎨 Design System

### Color Palette
```css
--tattu-black: #0a0a0a        /* Deep black background */
--tattu-charcoal: #141414     /* Dark card background */
--tattu-plum: #1a0a14         /* Purple-dark accent */
--tattu-jade: #0d1f1a         /* Green-dark accent */
--tattu-gold: #c9a96e         /* Primary accent */
--tattu-gold-light: #e8d5a3   /* Light gold */
--tattu-crimson: #8b1a1a      /* Dark red */
--tattu-amber: #b8860b        /* Warm accent */
--tattu-pink: #ff6b9d         /* Neon pink accent */
--tattu-smoke: #2a2a2a        /* Subtle gray */
```

### Typography
- **Display**: Cormorant Garamond (serif, headings)
- **Body**: Geist Sans (modern sans-serif)
- **Accent**: Playfair Display (elegant serif)

## 📝 Updating Content

### Menu Items
Edit `src/data/menuData.ts`:
```typescript
export const menuTabs: MenuTab[] = [
  {
    id: "a-la-carte",
    label: "À La Carte",
    categories: [
      {
        title: "Dim Sum & Small Plates",
        items: [
          { name: "Dish Name", description: "Description", price?: "£XX" },
        ],
      },
    ],
  },
];
```

### Gallery Images
Edit `src/data/galleryData.ts`:
```typescript
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/assets/your-image.jpg",
    alt: "Description",
    category: "interior" | "food" | "cocktail" | "ambience" | "private",
    label: "Label",
  },
];
```

### Reviews
Edit `src/data/reviewsData.ts`:
```typescript
export const reviews: Review[] = [
  {
    id: 1,
    quote: "Guest review quote...",
    author: "Guest Name",
    source: "Google Reviews",
    rating: 5,
  },
];
```

### Site Settings
Edit `src/data/siteData.ts` for contact info, social links, menu PDFs, and booking URL.

## 🖼️ Image Management

### Using SVG Placeholders
Currently using SVG placeholders. To switch to actual images:

1. **Replace SVG files** in `public/assets/`:
   - `tattu-hero.svg` → `tattu-hero.jpg`
   - `tattu-interior-1.svg` → `tattu-interior-1.jpg`
   - `tattu-food-1.svg` → `tattu-food-1.jpg`
   - `tattu-cocktail-1.svg` → `tattu-cocktail-1.jpg`
   - `tattu-private-dining.svg` → `tattu-private-dining.jpg`

2. **Update file references** in:
   - `src/data/galleryData.ts` (change .svg to .jpg)
   - `src/components/sections/HeroSection.tsx`
   - `src/components/sections/VenueStorySection.tsx`
   - `src/components/sections/ExperienceCards.tsx`
   - `src/components/sections/PrivateHireSection.tsx`
   - `src/components/sections/TheatreDiningSection.tsx`
   - `src/components/sections/BookingCTA.tsx`

### Best Practices
- Minimum 1920px wide for hero
- Optimize to max 200KB per image
- Use dark, moody tones
- Ensure sufficient contrast for text overlays
- Maintain consistent aspect ratios

## 🔧 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## 📊 Performance Targets

- **Lighthouse Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 95+

## 🎬 Animation Features

- Scroll-triggered text and image reveals
- Parallax backgrounds
- 3D floating particles
- Magnetic button hover effects
- Auto-scrolling review carousel
- Mobile-optimized particle system

## 📱 Mobile Optimization

The site automatically:
- Reduces 3D particle count on mobile
- Simplifies animations on low-end devices
- Adapts layout for small screens
- Shows touch-friendly hamburger menu
- Uses single-column gallery layout

## 📞 Contact Information

**Tattu London**
- Address: The Now Building Rooftop, Denmark Street, London WC2H 0LA
- Phone: 0203 778 1985
- Email: london@tattu.co.uk
- Hours: Monday to Sunday, 12pm till late
- Booking: [SevenRooms](https://www.sevenrooms.com/reservations/tattulondon)
- Instagram: @tattulondon
- Facebook: TattuLondon

## 🚀 Deployment

### Vercel
```bash
vercel deploy
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🆘 Troubleshooting

**Images not showing?**
- Verify `public/assets/` directory exists
- Check file extensions match imports
- Restart dev server

**3D scene not rendering?**
- Check browser console for WebGL errors
- Verify GPU support
- Disable antialias for older devices

**Slow performance?**
- Compress images further
- Reduce particle count in `CherryBlossomScene.tsx`
- Run Lighthouse audit

## 📄 License

Proprietary. All rights reserved to Tattu London.

---

**Built for Tattu London - Premium Asian Dining Experience**
