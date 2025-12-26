import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const features = [
    {
      title: "Discover Events Across Africa",
      description:
        "From Lagos to Nairobi, Cape Town to Cairo - find tech events happening in your city or across the continent.",
    },
    {
      title: "List Your Event for Free",
      description:
        "Event organizers can easily list their conferences, workshops, and meetups on our platform and reach thousands of tech enthusiasts.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-medium">About ATE</span>
              <span className="w-8 h-[2px] bg-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Africa's Leading </span>
              <span className="text-gradient">Tech Event Platform </span>
              <span className="text-foreground">Connecting Communities</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Africa Tech Events (ATE) is the premier platform for discovering and hosting technology events across Africa. We connect event organizers with attendees, fostering innovation and collaboration throughout the continent's thriving tech ecosystem.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  Get In Touch <ArrowRight size={18} />
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-foreground">info@ate.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Tech professionals at African tech event"
                className="w-full h-auto object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
              <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-accent" />
              <div className="absolute bottom-20 left-8 w-2 h-2 rounded-full bg-primary" />
            </div>
            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;