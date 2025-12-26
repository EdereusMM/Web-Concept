import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedOrganizers from "@/components/FeaturedOrganizers";
import HomeAboutPreview from "@/components/HomeAboutPreview";
import HomeEventsPreview from "@/components/HomeEventsPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedOrganizers />
        <HomeAboutPreview />
        <HomeEventsPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
