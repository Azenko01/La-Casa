"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#chef", label: "Chef" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reservation", label: "Reserve" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-wide text-gold">
              La Casa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-foreground/80 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#order"
              className="flex items-center gap-2 px-5 py-2.5 text-sm uppercase tracking-widest text-foreground/80 hover:text-gold transition-all duration-300"
            >
              <ShoppingBag size={16} />
              <span>Order</span>
            </Link>
            <Link
              href="#reservation"
              className="px-6 py-2.5 text-sm uppercase tracking-widest bg-gold text-primary-foreground hover:bg-gold-light transition-all duration-300"
            >
              Reserve Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest text-foreground/80 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="#order"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm uppercase tracking-widest border border-border text-foreground hover:border-gold hover:text-gold transition-all duration-300"
              >
                <ShoppingBag size={16} />
                <span>Order Online</span>
              </Link>
              <Link
                href="#reservation"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 text-sm uppercase tracking-widest bg-gold text-primary-foreground hover:bg-gold-light transition-all duration-300 text-center"
              >
                Reserve Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
