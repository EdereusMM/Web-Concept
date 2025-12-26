export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  targetDate: string; // ISO string for countdown
  image?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Tech Summit Lagos 2024",
    description:
      "Join the biggest gathering of tech innovators, startups, and investors in West Africa. Featuring keynote speakers from top global tech companies.",
    date: "October 15, 2024",
    location: "Lagos, Nigeria",
    targetDate: "2024-10-15T09:00:00",
  },
  {
    id: "2",
    title: "Nairobi AI Workshop",
    description:
      "A hands-on workshop dedicated to Artificial Intelligence and Machine Learning applications in African agriculture and fintech sectors.",
    date: "November 2, 2024",
    location: "Nairobi, Kenya",
    targetDate: "2024-11-02T10:00:00",
  },
  {
    id: "3",
    title: "Cape Town DevFest",
    description:
      "The ultimate developer festival celebrating code, community, and collaboration. multiple tracks covering Web, Mobile, Cloud, and DevOps.",
    date: "December 5, 2024",
    location: "Cape Town, South Africa",
    targetDate: "2024-12-05T08:30:00",
  },
  {
    id: "4",
    title: "Accra Fintech Summit",
    description:
      "Exploring the future of financial technology in Ghana. Discussions on blockchain, digital payments, and financial inclusion.",
    date: "January 20, 2025",
    location: "Accra, Ghana",
    targetDate: "2025-01-20T09:00:00",
  },
];