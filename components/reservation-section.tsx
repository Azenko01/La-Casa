"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle } from "lucide-react";

// Time slots with availability
const timeSlots = [
  { value: "17:00", label: "5:00 PM", available: true },
  { value: "17:30", label: "5:30 PM", available: true },
  { value: "18:00", label: "6:00 PM", available: false },
  { value: "18:30", label: "6:30 PM", available: true },
  { value: "19:00", label: "7:00 PM", available: false },
  { value: "19:30", label: "7:30 PM", available: true },
  { value: "20:00", label: "8:00 PM", available: true },
  { value: "20:30", label: "8:30 PM", available: false },
  { value: "21:00", label: "9:00 PM", available: true },
  { value: "21:30", label: "9:30 PM", available: true },
];

export function ReservationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    notes: "",
  });
  const [showTimeSlots, setShowTimeSlots] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your reservation request. We will contact you shortly to confirm.");
  };

  const selectedTimeLabel = timeSlots.find(t => t.value === formData.time)?.label || "";

  return (
    <section
      ref={sectionRef}
      id="reservation"
      className="py-24 lg:py-32 bg-secondary"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Join Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Reserve Your <span className="italic text-gold">Table</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Secure your place for an unforgettable dining experience. 
            We recommend booking in advance, especially for weekend evenings.
          </p>
        </div>

        {/* Reservation Form */}
        <form
          onSubmit={handleSubmit}
          className={`bg-card border border-border p-8 md:p-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm uppercase tracking-widest text-foreground/70">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  className="w-full bg-input border border-border pl-12 pr-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm uppercase tracking-widest text-foreground/70">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-input border border-border pl-12 pr-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Phone - Click to call on mobile */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm uppercase tracking-widest text-foreground/70">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-input border border-border pl-12 pr-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label htmlFor="guests" className="block text-sm uppercase tracking-widest text-foreground/70">
                Number of Guests
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-input border border-border pl-12 pr-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value="9+">9+ Guests (Private Event)</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm uppercase tracking-widest text-foreground/70">
                Preferred Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-input border border-border pl-12 pr-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Time with availability indicator */}
            <div className="space-y-2">
              <label htmlFor="time" className="block text-sm uppercase tracking-widest text-foreground/70">
                Preferred Time
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 z-10" />
                <button
                  type="button"
                  onClick={() => setShowTimeSlots(!showTimeSlots)}
                  className="w-full bg-input border border-border pl-12 pr-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors text-left"
                >
                  {selectedTimeLabel || "Select time"}
                </button>
                
                {/* Time slots dropdown */}
                {showTimeSlots && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border z-20 max-h-60 overflow-y-auto">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.value}
                        type="button"
                        onClick={() => {
                          if (slot.available) {
                            setFormData({ ...formData, time: slot.value });
                            setShowTimeSlots(false);
                          }
                        }}
                        disabled={!slot.available}
                        className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                          slot.available 
                            ? "hover:bg-gold/10 text-foreground cursor-pointer"
                            : "text-foreground/30 cursor-not-allowed bg-muted/50"
                        } ${formData.time === slot.value ? "bg-gold/20 text-gold" : ""}`}
                      >
                        <span>{slot.label}</span>
                        {slot.available ? (
                          <span className="flex items-center gap-1 text-xs text-green-500">
                            <CheckCircle size={14} />
                            Available
                          </span>
                        ) : (
                          <span className="text-xs text-foreground/30">Fully Booked</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Occasion */}
            <div className="space-y-2">
              <label htmlFor="occasion" className="block text-sm uppercase tracking-widest text-foreground/70">
                Special Occasion (Optional)
              </label>
              <select
                id="occasion"
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date">Date Night</option>
                <option value="business">Business Dinner</option>
                <option value="celebration">Celebration</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Special Requests */}
            <div className="space-y-2">
              <label htmlFor="notes" className="block text-sm uppercase tracking-widest text-foreground/70">
                Special Requests (Optional)
              </label>
              <input
                type="text"
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Dietary restrictions, seating preference..."
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-8 py-4 bg-gold text-primary-foreground text-sm uppercase tracking-widest hover:bg-gold-light transition-all duration-300"
          >
            Reserve Now
          </button>

          <p className="text-center text-foreground/40 text-sm mt-6">
            For parties of 9 or more, please call us directly at{" "}
            <a href="tel:+15550000000" className="text-gold hover:underline">
              +1 (555) 000-0000
            </a>
          </p>
        </form>

        {/* Quick Contact Buttons for Mobile */}
        <div
          className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="tel:+15550000000"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-card border border-border text-foreground hover:border-gold hover:text-gold transition-all duration-300"
          >
            <Phone size={18} />
            <span className="text-sm uppercase tracking-widest">Call Now</span>
          </a>
          <a
            href="mailto:reservations@lacasa.com"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-card border border-border text-foreground hover:border-gold hover:text-gold transition-all duration-300"
          >
            <Mail size={18} />
            <span className="text-sm uppercase tracking-widest">Email Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
