import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const features = [
    {
      title: "Shaping Tomorrow, Transforming Today",
      description:
        "Empowering businesses to create meaningful change, driving innovation",
    },
    {
      title: "Innovating Today, Empowering Tomorrow",
      description:
        "Partner with us to unlock new possibilities, drive progress, and shape a future filled with success",
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
              <span className="text-primary font-medium">About Us</span>
              <span className="w-8 h-[2px] bg-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Boost Business </span>
              <span className="text-gradient">with Our Innovative IT Solutions </span>
              <span className="text-foreground">for Success story</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Innovating and empowering businesses with tailored solutions for
              success and growth.
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
              <Button size="lg" className="gap-2">
                Get In Touch <ArrowRight size={18} />
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Any Time</p>
                  <p className="font-semibold text-foreground">(123) 4567 8900</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Professional working with technology"
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

export default AboutSection;
