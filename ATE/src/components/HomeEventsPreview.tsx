import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import CountdownTimer from "./CountdownTimer";
import { upcomingEvents } from "@/data/events";


const HomeEventsPreview = () => {
  // Show only first 3 events on homepage
  const previewEvents = upcomingEvents.slice(0, 3);

  return (
    <section id="events" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-medium">Upcoming Events</span>
              <span className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-foreground">Exciting Events </span>
              <span className="text-gradient">on the Horizon</span>
            </h2>
          </div>
          <Link to="/events">
            <Button className="gap-2">
              View All Events <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        {/* Event Cards */}
        <div className="space-y-4">
          {previewEvents.map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{event.title}</h4>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <CountdownTimer targetDate={event.targetDate} />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/50">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="text-primary" size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="text-primary" size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                </div>
                <Link to={`/events/${event.id}`}>
                  <Button variant="outline" className="gap-2">
                    View Details <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeEventsPreview;
