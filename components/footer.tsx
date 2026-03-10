import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl text-gold">La Casa</span>
            </Link>
            <p className="text-foreground/50 mt-4 text-sm leading-relaxed">
              Authentic Italian cuisine crafted with passion, 
              tradition, and the finest ingredients since 1985.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground/50 hover:text-gold hover:border-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground/50 hover:text-gold hover:border-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground/50 hover:text-gold hover:border-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-foreground mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href="https://maps.google.com/?q=123+Gourmet+Street+New+York+NY+10001"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground/50 hover:text-gold transition-colors"
              >
                <span className="text-foreground/70 block mb-1">Address:</span>
                123 Gourmet Street
                <br />
                New York, NY 10001
              </a>
              <a
                href="tel:+15550000000"
                className="block text-foreground/50 hover:text-gold transition-colors py-2 -my-2"
              >
                <span className="text-foreground/70 block mb-1">Phone:</span>
                <span className="text-lg">+1 (555) 000-0000</span>
              </a>
              <a
                href="mailto:info@lacasa.com"
                className="block text-foreground/50 hover:text-gold transition-colors"
              >
                <span className="text-foreground/70 block mb-1">Email:</span>
                info@lacasa.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-foreground mb-6">
              Opening Hours
            </h4>
            <div className="space-y-3 text-foreground/50 text-sm">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span className="text-foreground/70">5PM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span className="text-foreground/70">5PM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground/70">4PM - 9PM</span>
              </div>
              <div className="pt-4 border-t border-border mt-4">
                <p className="text-gold text-xs uppercase tracking-wider">
                  Private Events Available
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-foreground mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { href: "#about", label: "About Us" },
                { href: "#menu", label: "Our Menu" },
                { href: "#order", label: "Order Online" },
                { href: "#chef", label: "The Chef" },
                { href: "#gallery", label: "Gallery" },
                { href: "#reservation", label: "Reservations" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-foreground/50 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} La Casa Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/40">
            <Link href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
