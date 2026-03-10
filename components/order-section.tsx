"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ShoppingBag, Clock, MapPin, Phone } from "lucide-react";

export function OrderSection() {
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
      id="order"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Enjoy at Home
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Order <span className="italic text-gold">Online</span>
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Experience the exquisite flavors of La Casa in the comfort of your home. 
              Order our signature dishes for pickup or delivery and bring the taste of 
              authentic Italian cuisine to your table.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gold/50 flex items-center justify-center text-gold flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-foreground font-medium">Fast Preparation</p>
                  <p className="text-foreground/50 text-sm">Ready in 30-45 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gold/50 flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-foreground font-medium">Delivery Available</p>
                  <p className="text-foreground/50 text-sm">Within 5 miles radius</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gold/50 flex items-center justify-center text-gold flex-shrink-0">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <p className="text-foreground font-medium">Curbside Pickup</p>
                  <p className="text-foreground/50 text-sm">Quick and contactless</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-gold text-primary-foreground text-sm uppercase tracking-widest hover:bg-gold-light transition-all duration-300 text-center"
              >
                Start Your Order
              </a>
              <a
                href="tel:+15550000000"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground/70 text-sm uppercase tracking-widest hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Phone size={16} />
                <span>Call to Order</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/dish-1.jpg"
                alt="La Casa signature pasta dish"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 max-w-[260px]">
              <p className="text-gold text-sm uppercase tracking-wider mb-2">
                Free Delivery
              </p>
              <p className="font-serif text-2xl text-foreground mb-1">
                Orders Over $75
              </p>
              <p className="text-foreground/50 text-sm">
                Use code: LACASA75
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
