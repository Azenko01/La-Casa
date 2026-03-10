"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Wine, UtensilsCrossed, Sparkles } from "lucide-react";

const events = [
  {
    icon: Wine,
    title: "Wine Night",
    description: "Every Friday",
    detail: "Half price on selected wines",
  },
  {
    icon: UtensilsCrossed,
    title: "Tasting Menu",
    description: "Thu - Sat",
    detail: "5-course chef's selection",
  },
  {
    icon: Calendar,
    title: "Sunday Brunch",
    description: "11AM - 3PM",
    detail: "Italian brunch classics",
  },
  {
    icon: Sparkles,
    title: "Private Events",
    description: "Book Now",
    detail: "Exclusive dining rooms",
  },
];

export function EventsBanner() {
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
      className="py-16 bg-gold/10 border-y border-gold/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-2">
            Special Offers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Events & <span className="italic text-gold">Promotions</span>
          </h2>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group bg-card border border-border hover:border-gold/50 p-6 text-center transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 border border-gold/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-300">
                <event.icon size={24} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">
                {event.title}
              </h3>
              <p className="text-gold text-sm uppercase tracking-wider mb-2">
                {event.description}
              </p>
              <p className="text-foreground/50 text-sm">
                {event.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
