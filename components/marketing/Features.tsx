"use client";

import { Users, Calendar, ClipboardList, CreditCard, Bell, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Event Management",
    description: "Create and manage all your ministry events in one centralized hub",
  },
  {
    icon: Users,
    title: "Online Registration",
    description: "Beautiful registration forms that convert visitors into attendees",
  },
  {
    icon: TrendingUp,
    title: "Capacity Tracking",
    description: "Real-time capacity monitoring and waitlist management",
  },
  {
    icon: ClipboardList,
    title: "Attendee Management",
    description: "Complete attendee profiles and check-in tools",
  },
  {
    icon: Bell,
    title: "Automated Emails",
    description: "Confirmations, reminders, and follow-ups automatically sent",
  },
  {
    icon: CreditCard,
    title: "Payment Collection",
    description: "Securely collect payments with Stripe integration",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Powerful features designed specifically for ministry event management
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-xl border border-gray-200 hover:border-primary/30 bg-white hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
