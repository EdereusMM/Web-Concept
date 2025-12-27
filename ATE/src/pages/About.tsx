import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Users, MessageSquare, Folder, Target, Handshake, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";
import eventsImage from "@/assets/events-image.jpg";
import CountUpStat from "@/components/CountUpStat";

const About = () => {
  const features = [
    "World-Class Tech Events & Conferences",
    "Expert Speakers & Industry Leaders",
    "Networking Opportunities Across Africa",
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Unmatched Quality",
      description: "We deliver exceptional events and experiences that exceed expectations every time.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Your growth is our priority. We connect innovators, creators, and industry leaders.",
    },
    {
      icon: Target,
      title: "Trusted Expertise",
      description: "Backed by years of experience and a proven track record, we are your reliable partner for success.",
    },
    {
      icon: Handshake,
      title: "Trusted by Many",
      description: "We have built a strong reputation over the years by consistently delivering excellent results.",
    },
  ];

  const stats = [
    { icon: Award, value: 50, suffix: "+", label: "Events Hosted" },
    { icon: Users, value: 10, suffix: "K+", label: "Attendees Reached" },
    { icon: MessageSquare, value: 200, suffix: "+", label: "Expert Speakers" },
    { icon: Folder, value: 30, suffix: "+", label: "Countries Represented" },
  ];

  const workingProcess = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze event requirements, identify objectives, and craft a strategic roadmap for success.",
    },
    {
      number: "02",
      title: "Curation & Development",
      description: "Our expert team designs, develops, and curates cutting-edge content tailored to your goals.",
    },
    {
      number: "03",
      title: "Execution & Support",
      description: "We ensure seamless event delivery with continuous improvements and dedicated support.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner - Image only with title */}
        <section className="relative pt-32 pb-24 min-h-[400px] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${aboutImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              About Us
            </h1>
          </div>
          {/* Decorative gradient line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </section>

        {/* About Section with Images */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Images */}
              <div className="relative">
                <div className="relative">
                  {/* Main image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-card">
                    <img
                      src={aboutImage}
                      alt="Tech professional at work"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  {/* Secondary image - overlapping */}
                  <div className="absolute -bottom-12 -right-4 lg:right-8 w-48 md:w-64 rounded-2xl overflow-hidden shadow-card border-4 border-background">
                    <img
                      src={eventsImage}
                      alt="Team collaboration"
                      className="w-full h-40 md:h-48 object-cover"
                    />
                  </div>
                  {/* Experience badge */}
                  <div className="absolute top-8 -right-4 lg:right-0 w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent flex flex-col items-center justify-center text-primary-foreground shadow-glow">
                    <span className="text-3xl font-bold">10+</span>
                    <span className="text-xs text-center leading-tight">Years of<br/>Excellence</span>
                  </div>
                </div>
                {/* Decorative dot */}
                <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-primary animate-pulse" />
              </div>

              {/* Content */}
              <div className="lg:pl-8 mt-16 lg:mt-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[2px] bg-primary" />
                  <span className="text-primary font-medium">About Us</span>
                  <span className="w-8 h-[2px] bg-primary" />
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-foreground">Empowering Africa's </span>
                  <span className="text-gradient">Tech Ecosystem </span>
                  <span className="text-foreground">Through World-Class Events</span>
                </h2>

                <p className="text-muted-foreground text-lg mb-8">
                  We bring together innovators, thought leaders, and tech enthusiasts 
                  to foster collaboration, share knowledge, and drive the future of 
                  technology across Africa and beyond.
                </p>

                <div className="space-y-4 mb-10">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="text-primary" size={16} />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold border-2 border-background">JD</div>
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold border-2 border-background">SA</div>
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-sm font-bold border-2 border-background">+</div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Join Our Community</p>
                    <p className="text-sm text-muted-foreground">10,000+ tech enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">Why Choose </span>
                <span className="text-gradient">Africa Tech Events</span>
                <span className="text-foreground"> for Your Next Conference</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item) => (
                <div 
                  key={item.title} 
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <div className="w-12 h-1 bg-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section - No pattern, counting animation */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <CountUpStat
                  key={stat.label}
                  icon={stat.icon}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Working Process Section */}
        <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[2px] bg-primary" />
                  <span className="text-primary font-medium">Working Process</span>
                  <span className="w-8 h-[2px] bg-primary" />
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-foreground">How We've </span>
                  <span className="text-gradient">Empowered Communities </span>
                  <span className="text-foreground">with Innovative Tech Events</span>
                </h2>

                <p className="text-muted-foreground text-lg mb-8">
                  From personalized event experiences to expert execution, we prioritize 
                  quality, reliability, and attendee satisfaction.
                </p>

                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    Get In Touch
                    <span>→</span>
                  </Button>
                </Link>
              </div>

              {/* Right - Process Steps */}
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-1/4 w-3 h-3 rounded-full bg-primary animate-pulse" />
                
                {/* Process cards in a creative layout */}
                <div className="space-y-6">
                  {workingProcess.map((step, index) => (
                    <div 
                      key={step.number} 
                      className={`relative flex gap-6 ${index === 1 ? 'lg:ml-12' : ''}`}
                    >
                      {/* Large number */}
                      <div className="text-7xl font-bold text-muted/30 leading-none select-none">
                        {step.number}
                      </div>
                      {/* Content */}
                      <div className="pt-2">
                        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      {/* Decorative dot */}
                      {index < workingProcess.length - 1 && (
                        <div className="absolute -bottom-3 left-8 w-2 h-2 rounded-full bg-primary/50" />
                      )}
                    </div>
                  ))}
                </div>

                {/* WiFi/connectivity icon decoration */}
                <div className="absolute bottom-0 right-0 opacity-20">
                  <Wifi className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Join Africa's Biggest Tech Events?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Connect with industry leaders, discover cutting-edge innovations, and be part of 
              the movement shaping Africa's tech future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/events">
                <Button size="lg" variant="secondary" className="gap-2">
                  Explore Events
                  <span>→</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
