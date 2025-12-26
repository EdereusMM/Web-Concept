import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [keepUpdated, setKeepUpdated] = useState(true);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="bg-hero-gradient py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <span className="text-primary font-medium text-sm tracking-wider">[ Stay in the Loop ]</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Join the Future of Innovation
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We'll share other exciting news and exclusive offers, too.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="flex-1 bg-secondary/30 border border-border rounded-lg px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
              <Button type="submit" size="lg" className="px-8">
                SIGN UP
              </Button>
            </div>

            <label className="flex items-center justify-center gap-2 mt-4 cursor-pointer">
              <input
                type="checkbox"
                checked={keepUpdated}
                onChange={(e) => setKeepUpdated(e.target.checked)}
                className="w-4 h-4 rounded border-border bg-secondary/50 text-primary focus:ring-primary/50"
              />
              <span className="text-sm text-foreground">
                Keep me updated on other news and exclusive offers
              </span>
            </label>

            <p className="text-xs text-muted-foreground mt-4">
              Note: You can opt-out at any time. See our{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a> and{" "}
              <a href="#" className="text-primary hover:underline">Terms</a>
            </p>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-card py-12 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
            {/* Address */}
            <div>
              <h4 className="text-foreground font-bold text-lg mb-3">Address</h4>
              <p className="text-muted-foreground">
                121 AI Blvd, San Francisco<br />
                BCA 94107
              </p>
            </div>

            {/* Logo & Social */}
            <div className="flex flex-col items-center">
              <a href="#" className="text-3xl font-bold font-heading mb-4">
                <span className="text-foreground">Africa Tech </span>
                <span className="text-gradient">Events</span>
              </a>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="md:text-right">
              <h4 className="text-foreground font-bold text-lg mb-3">Contact Us</h4>
              <p className="text-muted-foreground">
                T. +1 123 456 789<br />
                M. contact@eventhub.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-background py-4 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            Copyright 2025 - Africa Tech Events
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
