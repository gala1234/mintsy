"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LinkButton } from "@/components/ui/elements/buttons/LinkButton";
import ColorHead from "@/components/ui/ColorHead";
import BackgroundGradient from "@/components/ui/BackgroundGradient";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && videoRef.current && !isVideoLoaded) {
      // Only load video sources when in viewport
      const webmSource = document.createElement("source");
      webmSource.src = "/mintsy-hero4.webm";
      webmSource.type = "video/webm";

      const mp4Source = document.createElement("source");
      mp4Source.src = "/mintsy-hero4.mp4";
      mp4Source.type = "video/mp4";

      videoRef.current.appendChild(webmSource);
      videoRef.current.appendChild(mp4Source);
      videoRef.current.load();

      // Set additional attributes for mobile compatibility
      if (videoRef.current) {
        videoRef.current.setAttribute("playsinline", "");
        videoRef.current.setAttribute("webkit-playsinline", "");
        videoRef.current.muted = true;
        videoRef.current.autoplay = true;
      }

      videoRef.current.play().catch((error) => {
        console.error("Video play error:", error);
        // If video fails to play, ensure the poster image is displayed
        if (videoRef.current) {
          videoRef.current.controls = false;
          // Don't hide the video element completely, let the poster show
          videoRef.current.style.opacity = "1";
        }
      });
      setIsVideoLoaded(true);
    }
  }, [isIntersecting, isVideoLoaded]);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      {/* Hero Background: Video para todos los dispositivos */}
      <div className="absolute inset-0 z-0">
        {/* Video de fondo para todos los dispositivos */}
        <div className="w-full h-full">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay
            className="w-full h-full object-cover"
            poster="/mintsy-hero4.jpg"
            preload="metadata"
          >
            {/* Sources will be added dynamically when in viewport */}
            {/* Fallback para navegadores que no soportan video */}
            <Image
              src="/mintsy-hero4.jpg"
              alt="Mujer feliz en un salón boho admirando arte generado con Mintsy"
              fill
              className="object-cover"
              loading="eager"
              sizes="100vw"
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
                duration={
                  20
                } /* Reduced animation duration for better performance */
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
};

export default Hero;
