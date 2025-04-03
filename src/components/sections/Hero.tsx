import Image from "next/image";
import { LinkButton } from "@/components/ui/elements/buttons/LinkButton";
import ColorHead from "@/components/ui/ColorHead";
import BackgroundGradient from "@/components/ui/BackgroundGradient";

const Hero = () => (
  <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
    {/* Hero Background: Video para todos los dispositivos */}
    <div className="absolute inset-0 z-0">
      {/* Video de fondo para todos los dispositivos */}
      <div className="w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/hero_image.png"
        >
          <source src="/mintsy-hero.webm" type="video/webm" />
          <source src="/mintsy-hero.mp4" type="video/mp4" />
          {/* Fallback para navegadores que no soportan video */}
          <Image
            src="/hero_image.png"
            alt="Mujer feliz en un salón boho admirando arte generado con Mintsy"
            fill
            className="object-cover"
            priority
          />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-dark/70 backdrop-blur-[2px]"></div>
    </div>

    <div className="container mx-auto px-6 md:px-10 relative z-10">
      <div className="flex flex-col items-center justify-center text-center py-12 md:py-16">
        {/* Mobile-first Hero Content */}
        <div className="w-full max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold font-serif-accent text-white">
            <ColorHead
              text="Crea arte con IA que puedes sentir"
              className="block"
              colors={["#FDFBF7", "#e4d7f5", "#ff7466"]}
            />
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream max-w-lg mx-auto">
            De tu idea a tu pared. Crea arte único con Mintsy y recíbelo en tu
            hogar.
          </p>
          <div className="mt-8">
            <LinkButton
              href="/create"
              variant="primary"
              className="text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Crea tu arte ahora
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
    {/* Background Elements */}
    <BackgroundGradient />
  </section>
);

export default Hero;
