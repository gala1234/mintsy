import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Mintsy.ai turned my ideas into beautiful art pieces that I proudly display at home and in my digital collection.",
      author: "Alex R.",
      role: "Beta User",
      avatar: "https://i.pravatar.cc/150?img=1", // Placeholder avatar URL
    },
    {
      id: 2,
      quote:
        "As someone with zero artistic talent, I was amazed at how Mintsy.ai helped me create stunning artwork that truly reflects my vision.",
      author: "Jamie L.",
      role: "Beta User",
      avatar: "https://i.pravatar.cc/150?img=2", // Placeholder avatar URL
    },
    {
      id: 3,
      quote:
        "The ability to own my creations both as NFTs and physical prints gives me the best of both worlds. Mintsy.ai is revolutionary!",
      author: "Taylor K.",
      role: "Beta User",
      avatar: "https://i.pravatar.cc/150?img=3", // Placeholder avatar URL
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-6 md:px-10 bg-lavender-mist/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-graphite-ink">
            What Our Users Say
          </h2>
          <p className="text-lg text-graphite-ink/80 max-w-2xl mx-auto">
            Hear from our early adopters who are already creating and owning
            amazing AI art
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-light-cream p-6 rounded-xl shadow-elevated flex flex-col items-center text-center"
            >
              <div className="mb-4 w-16 h-16 rounded-full overflow-hidden border-2 border-lavender-mist">
                {/* In a real implementation, you would use Next.js Image component here */}
                <div
                  className="w-full h-full bg-lavender-mist/50"
                  style={{
                    backgroundImage: `url(${testimonial.avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>

              <blockquote className="mb-4">
                <p className="text-graphite-ink/90 italic">
                  {testimonial.quote}
                </p>
              </blockquote>

              <div>
                <p className="font-bold text-graphite-ink">
                  {testimonial.author}
                </p>
                <p className="text-sm text-graphite-ink/70">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
