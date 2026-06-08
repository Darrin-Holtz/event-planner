"use client";

import { Clock, Users, Zap, Archive } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Eliminate manual event planning tasks and focus on ministry",
  },
  {
    icon: Users,
    title: "Increase Attendance",
    description: "Make registration so easy that attendance naturally grows",
  },
  {
    icon: Zap,
    title: "Simplify Registration",
    description: "One-click registration with instant confirmations",
  },
  {
    icon: Archive,
    title: "Eliminate Spreadsheets",
    description: "Say goodbye to outdated spreadsheet tracking forever",
  },
];

export default function Benefits() {
  return (
    <section className="px-6 py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Ministry Events?
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Built specifically for the way you work
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:border-primary/30"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={28} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
