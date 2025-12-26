import { MapPin, Calendar, ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import eventsImage from "@/assets/events-image.jpg";
import CountdownTimer from "./CountdownTimer";

interface Event {
  title: string;
  description: string;
  location: string;
  date: string;
  targetDate: string;
}

// ✅ FIXED: Updated dates to future dates (December 2025)
const events: Event[] = [
  {
    title: "Innovation Meets",
    description: "Join us for an inspiring conference on cutting-edge technology and innovation in Africa.",
    location: "Nairobi, Kenya",
    date: "December 28, 2025",
    targetDate: "2025-12-28T09:00:00", // ✅ Format: YYYY-MM-DDTHH:mm:ss
  },
  {
    title: "Unlock Your Potential",
    description: "A transformative workshop designed to help tech professionals reach new heights.",
    location: "Lagos, Nigeria",
    date: "December 29, 2025",
    targetDate: "2025-12-29T10:00:00",
  },
  {
    title: "Tech Talks Live",
    description: "Live discussions with industry leaders about the future of African tech ecosystems.",
    location: "Cape Town, South Africa",
    date: "December 30, 2025",
    targetDate: "2025-12-30T14:00:00",
  },
];

const EventCard = ({ event }: { event: Event }) => (
  <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50">
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
      <Button variant="outline" className="gap-2">
        Book Seat <ArrowRight size={16} />
      </Button>
    </div>
  </div>
);

const EventsSection = () => {
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
          <Button className="gap-2">
            Contact Us <ArrowRight size={18} />
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Video/Image Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-card group cursor-pointer">
            <img
              src={eventsImage}
              alt="Business professionals at event"
              className="w-full h-full object-cover min-h-[400px] lg:min-h-full"
            />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors" />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play className="text-primary-foreground ml-1" size={32} />
              </div>
            </button>
          </div>

          {/* Event Cards */}
          <div className="space-y-4">
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;