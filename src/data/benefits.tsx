import Image from "next/image";

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const getIcon = (name: string) => (
  <Image
    src={`/icons/${name}.png`}
    alt="Personalized Creativity"
    width={80}
    height={80}
    className="text-lavender-mist"
  />
);

export const benefits: Benefit[] = [
  {
    id: "1",
    title: "Personalized Creativity",
    description:
      "No artistic skills? No problem. Create art that's uniquely yours.",
    icon: getIcon("star"),
  },
  {
    id: "2",
    title: "Tangible & Digital Ownership",
    description: "Own your art in the digital realm and the physical world.",
    icon: getIcon("sheld"),
  },
  {
    id: "3",
    title: "Seamless Experience",
    description:
      "User-friendly platform guiding you from creation to ownership.",
    icon: getIcon("draw"),
  },
];
