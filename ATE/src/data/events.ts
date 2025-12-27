export interface Event {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  location: string;
  date: string;
  targetDate: string;
  image?: string;
  speakers?: string[];
  topics?: string[];
  isVirtual?: boolean;
}

export const events: Event[] = [
  {
    id: "innovation-meets",
    title: "Innovation Meets",
    description: "It is a long established fact that a reader will be distracted by readable content.",
    fullDescription: "Join us for an immersive experience where cutting-edge technology meets creative minds. This event brings together industry leaders, innovators, and visionaries to explore the future of AI and machine learning. Expect hands-on workshops, keynote speeches from renowned experts, and networking opportunities that will shape your professional journey.",
    location: "1629 N. Dixie Avenue",
    date: "March 18, 2025",
    targetDate: "2025-03-18T09:00:00",
    speakers: ["Dr. Sarah Chen", "Mark Johnson", "Lisa Wang"],
    topics: ["AI Innovation", "Machine Learning", "Future Tech"],
    isVirtual: false,
  },
  {
    id: "unlock-your-potential",
    title: "Unlock Your Potential",
    description: "It is a long established fact that a reader will be distracted by readable content.",
    fullDescription: "Discover how to harness the power of emerging technologies to transform your career and business. This intensive workshop-style event focuses on practical skills, real-world applications, and actionable strategies that you can implement immediately. Learn from experts who have successfully navigated the tech landscape.",
    location: "Virtual Event",
    date: "March 25, 2025",
    targetDate: "2025-03-25T09:00:00",
    speakers: ["James Miller", "Emily Brown", "Alex Torres"],
    topics: ["Professional Growth", "Tech Skills", "Career Development"],
    isVirtual: true,
  },
  {
    id: "tech-talks-live",
    title: "Tech Talks Live",
    description: "It is a long established fact that a reader will be distracted by readable content.",
    fullDescription: "Experience the energy of live tech discussions featuring the brightest minds in the industry. This dynamic event combines TED-style talks, panel discussions, and interactive Q&A sessions. Topics range from artificial intelligence to quantum computing, with speakers who are shaping the future of technology.",
    location: "1629 N. Dixie Avenue",
    date: "March 30, 2025",
    targetDate: "2025-03-30T09:00:00",
    speakers: ["Dr. Michael Lee", "Rachel Adams", "Chris Park"],
    topics: ["Live Discussions", "AI Trends", "Quantum Computing"],
    isVirtual: false,
  },
  {
    id: "africa-dev-summit",
    title: "Africa Dev Summit",
    description: "The largest developer conference in Africa bringing together thousands of developers.",
    fullDescription: "Africa Dev Summit is the premier developer conference across the continent, featuring workshops, hackathons, and networking opportunities with industry leaders from around the world.",
    location: "Lagos, Nigeria",
    date: "April 15, 2025",
    targetDate: "2025-04-15T09:00:00",
    speakers: ["Adekunle Adeyemi", "Fatima Hassan", "John Doe"],
    topics: ["Software Development", "Open Source", "Cloud Computing"],
    isVirtual: false,
  },
  {
    id: "ai-africa-conference",
    title: "AI Africa Conference",
    description: "Exploring artificial intelligence solutions for African challenges and opportunities.",
    fullDescription: "Join thought leaders, researchers, and practitioners to explore how AI can address unique African challenges while creating new opportunities for growth and innovation.",
    location: "Virtual Event",
    date: "April 22, 2025",
    targetDate: "2025-04-22T09:00:00",
    speakers: ["Dr. Amina Osei", "Prof. Kwame Asante"],
    topics: ["AI for Good", "Machine Learning", "Data Science"],
    isVirtual: true,
  },
];

export const getEventById = (id: string): Event | undefined => {
  return events.find((event) => event.id === id);
};