import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EventsBanner } from "@/components/events-banner";
import { MenuSection } from "@/components/menu-section";
import { OrderSection } from "@/components/order-section";
import { ChefSection } from "@/components/chef-section";
import { ReservationSection } from "@/components/reservation-section";
import { GallerySection } from "@/components/gallery-section";
import { InstagramFeed } from "@/components/instagram-feed";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsBanner />
      <MenuSection />
      <OrderSection />
      <ChefSection />
      <GallerySection />
      <ReservationSection />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
