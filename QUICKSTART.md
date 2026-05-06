# Quick Start Guide - Tattu London Website

## Installation (2 minutes)

```bash
cd "Tattu London(restaurant)/tattu-london"
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── page.tsx      # Main page (all sections)
│   ├── layout.tsx    # Root layout with SEO
│   └── globals.css   # Global styles & animations
├── components/       # React components
│   ├── Navbar.tsx    # Navigation bar
│   ├── Footer.tsx    # Footer
│   ├── sections/     # Page sections (10+ components)
│   ├── three/        # 3D components (Three.js)
│   └── ui/           # Reusable UI components
├── data/             # Content & configuration
│   ├── siteData.ts   # Contact, links, hours
│   ├── menuData.ts   # Menu items & categories
│   ├── reviewsData.ts # Guest reviews
│   └── galleryData.ts # Gallery images
└── hooks/            # Custom React hooks
    ├── useInView.ts  # Scroll trigger
    └── useMediaQuery.ts # Responsive design
```

## Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint

# Clean and rebuild
rm -rf .next node_modules
npm install
npm run dev
```

## Making Changes

### Update Restaurant Info
Edit `src/data/siteData.ts`:
```typescript
export const siteData = {
  name: "Tattu London",
  contact: { phone: "0203 778 1985", email: "london@tattu.co.uk" },
  location: { /* address */ },
  // ... more fields
};
```

### Update Menu Items
Edit `src/data/menuData.ts`:
```typescript
{
  id: "a-la-carte",
  label: "À La Carte",
  categories: [
    {
      title: "Dim Sum & Small Plates",
      items: [
        { name: "Dish Name", description: "...", price: "£XX" },
      ]
    }
  ]
}
```

### Update Reviews
Edit `src/data/reviewsData.ts`:
```typescript
{
  id: 1,
  quote: "Review text...",
  author: "Guest Name",
  source: "Google Reviews",
  rating: 5,
}
```

### Update Gallery Images
Edit `src/data/galleryData.ts`:
```typescript
{
  id: 1,
  src: "/assets/tattu-interior-1.svg", // Change to .jpg
  alt: "Description",
  category: "interior",
  label: "Interior",
}
```

Replace SVG files in `public/assets/` with JPEG versions.

## Key Features

✨ **3D Animations**
- Cherry blossom particles in hero
- Glowing orbs
- Mobile-optimized (fewer particles)
- File: `src/components/three/CherryBlossomScene.tsx`

🎨 **Premium Design**
- Dark luxury theme (blacks, golds)
- Glassmorphism effects
- Smooth scroll animations
- Responsive grid layouts

📱 **Responsive**
- Desktop (1920px+): Full layouts
- Tablet (768px): Medium layouts
- Mobile (375px): Stacked layouts
- Hamburger menu on mobile

🔍 **SEO Ready**
- Meta tags
- Open Graph
- Twitter cards
- Keywords
- Sitemap support

## Colors (Tailwind)

```
tattu-black:     #0a0a0a (main background)
tattu-charcoal:  #141414 (cards)
tattu-gold:      #c9a96e (primary accent) ⭐
tattu-gold-light: #e8d5a3
tattu-plum:      #1a0a14
tattu-jade:      #0d1f1a
tattu-crimson:   #8b1a1a
tattu-pink:      #ff6b9d
```

## Fonts

```
Display: Cormorant Garamond (serif - headings)
Body:    Geist Sans (modern sans-serif)
Accent:  Playfair Display (serif)
```

## Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Static Hosting
```bash
npm run build
# Upload dist/ folder to hosting
```

### Docker
```bash
docker build -t tattu-london .
docker run -p 3000:3000 tattu-london
```

## Troubleshooting

**Dev server won't start**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Images not showing**
- Check `public/assets/` directory
- Verify file extensions in code
- Restart dev server

**3D not rendering**
- Test in different browser
- Check console for WebGL errors
- Enable graphics acceleration in browser settings

**Styles not applied**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check if Tailwind classes exist in code

**Slow performance**
- Check Network tab in DevTools
- Reduce 3D particle count
- Compress images to < 200KB
- Run Lighthouse audit

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Three.js**: https://threejs.org/docs/
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber/

## Support

- Check `DEPLOYMENT.md` for deployment help
- Check `TESTING.md` for testing procedures
- Check `README_TATTU.md` for full documentation

---

**Everything ready to go!** 🚀
Start with `npm install && npm run dev`
