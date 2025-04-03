import React from "react";
import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <section className="relative bg-cream py-12 px-4 sm:px-8 md:py-16 lg:py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-mint-light/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-lavander-light/30 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 relative z-10">
          {/* Image section - on top for mobile, left for desktop */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm md:max-w-none">
              <Image
                src="/experience.jpg"
                width={480}
                height={480}
                alt="Cuadro generado por IA en salón"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 480px"
              />
              <div className="absolute -bottom-3 -right-3 bg-mint-dark text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md">
                Creado con Mintsy.ai
              </div>
            </div>
          </div>

          {/* Text section - below for mobile, right for desktop */}
          <div className="w-full md:w-3/5 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-dark mb-4 md:mb-6">
              &quot;Pensé que sería solo arte digital… ¡pero ahora tengo una
              obra que adorna mi salón!&quot;
            </h2>
            <p className="text-base sm:text-lg text-dark mb-6">
              Carla, diseñadora de interiores, encontró en Mintsy una forma de
              transformar ideas en arte real. Su pieza favorita, una abstracción
              suave de sus palabras, ahora es parte esencial de su hogar.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-mint-light/50 flex items-center justify-center text-mint-dark font-bold text-lg mr-3">
                C
              </div>
              <div>
                <p className="font-medium">Carla Rodríguez</p>
                <p className="text-sm text-text-muted">
                  Diseñadora de Interiores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
