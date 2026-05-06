# Tattu London - Assets

This directory contains placeholder images for the Tattu London website.

## Current Status

Currently using SVG placeholder files. These are temporary and should be replaced with high-quality JPEG/WebP images.

## Required Images

Please replace the following placeholder files with actual images from Tattu London:

- `tattu-hero.svg` → `tattu-hero.jpg` - Main hero background image (1920x1080 recommended)
- `tattu-interior-1.svg` → `tattu-interior-1.jpg` - Interior dining room image
- `tattu-food-1.svg` → `tattu-food-1.jpg` - Signature dish photo
- `tattu-cocktail-1.svg` → `tattu-cocktail-1.jpg` - Signature cocktail from Phoenix Bar
- `tattu-private-dining.svg` → `tattu-private-dining.jpg` - Private dining room

## How to Update Images

1. Replace the SVG files with actual JPEG images
2. Update the file extensions in the following files:
   - `src/data/galleryData.ts` - Change `.svg` to `.jpg`
   - `src/components/sections/HeroSection.tsx` - Update background image
   - `src/components/sections/VenueStorySection.tsx` - Update interior and cocktail images
   - `src/components/sections/ExperienceCards.tsx` - Update experience card images
   - `src/components/sections/PrivateHireSection.tsx` - Update private dining image
   - `src/components/sections/TheatreDiningSection.tsx` - Update theatre dining image
   - `src/components/sections/BookingCTA.tsx` - Update CTA background

## Image Guidelines

- Use high-resolution images (min 1920px wide for hero)
- Optimize for web (JPEG, max 200KB per image recommended)
- Use dark, moody tones to match luxury aesthetic
- Ensure images have sufficient contrast for text overlays
- Maintain aspect ratios: Hero 16:9, Interior/Food/Cocktail 4:5, Private Dining 1:1

## Note

Only use images you have rights/permission to use. Do not hotlink images directly from Google or third-party sites without authorization. Download and host them locally.

