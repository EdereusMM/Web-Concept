import { useParams, Link } from "react-router-dom";
import { MapPin, Calendar, ArrowLeft, Check, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import { getEventById } from "@/data/events";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const event = getEventById(id || "");

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist.</p>
            <Link to="/events">
              <Button className="gap-2">
                <ArrowLeft size={16} /> Back to Events
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Sample speakers data for each event
  const speakers = [
    { name: "Joshua Henry", title: "Chief AI Scientist, OpenAI", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
    { name: "Leila Zhang", title: "VP of Machine Learning, Google", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" },
    { name: "Carlos Rivera", title: "Founder & CEO, NeuralCore", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
  ];

  // Sample schedule data
  const schedule = [
    { time: "08:00 - 10:00 AM", speaker: speakers[0], session: "Opening Keynote - The State of AI", description: "Kick off the event with an insightful overview of where artificial intelligence is headed." },
    { time: "12:00 - 14:00 PM", speaker: speakers[1], session: "Building Human-Centered AI Products", description: "This session covers how to design AI solutions that prioritize usability, fairness, and real-world impact." },
    { time: "16:00 - 18:00 PM", speaker: speakers[2], session: "AI Policy & Regulation - A Global Overview", description: "Learn how nations and organizations are approaching AI governance, including frameworks for data privacy." },
  ];

  // Sample FAQ data
  const faqs = [
    { question: `What is ${event.title}?`, answer: event.fullDescription },
    { question: "When and where will the event be held?", answer: `The event will be held on ${event.date} at ${event.location}. We look forward to seeing you there!` },
    { question: "How can I register for the event?", answer: "You can register by clicking the 'Get Tickets' button on this page. Select your preferred ticket tier and complete the checkout process." },
    { question: "What ticket options are available?", answer: "We offer three ticket tiers: Standard ($299), VIP ($699), and Full Access ($1199). Each tier offers different levels of access and benefits." },
    { question: "Can I transfer my ticket to someone else?", answer: "Yes, tickets can be transferred up to 7 days before the event. Please contact our support team for assistance with ticket transfers." },
    { question: "Will there be virtual participation?", answer: "Yes, we offer virtual attendance options for those who cannot attend in person. Virtual tickets include access to live streams and recordings." },
  ];

  // Ticket tiers
  const tickets = [
    {
      name: "Standard",
      price: "$299",
      color: "from-primary/80 to-primary",
      features: ["Access to keynotes and sessions.", "Admission to exhibitions and demos.", "Networking opportunities.", "Digital materials and session recordings."],
    },
    {
      name: "VIP",
      price: "$699",
      color: "from-purple-500 to-purple-700",
      features: ["All Standard benefits.", "VIP lounge access and exclusive events.", "Front-row seating and priority workshop access.", "VIP swag bag and exclusive content."],
    },
    {
      name: "Full Access",
      price: "$1199",
      color: "from-red-500 to-red-700",
      features: ["All VIP benefits.", "Access to all workshops and breakout sessions.", "Personalized session scheduling.", "Speaker meet-and-greet and after-party access."],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-primary/10 dark:from-background dark:via-secondary/20 dark:to-primary/5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptLTYgMGgtNnY2aDZ2LTZ6bTAtNmgtNnY2aDZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Link to="/events" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft size={16} /> Back to Events
            </Link>
            
            <div className="inline-block px-4 py-2 border border-primary/50 rounded-full mb-6">
              <span className="text-primary font-medium">[ The Future of Intelligence ]</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-8 tracking-tight">
              {event.title.toUpperCase()}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-10">
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="text-primary" size={20} />
                <span className="font-medium">{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="text-primary" size={20} />
                <span className="font-medium">{event.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button size="lg" className="px-8">
                GET TICKETS
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-foreground/30 hover:bg-foreground/10">
                VIEW SCHEDULE
              </Button>
            </div>
          </div>
        </section>

        {/* Countdown + Location Bar */}
        <section className="py-8 bg-secondary/80 dark:bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold italic text-foreground">Book Your Seat Now</span>
              </div>
              <CountdownTimer targetDate={event.targetDate} />
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="text-primary" size={20} />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* About the Event */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 border border-primary/50 rounded-full mb-6">
                  <span className="text-primary font-medium">[ About the Event ]</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  A Global Gathering of
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold text-muted-foreground mb-6">
                  AI Innovators
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {event.fullDescription}
                </p>
                <ul className="space-y-3">
                  {event.topics?.map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-foreground">
                      <Check className="text-primary" size={20} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" 
                    alt="Speaker" 
                    className="rounded-xl w-full h-64 object-cover"
                  />
                  <div className="bg-primary rounded-xl p-6 text-center">
                    <span className="text-4xl font-bold text-primary-foreground">5</span>
                    <p className="text-primary-foreground">Days of Event</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-primary rounded-xl p-6 text-center">
                    <span className="text-4xl font-bold text-primary-foreground">50</span>
                    <p className="text-primary-foreground">World-class Speakers</p>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop" 
                    alt="AI Tech" 
                    className="rounded-xl w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section className="py-20 bg-secondary/20 dark:bg-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">Meet the </span>
              <span className="text-muted-foreground italic">Visionaries</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Learn from industry leaders who are shaping the future of artificial intelligence and technology.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {speakers.map((speaker) => (
                <div key={speaker.name} className="relative group overflow-hidden rounded-xl">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-2xl font-bold text-foreground">{speaker.name}</h3>
                    <p className="text-muted-foreground">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 border border-primary/50 rounded-full mb-6">
                <span className="text-primary font-medium">[ Event Schedule ]</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                Day of Excellence
              </h2>
            </div>
            
            <div className="space-y-8">
              {schedule.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-b border-border/50">
                  <div className="md:w-48 shrink-0">
                    <span className="text-lg font-medium text-muted-foreground">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-4 md:w-64 shrink-0">
                    <img 
                      src={item.speaker.image} 
                      alt={item.speaker.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{item.speaker.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.speaker.title}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      Session: {item.session}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tickets Section */}
        <section className="py-20 bg-secondary/30 dark:bg-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-muted-foreground italic">Choose Your </span>
              <span className="text-foreground">Pass</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Select the perfect ticket for your needs and gain access to exclusive sessions, workshops, and more.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {tickets.map((ticket, index) => (
                <div key={ticket.name} className="flex flex-col">
                  <div className={`relative rounded-xl p-6 bg-gradient-to-br ${ticket.color} text-white h-48 flex flex-col justify-end`}>
                    <div className="absolute top-4 right-4 flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1 h-8 bg-white/30 rounded" />
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold text-left">{ticket.name}</h3>
                    <p className="text-2xl font-bold text-left">{ticket.price}</p>
                    <p className="text-sm text-left opacity-80">{event.date}</p>
                  </div>
                  <ul className="text-left py-6 space-y-3">
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground">
                        <Check className="text-primary shrink-0 mt-1" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-auto" size="lg">
                    BUY TICKET
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block px-4 py-2 border border-primary/50 rounded-full mb-6">
              <span className="text-primary font-medium">[ Event Location ]</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">Location & </span>
              <span className="text-muted-foreground italic">Venue</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Join us at {event.location}—surrounded by top hotels, transit, and culture.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" 
                alt="Venue exterior" 
                className="rounded-xl w-full h-80 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" 
                alt="Venue interior" 
                className="rounded-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/20 dark:bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-block px-4 py-2 border border-primary/50 rounded-full mb-6">
                  <span className="text-primary font-medium">[ Everything You Need to Know ]</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Frequently Asked
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold text-muted-foreground">
                  Questions
                </h2>
              </div>
              <div>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                      <AccordionTrigger className="text-left text-foreground hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
