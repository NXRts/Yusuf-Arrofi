export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "Yusuf is an exceptional developer who consistently delivers high-quality code. His ability to solve complex problems and communicate effectively made him an invaluable asset to our team during the Simaku project.",
  },
  {
    id: "2",
    name: "David Chen",
    role: "Lead Developer",
    company: "CloudScale Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Working with Yusuf was a pleasure. He has a deep understanding of modern web technologies and a keen eye for detail. The BukuTamu backend he built is both robust and scalable under heavy load.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Founder",
    company: "CreativePulse",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    quote: "Yusuf transformed our vision into reality with JapanApp. His technical skills are matched only by his professionalism and steadfast commitment to project success.",
  },
  {
    id: "4",
    name: "Michael Smith",
    role: "Senior Engineer",
    company: "DataViz Co",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: "A very talented and dedicated developer. Yusuf’s work on our internal dashboard significantly improved our developer productivity. Highly recommended for any ambitious engineering team!",
  },
  {
    id: "5",
    name: "Lisa Wong",
    role: "UX Designer",
    company: "PixelPerfect",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    quote: "Yusuf has a rare ability to bridge the gap between design and development. The interfaces he builds are pixel-perfect, accessible, and perform smoothly at 60 FPS.",
  },
  {
    id: "6",
    name: "Alex Turner",
    role: "Freelance Client",
    company: "Self-employed",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    quote: "Delivered the project ahead of schedule and beyond expectations. Yusuf is my absolute go-to developer for any complex React, Go, and Next.js projects.",
  },
  {
    id: "7",
    name: "Jessica Lee",
    role: "CTO",
    company: "NextGen Fintech",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    quote: "Clean code, thorough documentation, and a proactive engineering attitude. Yusuf is exactly the kind of developer every high-growth tech organization needs.",
  },
];
