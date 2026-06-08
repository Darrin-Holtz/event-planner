"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Events Director, Grace Church",
    content: "Ministry Events completely transformed how we handle our annual retreats. What used to take weeks now takes hours.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Youth Pastor, Community Life",
    content: "Our youth attendance increased 40% since we switched to this platform. Registration is so much easier now.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Administrative Manager, Trinity Ministry",
    content: "The automated confirmations and reminders have been a lifesaver. Our no-show rate dropped significantly.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Ministry Leaders
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            See how churches are using Ministry Events to grow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all hover:border-primary/30"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              500+
            </div>
            <p className="text-muted">Churches Using Ministry Events</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              2M+
            </div>
            <p className="text-muted">Events Managed Annually</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              95%
            </div>
            <p className="text-muted">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
