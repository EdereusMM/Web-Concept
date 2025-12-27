export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  targetDate: string;
}

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Innovation Meets",
    description: "Join us for an inspiring conference on cutting-edge technology and innovation in Africa.",
    location: "Nairobi, Kenya",
    date: "January 8, 2026",
    targetDate: "2026-01-08T09:00:00",
  },
  {
    id: "2",
    title: "Unlock Your Potential",
    description: "A transformative workshop designed to help tech professionals reach new heights.",
    location: "Lagos, Nigeria",
    date: "January 20, 2026",
    targetDate: "2026-01-20T10:00:00",
  },
  {
    id: "3",
    title: "Tech Talks Live",
    description: "Live discussions with industry leaders about the future of African tech ecosystems.",
    location: "Cape Town, South Africa",
    date: "February 10, 2026",
    targetDate: "2026-02-10T14:00:00",
  },
];

// ✅ ADD THIS FUNCTION:
export const getEventById = (id: string): Event | undefined => {
  return upcomingEvents.find(event => event.id === id);
};