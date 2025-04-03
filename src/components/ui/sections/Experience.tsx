import React from "react";
import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <section className="relative bg-cream py-16 px-6 sm:px-12 md:py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-dark mb-6">
          &quot;Pensé que sería solo arte digital… ¡pero ahora tengo una obra
          que adorna mi salón!&quot;
        </h2>
        <p className="text-lg sm:text-xl text-dark max-w-2xl mx-auto mb-10">
          Carla, diseñadora de interiores, encontró en Mintsy una forma de
          transformar ideas en arte real. Su pieza favorita, una abstracción
          suave de sus palabras, ahora es parte esencial de su hogar.
        </p>
        <div className="flex justify-center">
          <Image
            src="/step3.jpg"
            width={640}
            height={480}
            alt="Cuadro generado por IA en salón"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
