"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

const instagramPosts = [
  { image: "/images/dish-1.jpg", alt: "Fresh pasta dish" },
  { image: "/images/interior.jpg", alt: "Restaurant interior" },
  { image: "/images/dish-2.jpg", alt: "Beef tenderloin" },
  { image: "/images/gallery-1.jpg", alt: "Wine cellar" },
  { image: "/images/dish-3.jpg", alt: "Tiramisu dessert" },
  { image: "/images/gallery-3.jpg", alt: "Private dining" },
];

export function InstagramFeed() {
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
      className="py-16 bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-2">
              Follow Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              @lacasa_restaurant
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 text-sm uppercase tracking-widest"
          >
            <Instagram size={18} />
            <span>Follow on Instagram</span>
          </a>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram 
                  size={32} 
                  className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
