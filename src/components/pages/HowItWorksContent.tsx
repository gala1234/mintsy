"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import BackgroundGradient from "@/components/ui/BackgroundGradient";
import ColorHead from "@/components/ui/ColorHead";
import { motion } from "framer-motion";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

const HowItWorksContent = () => {
  const { openModal } = useModal();

  // Example function to open a success modal
  const handleOpenSuccessModal = () => {
    openModal("hdDownload", {
      downloadUrl: "https://example.com/download",
    });
  };

  const steps = [
    {
      title: "Create with Text-to-Image AI",
      description:
        "Transform your ideas into AI art with simple text prompts. Our advanced AI understands artistic styles, concepts, and can create unique digital paintings, illustrations, and concept art.",
      image: "/images/prompt-interface.png",
    },
    {
      title: "Customize Your AI-Generated Artwork",
      description:
        "Preview and refine your AI-generated digital art. Adjust styles, colors, and composition until your artwork perfectly matches your creative vision.",
      image: "/images/art-generation.png",
    },
    {
      title: "Mint as NFT or Order Canvas Print",
      description:
        "Choose your preferred output: mint your creation as a unique NFT on the blockchain to establish digital ownership, or order a high-quality canvas print delivered to your door.",
      image: "/images/output-options.png",
    },
    {
      title: "Share Your AI Art Creation",
      description:
        "Showcase your AI-generated artwork with the community. Connect with other digital artists and collectors who appreciate unique AI art and NFTs.",
      image: "/images/sharing.png",
    },
  ];

  const faqs = [
    {
      id: "art-types",
      question: "What types of AI art can I create with Mintsy.ai?",
      answer:
        "You can create a wide variety of AI art styles including digital paintings, illustrations, concept art, abstract designs, landscapes, portraits, and more. Our text-to-image AI model is versatile and can adapt to different artistic styles, themes, and compositions.",
    },
    {
      id: "nft-minting",
      question: "How does the NFT minting process work?",
      answer:
        "Once you're satisfied with your AI-generated artwork, you can mint it as an NFT directly on our platform with a few clicks. We support multiple blockchain networks and handle all the technical aspects for you, making it easy to establish digital ownership of your unique AI art.",
    },
    {
      id: "print-options",
      question: "What canvas print options are available for my AI art?",
      answer:
        "We offer high-quality canvas prints of your AI-generated artwork in various sizes, with options for different materials and finishes. Each premium canvas print is carefully crafted to ensure the highest possible quality and durability for displaying your AI art.",
    },
    {
      id: "artwork-editing",
      question: "Can I edit my AI-generated artwork after creation?",
      answer:
        "Yes! You can make adjustments to your AI artwork through our intuitive editor. Try different variations, refine colors, adjust compositions, and fine-tune the results until you're completely satisfied with your AI-generated digital art.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-background text-text overflow-hidden">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif-accent">
              <ColorHead text="How to Create AI Art with Mintsy" />
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Transform your text prompts into stunning digital art with our AI art generator
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/create">
                <Button variant="gradient" size="lg">
                  Create AI Art Now
                </Button>
              </Link>
              <Button variant="dark" size="lg" onClick={handleOpenSuccessModal}>
                View AI Art Examples
              </Button>
            </div>
          </div>
        </div>
        <BackgroundGradient />
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-background text-text overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif-accent">
              <ColorHead text="Text-to-Image AI Art Creation Process" />
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our AI art generator makes digital art creation accessible to everyone, no artistic skills required
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={`AI art creation step ${index + 1}: ${step.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {step.title}
                </h3>
                <p className="text-text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 font-serif-accent">
              <ColorHead text="AI Art Generator in Action" />
            </h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/demo-video.png"
                alt="Video tutorial showing how to create AI art from text prompts to finished canvas print"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <BackgroundGradient />
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-background text-text overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-12 font-serif-accent">
            <ColorHead text="AI Art & NFT Creation FAQs" />
          </h2>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} faqItem={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-12 font-serif-accent">
            <ColorHead text="What Our AI Artists Say" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "Mintsy's AI art generator has revolutionized how I create. The text-to-image technology understands exactly what I'm looking for!",
                author: "Sarah Chen",
                role: "Digital Artist",
              },
              {
                quote:
                  "The quality of the AI art canvas prints is outstanding. I've never been happier with my artwork displayed at home.",
                author: "Michael Rodriguez",
                role: "Art Collector",
              },
              {
                quote:
                  "The NFT minting process for my AI creations is seamless. Highly recommended for artists looking to enter the digital art space.",
                author: "Emma Thompson",
                role: "Crypto Artist",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.667 13.333H5.33366C5.33366 8 9.33366 5.333 13.3337 5.333L12.0003 8C10.667 9.333 10.667 11.333 10.667 13.333ZM21.3337 13.333H16.0003C16.0003 8 20.0003 5.333 24.0003 5.333L22.667 8C21.3337 9.333 21.3337 11.333 21.3337 13.333ZM24.0003 16V21.333C24.0003 22.4 23.067 23.333 22.0003 23.333H18.667V26.667H22.0003C24.9337 26.667 27.3337 24.267 27.3337 21.333V16H24.0003ZM13.3337 16V21.333C13.3337 22.4 12.4003 23.333 11.3337 23.333H8.00033V26.667H11.3337C14.267 26.667 16.667 24.267 16.667 21.333V16H13.3337Z"
                      fill="#7A6FF0"
                    />
                  </svg>
                </div>
                <p className="text-lg mb-6 flex-grow font-serif-accent italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <BackgroundGradient />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background text-text overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            <ColorHead text="Ready to Create Your Own AI Art?" />
          </h2>
          <Link href="/create">
            <Button variant="gradient" size="lg">
              Try Our AI Art Generator Now
            </Button>
          </Link>
          <p className="mt-4 text-lg text-text-muted">
            No artistic skills required – just your imagination and our AI
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksContent; 