import Image from "next/image";

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const getIcon = (name: string) => (
  <Image
    src={`/icons/${name}.svg`}
    alt="Personalized Creativity"
    width={40}
    height={40}
    className="text-lavender-mist"
  />
);

export const benefits: Benefit[] = [
  {
    id: "1",
    title: "Personalized Creativity",
    description:
      "No artistic skills? No problem. Create art that's uniquely yours.",
    icon: getIcon("personalized-creativity"),
  },
  {
    id: "2",
    title: "Tangible & Digital Ownership",
    description: "Own your art in the digital realm and the physical world.",
    icon: getIcon("tangible-digital-ownership"),
  },
  {
    id: "3",
    title: "Seamless Experience",
    description:
      "User-friendly platform guiding you from creation to ownership.",
    icon: getIcon("seamless-experience"),
  },
];
