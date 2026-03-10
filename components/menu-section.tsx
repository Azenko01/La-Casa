"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, Flame, Leaf } from "lucide-react";

const menuCategories = [
  {
    name: "Starters",
    items: [
      {
        name: "Burrata Caprese",
        description: "Fresh burrata, heirloom tomatoes, basil pesto, aged balsamic",
        price: "24",
        image: "/images/gallery-2.jpg",
        badge: null,
      },
      {
        name: "Carpaccio di Manzo",
        description: "Thinly sliced beef tenderloin, arugula, parmesan, truffle oil",
        price: "28",
        image: "/images/dish-2.jpg",
        badge: "chef",
      },
      {
        name: "Calamari Fritti",
        description: "Crispy fried calamari, lemon aioli, marinara sauce",
        price: "22",
        image: "/images/gallery-4.jpg",
        badge: "popular",
      },
      {
        name: "Zuppa del Giorno",
        description: "Chef's daily soup creation, artisanal bread",
        price: "16",
        image: "/images/dish-1.jpg",
        badge: null,
      },
    ],
  },
  {
    name: "Main Courses",
    items: [
      {
        name: "Tagliatelle al Tartufo",
        description: "Fresh pasta, black truffle cream sauce, parmesan, wild mushrooms",
        price: "48",
        image: "/images/dish-1.jpg",
        badge: "chef",
      },
      {
        name: "Branzino al Forno",
        description: "Mediterranean sea bass, herb crust, roasted vegetables, lemon butter",
        price: "52",
        image: "/images/gallery-4.jpg",
        badge: null,
      },
      {
        name: "Ossobuco alla Milanese",
        description: "Braised veal shank, saffron risotto, gremolata",
        price: "58",
        image: "/images/dish-2.jpg",
        badge: "house",
      },
      {
        name: "Filetto di Manzo",
        description: "Prime beef tenderloin, barolo reduction, truffle mashed potatoes",
        price: "65",
        image: "/images/dish-2.jpg",
        badge: "popular",
      },
    ],
  },
  {
    name: "Desserts",
    items: [
      {
        name: "Tiramisu Classico",
        description: "Traditional coffee-soaked ladyfingers, mascarpone, cocoa",
        price: "16",
        image: "/images/dish-3.jpg",
        badge: "house",
      },
      {
        name: "Panna Cotta",
        description: "Vanilla bean cream, seasonal berry compote, mint",
        price: "14",
        image: "/images/dish-3.jpg",
        badge: null,
      },
      {
        name: "Cannoli Siciliani",
        description: "Crispy shells, sweet ricotta, chocolate chips, pistachios",
        price: "15",
        image: "/images/dish-3.jpg",
        badge: "popular",
      },
      {
        name: "Affogato al Caffe",
        description: "Vanilla gelato, espresso, amaretto",
        price: "12",
        image: "/images/dish-3.jpg",
        badge: null,
      },
    ],
  },
  {
    name: "Vegetarian",
    items: [
      {
        name: "Risotto ai Funghi",
        description: "Creamy arborio rice, wild porcini mushrooms, parmesan, truffle oil",
        price: "38",
        image: "/images/dish-1.jpg",
        badge: "vegetarian",
      },
      {
        name: "Melanzane alla Parmigiana",
        description: "Layered eggplant, tomato sauce, mozzarella, basil",
        price: "28",
        image: "/images/gallery-2.jpg",
        badge: "vegetarian",
      },
      {
        name: "Ravioli di Ricotta",
        description: "Handmade spinach ravioli, sage butter, pine nuts",
        price: "34",
        image: "/images/dish-1.jpg",
        badge: "chef",
      },
      {
        name: "Insalata di Stagione",
        description: "Seasonal greens, roasted vegetables, balsamic vinaigrette",
        price: "18",
        image: "/images/gallery-2.jpg",
        badge: "vegetarian",
      },
    ],
  },
];

function BadgeIcon({ type }: { type: string | null }) {
  if (!type) return null;
  
  switch (type) {
    case "chef":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs uppercase tracking-wider bg-gold/20 text-gold border border-gold/30">
          <Star size={12} className="fill-gold" />
          Chef's Choice
        </span>
      );
    case "house":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs uppercase tracking-wider bg-gold/20 text-gold border border-gold/30">
          <Star size={12} className="fill-gold" />
          House Special
        </span>
      );
    case "popular":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30">
          <Flame size={12} />
          Popular
        </span>
      );
    case "vegetarian":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs uppercase tracking-wider bg-green-500/20 text-green-400 border border-green-500/30">
          <Leaf size={12} />
          Vegetarian
        </span>
      );
    default:
      return null;
  }
}

export function MenuSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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
      id="menu"
      className="py-24 lg:py-32 bg-secondary"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Culinary Excellence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Our <span className="italic text-gold">Menu</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Each dish is crafted with the finest ingredients, honoring 
            traditional Italian recipes while embracing contemporary elegance.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-4 md:gap-8 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {menuCategories.map((category, index) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(index)}
              className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
                activeCategory === index
                  ? "text-gold border-gold"
                  : "text-foreground/50 border-transparent hover:text-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div
          className={`grid md:grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {menuCategories[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="group relative bg-card border border-border hover:border-gold/50 transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex gap-4 p-5">
                {/* Image */}
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredItem === item.name ? "scale-110" : "scale-100"
                    }`}
                    sizes="96px"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors duration-300 truncate">
                      {item.name}
                    </h3>
                    <span className="font-serif text-lg text-gold flex-shrink-0">
                      ${item.price}
                    </span>
                  </div>
                  
                  {item.badge && (
                    <div className="mb-2">
                      <BadgeIcon type={item.badge} />
                    </div>
                  )}
                  
                  <p className="text-foreground/50 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover overlay with expanded image */}
              <div
                className={`absolute inset-0 bg-background/95 p-5 flex flex-col transition-all duration-300 ${
                  hoveredItem === item.name
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full pointer-events-none"
                }`}
              >
                <div className="relative w-full h-32 mb-4 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-xl text-gold">
                    {item.name}
                  </h3>
                  <span className="font-serif text-xl text-gold">
                    ${item.price}
                  </span>
                </div>
                {item.badge && (
                  <div className="mb-2">
                    <BadgeIcon type={item.badge} />
                  </div>
                )}
                <p className="text-foreground/70 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Download Menu & Order CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#order"
            className="px-8 py-3 bg-gold text-primary-foreground text-sm uppercase tracking-widest hover:bg-gold-light transition-all duration-300 text-center"
          >
            Order for Delivery
          </a>
          <a
            href="#"
            className="px-8 py-3 border border-border text-foreground/70 text-sm uppercase tracking-widest hover:border-gold hover:text-gold transition-all duration-300 text-center"
          >
            Download Full Menu
          </a>
        </div>

        {/* Note */}
        <p
          className={`text-center text-foreground/40 text-sm mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Prices are in USD. Please inform our staff of any dietary requirements or allergies.
        </p>
      </div>
    </section>
  );
}
