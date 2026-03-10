"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/interior.jpg"
                alt="La Casa Restaurant elegant interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold -z-10" />
          </div>

          {/* Content */}
          <div
            className={`lg:pl-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              A Legacy of <span className="italic text-gold">Excellence</span>
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Founded in 1985, La Casa Restaurant has been a cornerstone of 
                authentic Italian dining for nearly four decades. Our story 
                began with a simple dream — to bring the rich culinary 
                traditions of Italy to discerning guests.
              </p>
              <p>
                Every dish we serve carries the soul of generations, prepared 
                with recipes passed down through our family. We source only 
                the finest ingredients, from imported Italian olive oils to 
                locally-grown herbs, ensuring each plate is a masterpiece.
              </p>
              <p>
                Our elegant dining room, with its warm amber lighting and 
                intimate atmosphere, provides the perfect backdrop for 
                unforgettable moments — whether a romantic dinner, family 
                celebration, or business gathering.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="font-serif text-2xl text-gold italic">
                Marco Rossi
              </p>
              <p className="text-sm text-foreground/50 uppercase tracking-widest mt-1">
                Founder & Executive Chef
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
