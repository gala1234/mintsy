import React from "react";
import Image from "next/image";
import BackgroundGradient from "@/components/ui/BackgroundGradient";
import ColorHead from "@/components/ui/ColorHead";
import { LinkButton } from "@/components/ui/LinkButton";

export default function About() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold font-serif-accent">
            <ColorHead text="Hi, we're Mintsy." />
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Where AI meets emotion — and imagination becomes something you can
            hold.
          </p>
        </div>
        <BackgroundGradient />
      </section>

      {/* 2. Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-serif-accent">
              Why we created Mintsy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                Mintsy was born from a simple yet powerful idea: to bring
                emotional AI art into people&apos;s hands. Our founder, Gala,
                created Mintsy while juggling a full-time job and motherhood,
                driven by a vision to make technology feel more human and
                personal.
              </p>
              <p className="mb-4">
                We believe that in a digital world, there&apos;s something
                special about holding a physical piece of art that represents
                your ideas, memories, and creativity. That&apos;s why we&apos;ve
                built a platform that bridges the gap between cutting-edge AI
                technology and tangible, emotional keepsakes.
              </p>
              <p>
                Our mission is to empower everyone—regardless of artistic
                skill—to create beautiful, meaningful art that can be enjoyed
                both digitally and physically. We&apos;re passionate about
                making the process simple, accessible, and deeply personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Believe */}
      <section className="py-16 md:py-24 bg-mint-light/30">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-serif-accent">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <Image
                  src="/icons/star.png"
                  alt="AI serves creativity"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-serif-accent">
                Creative Freedom
              </h3>
              <p className="text-lg">
                AI should serve creativity, not replace it.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <Image
                  src="/icons/draw.png"
                  alt="Personal Art"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-serif-accent">
                Personal Connection
              </h3>
              <p className="text-lg">
                Art is more powerful when it&apos;s personal.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <Image
                  src="/icons/sheld.png"
                  alt="Physical Memories"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-serif-accent">
                Tangible Memories
              </h3>
              <p className="text-lg">Physical memories are worth preserving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What You Can Do with Mintsy */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-serif-accent">
            What You Can Do with Mintsy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-lavander-light/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-pink-dark font-serif-accent">
                Turn your ideas into AI art
              </h3>
              <p className="text-lg">
                Use our intuitive platform to transform your concepts,
                descriptions, and inspirations into stunning AI-generated
                artwork—no artistic skills required.
              </p>
            </div>
            <div className="bg-mint-light/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-pink-dark font-serif-accent">
                Print your dreams on canvas
              </h3>
              <p className="text-lg">
                Bring your digital creations into the physical world with
                high-quality canvas prints that you can display, gift, and
                treasure for years to come.
              </p>
            </div>
            <div className="bg-mint-light/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-pink-dark font-serif-accent">
                Create photo albums from memories
              </h3>
              <p className="text-lg">
                Compile your favorite AI-generated artwork into beautiful photo
                albums that tell your unique story and preserve your creative
                journey.
              </p>
            </div>
            <div className="bg-lavander-light/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-pink-dark font-serif-accent">
                Mint your art as an NFT
              </h3>
              <p className="text-lg">
                Secure digital ownership of your creations by minting them as
                NFTs on the blockchain, establishing provenance and authenticity
                for your unique artwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet the Creator */}
      <section className="py-16 md:py-24 bg-mint-light/30">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif-accent">
              Meet the Creator
            </h2>
            <div className="mb-6 mx-auto w-32 h-32 relative rounded-full overflow-hidden">
              <Image
                src="/testimonials/avatar1.jpeg"
                alt="Gala Calero"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-serif-accent">
              Founder: Gala Calero
            </h3>
            <p className="text-lg mb-6">
              Developer, mom, and artist-at-heart, Gala is on a mission to make
              AI feel personal. With a background in technology and a passion
              for creativity, she built Mintsy to bridge the gap between digital
              innovation and emotional connection.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center p-10 bg-lavander-light/30 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6 font-serif-accent">
              Ready to create something meaningful?
            </h2>
            <LinkButton href="/create">Try Your Free Preview</LinkButton>
          </div>
        </div>
        <BackgroundGradient />
      </section>

      {/* 7. Footer is handled by the layout component */}
    </>
  );
}
