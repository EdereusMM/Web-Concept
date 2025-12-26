import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-image.jpg";

const HomeAboutPreview = () => {
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

            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-muted-foreground">World-class speakers and industry experts</span>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-muted-foreground">Hands-on workshops and networking opportunities</span>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-muted-foreground">Cutting-edge AI and technology insights</span>
              </div>
            </div>

            <Link to="/about">
              <Button size="lg" className="gap-2">
                Learn More <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Professional working with technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
              <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-accent" />
              <div className="absolute bottom-20 left-8 w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutPreview;
