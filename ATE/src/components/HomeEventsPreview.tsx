import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";

const HomeEventsPreview = () => {
  // Show only first 3 events
  const displayEvents = events.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">— Upcoming Events</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">Discover Amazing </span>
            <span className="text-gradient">Tech Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of tech enthusiasts at our upcoming events across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayEvents.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border border-border/50"
            >
              <div className="h-48 bg-gradient-to-br from-muted to-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-muted-foreground/20">
                    {event.title.charAt(0)}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-primary" size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-foreground font-medium group-hover:text-primary transition-colors">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/events">
            <Button size="lg" className="gap-2">
              View All Events
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeEventsPreview;