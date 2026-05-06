# Tattu London - Deployment & Testing Guide

## Pre-Deployment Checklist

### ✅ Code Quality
- [x] All components properly exported
- [x] All imports use correct paths (@/components, @/data)
- [x] No TypeScript errors
- [x] Footer imports fixed (Instagram, Facebook icons)
- [x] GallerySection uses data from galleryData.ts
- [x] All SVG placeholder images created
- [x] Favicon SVG created

### ✅ Component Integration
- [x] Navbar links to all sections
- [x] All 12 sections in page.tsx
- [x] All dependencies installed
- [x] Custom hooks (useInView, useMediaQuery) implemented

### ✅ Data Files
- [x] siteData.ts - complete contact info
- [x] menuData.ts - menu structure with items
- [x] reviewsData.ts - guest reviews
- [x] galleryData.ts - gallery images

### ✅ Styling
- [x] Tailwind CSS configured
- [x] Global CSS animations defined
- [x] Color variables set
- [x] Glass morphism effects configured
- [x] Responsive breakpoints verified

### ✅ SEO
- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter card tags
- [x] Favicon
- [x] Keywords optimized

## Installation & Development

### 1. Install Dependencies
```bash
cd "Tattu London(restaurant)/tattu-london"
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Expected Output
The dev server should start without errors and display:
- Next.js ready on http://localhost:3000
- All components loading properly
- 3D animations running smoothly
- No console errors

## Testing Checklist

### Visual Inspection
- [ ] Hero section loads with background
- [ ] 3D cherry blossom particles visible
- [ ] Navbar is sticky and responsive
- [ ] All section titles and content display
- [ ] Images load (currently SVG placeholders)
- [ ] Buttons are clickable and have hover effects
- [ ] Footer displays properly at bottom

### Navigation Testing
- [ ] Navbar links scroll to sections
- [ ] Mobile hamburger menu works
- [ ] "Book Now" buttons link to SevenRooms
- [ ] Social links open in new tabs
- [ ] All anchor links functional

### Responsive Testing
- [ ] Desktop (1920px+) - Full layout
- [ ] Tablet (768px) - Medium layout
- [ ] Mobile (375px) - Stacked layout
- [ ] Mobile menu hamburger appears
- [ ] Gallery adapts to mobile
- [ ] Menu tabs responsive

### Animation Testing
- [ ] Hero section text fades in
- [ ] Scroll animations trigger
- [ ] 3D particles move smoothly
- [ ] Hover effects on cards work
- [ ] Review carousel auto-scrolles
- [ ] Smooth transitions between sections

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Android

## Common Issues & Fixes

### Issue: Dev server won't start
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: Images not loading
**Solution:**
- Check `public/assets/` directory exists
- Verify SVG files are in place
- Ensure file names match exactly (case-sensitive)
- Check browser network tab for 404s

### Issue: 3D scene not rendering
**Solution:**
- Check browser console for WebGL errors
- Ensure browser supports WebGL
- Try disabling antialias in `CherryBlossomScene.tsx` line 151
- Test on different browser

### Issue: Styles not applying
**Solution:**
```bash
# Rebuild Tailwind CSS
npm run dev  # Auto-rebuilds
# Or manually:
rm -rf .next
npm run dev
```

### Issue: TypeScript errors
**Solution:**
```bash
npm run lint
# Fix any reported errors
npm run build  # Full build check
```

## Building for Production

### 1. Build the project
```bash
npm run build
```

Expected output: `Successfully exported to ./dist`

### 2. Test production build locally
```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Verify build output
Check the `dist/` directory contains:
- All HTML files
- CSS files
- JavaScript bundles
- Image assets
- favicon files

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to connect to Git repo
```

### Option 2: Static Hosting (Netlify, GitHub Pages, etc.)
```bash
npm run build
# Upload contents of dist/ folder to static host
```

### Option 3: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t tattu-london .
docker run -p 3000:3000 tattu-london
```

### Option 4: Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your hosting provider
# Set root directory to dist/
# No server required (static site)
```

## Post-Deployment Steps

### 1. Replace Placeholder Images
After deployment, replace SVG files with actual JPEG images:
- Save JPEGs to `public/assets/`
- Update file extensions in data files
- Redeploy

### 2. Verify Live Site
- [ ] All sections load
- [ ] Navigation works
- [ ] Animations smooth
- [ ] Images load
- [ ] Links functional
- [ ] Mobile responsive

### 3. Test External Links
- [ ] Booking link works
- [ ] Social links work
- [ ] Menu PDF links work
- [ ] Google Maps embed works
- [ ] 3D walkthrough link works

### 4. Monitor Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Monitor loading times
- [ ] Check for console errors

## Performance Optimization

### Image Optimization
- Compress JPEGs to < 200KB each
- Use next/image component if not using static export
- Consider WebP format for modern browsers

### Code Splitting
Next.js automatically handles this, but verify:
- Components are lazy-loaded when possible
- 3D scene doesn't block page load
- CSS is tree-shaken

### Caching
For static hosting:
- Set cache headers for assets (1 year)
- Set short cache for HTML files (1 hour)
- Enable GZIP compression

## Monitoring & Analytics

### Add Google Analytics (Optional)
Edit `src/app/layout.tsx`:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Error Tracking (Optional)
Consider adding Sentry or similar for error monitoring.

## Maintenance

### Regular Updates
- [ ] Update npm dependencies monthly
- [ ] Run `npm update`
- [ ] Test thoroughly after updates
- [ ] Update menu items as needed
- [ ] Update review/testimonials

### Backup
- [ ] Backup code to GitHub
- [ ] Backup production deployment
- [ ] Keep image assets backed up

## Support & Troubleshooting

### Getting Help
- Check Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- Check Three.js docs: https://threejs.org/docs
- Check Framer Motion: https://www.framer.com/motion/

### Performance Issues
1. Run Lighthouse audit
2. Check image sizes
3. Check animation complexity
4. Profile with DevTools

### Browser Issues
1. Clear browser cache
2. Test in incognito mode
3. Test on different device
4. Check browser console for errors

## Final Verification

Before going live, verify:
- [ ] All sections load correctly
- [ ] All links work
- [ ] Mobile layout is responsive
- [ ] 3D animations smooth
- [ ] Performance is good (Lighthouse 90+)
- [ ] SEO tags present
- [ ] No console errors
- [ ] Accessibility compliant

---

**Deployment Status**: Ready for production
**Next Step**: Replace placeholder images with actual photography, then deploy!
