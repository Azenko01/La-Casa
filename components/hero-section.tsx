"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="La Casa Restaurant interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6">
            Authentic Italian Cuisine
          </p>
        </div>

        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6 transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-balance">A Taste of</span>
          <span className="block text-gold italic">Tradition</span>
        </h1>

        <p
          className={`text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Experience the finest Italian flavors crafted with passion, 
          served in an atmosphere of timeless elegance.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="#reservation"
            className="px-8 py-4 bg-gold text-primary-foreground text-sm uppercase tracking-widest hover:bg-gold-light transition-all duration-300"
          >
            Reserve a Table
          </Link>
          <Link
            href="#order"
            className="px-8 py-4 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-primary-foreground transition-all duration-300"
          >
            Order Online
          </Link>
          <Link
            href="#menu"
            className="px-8 py-4 border border-foreground/30 text-foreground text-sm uppercase tracking-widest hover:border-gold hover:text-gold transition-all duration-300"
          >
            View Menu
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
