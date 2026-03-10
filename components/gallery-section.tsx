"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Wine cellar with premium selections" },
  { src: "/images/gallery-2.jpg", alt: "Fresh burrata appetizer" },
  { src: "/images/gallery-3.jpg", alt: "Private dining room" },
  { src: "/images/gallery-4.jpg", alt: "Seafood risotto" },
  { src: "/images/interior.jpg", alt: "Restaurant main dining area" },
  { src: "/images/dish-1.jpg", alt: "Truffle pasta" },
];

export function GallerySection() {
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
      id="gallery"
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
            Visual Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Our <span className="italic text-gold">Gallery</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A glimpse into the La Casa experience — from our carefully curated 
            dishes to the warm ambiance of our dining spaces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 border border-gold flex items-center justify-center">
                    <span className="text-gold text-2xl">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
