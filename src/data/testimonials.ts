interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageSrc?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Digital Artist",
    quote:
      "Mintsy transformed my creative process. The AI generation tools are intuitive, and having my art both as an NFT and on my wall is incredible.",
    imageSrc: "/testimonials/avatar1.svg",
  },
  {
    id: "2",
    name: "Sophia Chen",
    role: "NFT Collector",
    quote:
      "As a collector, I appreciate how Mintsy bridges digital ownership with physical art. The quality of the canvas prints exceeds my expectations.",
    imageSrc: "/testimonials/avatar2.svg",
  },
  {
    id: "3",
    name: "Marcus Rivera",
    role: "Tech Enthusiast",
    quote:
      "The seamless process from AI generation to NFT minting is unmatched. Mintsy has made digital art creation accessible to everyone.",
    imageSrc: "/testimonials/avatar3.svg",
  },
  {
    id: "4",
    name: "Emma Taylor",
    role: "Interior Designer",
    quote:
      "My clients love the personalized AI art I create with Mintsy. The canvas prints add a unique touch to every space I design.",
    imageSrc: "/testimonials/avatar4.svg",
  },
];
