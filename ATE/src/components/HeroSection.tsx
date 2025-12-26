import { Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ FIXED: Better overlay for both modes - improves text readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block px-4 py-2 border border-primary/70 rounded-full mb-6 bg-background/20 backdrop-blur-sm">
          <span className="text-primary font-semibold drop-shadow-lg">[ Discover Tech Events Across Africa ]</span>
        </div>

        {/* ✅ FIXED: Added text shadow for better visibility in light mode */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          AFRICA TECH EVENTS
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-lg font-medium">
          Your gateway to conferences, workshops, and meetups shaping Africa's tech future
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Button size="lg" className="px-8 shadow-xl hover:shadow-2xl transition-shadow" asChild>
            <a href="/events">EXPLORE EVENTS</a>
          </Button>
          {/* ✅ FIXED: Better contrast for "Learn More" button */}
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 bg-white/90 hover:bg-white border-white text-black hover:text-black font-semibold shadow-xl"
            asChild
          >
            <a href="/about">LEARN MORE</a>
          </Button>
        </div>

        {/* Stats with better visibility */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
          <div className="text-center bg-background/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
            <div className="text-2xl font-bold text-white drop-shadow-lg">500+</div>
            <div className="text-white/90 font-medium">Events Listed</div>
          </div>
          <div className="text-center bg-background/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
            <div className="text-2xl font-bold text-white drop-shadow-lg">50+</div>
            <div className="text-white/90 font-medium">Cities</div>
          </div>
          <div className="text-center bg-background/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
            <div className="text-2xl font-bold text-white drop-shadow-lg">20K+</div>
            <div className="text-white/90 font-medium">Attendees</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
