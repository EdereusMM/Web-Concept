import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight, Search, Monitor, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { events, Event } from "@/data/events";

type SortType = "date" | "alphabetical";
type FilterType = "all" | "virtual" | "physical";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortType>("date");
  const [filterBy, setFilterBy] = useState<FilterType>("all");

  const filteredAndSortedEvents = useMemo(() => {
    let result = [...events];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query) ||
          event.topics?.some((topic) => topic.toLowerCase().includes(query))
      );
    }

    // Filter by type
    if (filterBy === "virtual") {
      result = result.filter((event) => event.isVirtual);
    } else if (filterBy === "physical") {
      result = result.filter((event) => !event.isVirtual);
    }

    // Sort
    if (sortBy === "date") {
      result.sort((a, b) => new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime());
    } else if (sortBy === "alphabetical") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [searchQuery, sortBy, filterBy]);

  // Featured events (first 4)
  const featuredEvents = filteredAndSortedEvents.slice(0, 4);
  const otherEvents = filteredAndSortedEvents.slice(4);

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <span className="text-primary font-medium">— Upcoming Events</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
              Our Tech <span className="text-gradient">Events</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Explore our intensive tech events designed to equip you with in-demand skills. Choose the right program, learn from experts, and kickstart your tech career.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 items-center">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-sm">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortType)}
                    className="bg-card border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="date">By Date</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                </div>

                {/* Type Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-sm">Type:</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setFilterBy("all")}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                        filterBy === "all"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-foreground hover:bg-muted"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setFilterBy("virtual")}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-1 ${
                        filterBy === "virtual"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-foreground hover:bg-muted"
                      }`}
                    >
                      <Monitor size={14} /> Virtual
                    </button>
                    <button
                      onClick={() => setFilterBy("physical")}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-1 ${
                        filterBy === "physical"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-foreground hover:bg-muted"
                      }`}
                    >
                      <Building size={14} /> Physical
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events Grid */}
        {featuredEvents.length > 0 && (
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-8">Featured Events</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Events */}
        {otherEvents.length > 0 && (
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-8">More Events</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {otherEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredAndSortedEvents.length === 0 && (
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <p className="text-muted-foreground text-lg">No events found matching your criteria.</p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

// Event Card Component
const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border border-border/50">
      <div className="flex flex-col lg:flex-row">
        {/* Image placeholder */}
        <div className="lg:w-2/5 h-48 lg:h-auto bg-gradient-to-br from-muted to-secondary relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-muted-foreground/20">{event.title.charAt(0)}</div>
          </div>
          {event.isVirtual && (
            <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Monitor size={12} /> Virtual
            </div>
          )}
        </div>

        {/* Content */}
        <div className="lg:w-3/5 p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {event.topics?.slice(0, 2).map((topic) => (
              <span
                key={topic}
                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {event.fullDescription || event.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="text-primary" size={14} />
              <span className="text-xs">{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="text-primary" size={14} />
              <span className="text-xs">{event.location}</span>
            </div>
          </div>

          {/* Learn More Link */}
          <Link
            to={`/events/${event.id}`}
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
          >
            Learn More
            <span className="w-8 h-0.5 bg-primary group-hover:w-12 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;