"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const featuredDishes = [
  {
    name: "Tagliatelle al Tartufo",
    description: "A celebration of seasonal black truffles with handmade pasta",
    image: "/images/dish-1.jpg",
  },
  {
    name: "Filetto di Manzo",
    description: "Prime beef tenderloin with Barolo wine reduction",
    image: "/images/dish-2.jpg",
  },
  {
    name: "Tiramisu Classico",
    description: "Our signature dessert, made with imported mascarpone",
    image: "/images/dish-3.jpg",
  },
];

export function ChefSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chef"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            From Our Kitchen
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Chef's <span className="italic text-gold">Recommendations</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Chef Info */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden">
                <Image
                  src="/images/chef.jpg"
                  alt="Executive Chef Marco Rossi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              {/* Gold accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold" />
            </div>

            <div className="mt-8 text-center lg:text-left">
              <h3 className="font-serif text-2xl text-foreground">
                Chef Marco Rossi
              </h3>
              <p className="text-gold text-sm uppercase tracking-widest mt-1">
                Executive Chef
              </p>
              <p className="text-foreground/70 mt-4 leading-relaxed">
                With over 25 years of culinary mastery, Chef Marco brings the 
                authentic flavors of his hometown in Tuscany to every plate. 
                His philosophy is simple: respect for ingredients, passion 
                for tradition, and an unwavering commitment to excellence.
              </p>
            </div>
          </div>

          {/* Featured Dishes */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="font-serif text-2xl text-foreground mb-8 text-center lg:text-left">
              Signature Creations
            </h3>
            
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.name}
                className="group flex gap-6 p-4 border border-border/50 hover:border-gold/50 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                    {dish.name}
                  </h4>
                  <p className="text-foreground/50 text-sm mt-1">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
