"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import BackgroundGradient from "@/components/ui/BackgroundGradient";
import ColorHead from "@/components/ui/ColorHead";
import { motion } from "framer-motion";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

const HowItWorks = () => {
  const { openModal } = useModal();

  // Example function to open a success modal
  const handleOpenSuccessModal = () => {
    openModal(
      "hdDownload",
      {
        downloadUrl: "https://example.com/download",
      }
      
    );
  };

  const steps = [
    {
      title: "Get Inspired or Use AI Prompts",
      description:
        "Choose between writing a custom prompt or using guided questions to generate art. Our AI understands natural language and helps bring your vision to life.",
      image: "/images/prompt-interface.png",
    },
    {
      title: "Generate Your Artwork",
      description:
        "Preview and refine AI-generated art based on your input. Adjust settings, try different variations, and perfect your creation.",
      image: "/images/art-generation.png",
    },
    {
      title: "Choose Your Output",
      description:
        "Opt to mint your art as an NFT or order a high-quality print. We offer multiple formats and sizes to suit your needs.",
      image: "/images/output-options.png",
    },
    {
      title: "Share and Celebrate",
      description:
        "Share your creation with the community and showcase your art. Connect with other artists and collectors.",
      image: "/images/sharing.png",
    },
  ];

  const faqs = [
    {
      id: "art-types",
      question: "What types of art can I create with Mintsy.ai?",
      answer:
        "You can create a wide variety of art styles including digital paintings, illustrations, concept art, and more. Our AI is versatile and can adapt to different artistic styles and themes.",
    },
    {
      id: "nft-minting",
      question: "How does the NFT minting process work?",
      answer:
        "Once you're satisfied with your artwork, you can mint it as an NFT directly on our platform. We support multiple blockchain networks and handle the technical aspects for you.",
    },
    {
      id: "print-options",
      question: "What are the print options available?",
      answer:
        "We offer high-quality canvas prints in various sizes, with options for different materials and finishes. Each print is carefully crafted to ensure the best possible quality.",
    },
    {
      id: "artwork-editing",
      question: "Can I edit my artwork after generation?",
      answer:
        "Yes! You can make adjustments to your artwork, try different variations, and fine-tune the results until you're completely satisfied with the outcome.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-background text-text overflow-hidden">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif-accent">
              <ColorHead text="How Mintsy Works" />
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Transform your ideas into art effortlessly
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/create">
                <Button variant="gradient" size="lg">
                  Start Creating Now
                </Button>
              </Link>
              <Button variant="dark" size="lg" onClick={handleOpenSuccessModal}>
                Show Example Modal
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
              <ColorHead text="Simple Steps to Create Amazing Art" />
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our intuitive process makes art creation accessible to everyone
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
                    alt={step.title}
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
              <ColorHead text="See Mintsy in Action" />
            </h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/demo-video.png"
                alt="Mintsy Demo"
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
            <ColorHead text="Frequently Asked Questions" />
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
            <ColorHead text="What Our Users Say" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "Mintsy has revolutionized how I create art. The AI understands exactly what I'm looking for!",
                author: "Sarah Chen",
                role: "Digital Artist",
              },
              {
                quote:
                  "The quality of the prints is outstanding. I've never been happier with my artwork.",
                author: "Michael Rodriguez",
                role: "Art Collector",
              },
              {
                quote:
                  "The NFT minting process is seamless. Highly recommended for artists looking to enter the digital art space.",
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
            <ColorHead text="Ready to Create Something Amazing?" />
          </h2>
          <Link href="/create">
            <Button variant="gradient" size="lg">
              Start Creating Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
