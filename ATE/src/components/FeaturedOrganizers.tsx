// ✅ FIXED: Added infinite scrolling marquee effect + real logo support

const organizers = [
  { name: "TechCorp", logo: "T" },
  { name: "AWS", logo: "AWS" },
  { name: "Innovation Labs", logo: "IL" },
  { name: "DataSphere", logo: "DS" },
  { name: "CloudNet", logo: "CN" },
  { name: "AI Works", logo: "AI" },
  { name: "DevHub", logo: "DH" },
  { name: "CodeBase", logo: "CB" },
];

const FeaturedOrganizers = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedOrganizers = [...organizers, ...organizers];

  return (
    <section className="py-16 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider">
            [ Featured Organizers ]
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Trusted By Industry Leaders
          </h2>
        </div>

        {/* ✅ Infinite Scrolling Container */}
        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/20 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/20 to-transparent z-10" />
          
          {/* ✅ Scrolling marquee */}
          <div className="flex gap-8 animate-scroll">
            {duplicatedOrganizers.map((org, index) => (
              <div
                key={`${org.name}-${index}`}
                className="group flex-shrink-0 flex items-center justify-center w-32 h-32 bg-card/50 rounded-xl border border-border/30 hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                {/* If you have image logos, replace this with <img> */}
                <span className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {org.logo}
                </span>
                
                {/* 
                  To use real logos, replace the span above with:
                  <img 
                    src={`/organizers/${org.logo}.png`} 
                    alt={org.name}
                    className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                */}
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Add second row scrolling in opposite direction */}
        <div className="relative mt-8">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/20 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/20 to-transparent z-10" />
          
          <div className="flex gap-8 animate-scroll-reverse">
            {duplicatedOrganizers.reverse().map((org, index) => (
              <div
                key={`${org.name}-reverse-${index}`}
                className="group flex-shrink-0 flex items-center justify-center w-32 h-32 bg-card/50 rounded-xl border border-border/30 hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <span className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {org.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOrganizers;