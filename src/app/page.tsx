import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import VenueStorySection from "@/components/sections/VenueStorySection";
import ExperienceCards from "@/components/sections/ExperienceCards";
import MenuPreview from "@/components/sections/MenuPreview";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import PrivateHireSection from "@/components/sections/PrivateHireSection";
import TheatreDiningSection from "@/components/sections/TheatreDiningSection";
import LocationSection from "@/components/sections/LocationSection";
import BookingCTA from "@/components/sections/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-tattu-black min-h-screen">
      <Navbar />
      <HeroSection />
      <VenueStorySection />
      <ExperienceCards />
      <MenuPreview />
      <GallerySection />
      <ReviewsSection />
      <PrivateHireSection />
      <TheatreDiningSection />
      <LocationSection />
      <BookingCTA />
      <Footer />
    </main>
  );
}
