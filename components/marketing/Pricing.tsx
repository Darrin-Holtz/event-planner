"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for small churches and ministries",
    features: [
      "Up to 5 events",
      "100 attendees per event",
      "Basic registration",
      "Email confirmations",
    ],
  },
  {
    name: "Growth",
    price: "$79",
    period: "per month",
    description: "For growing ministries",
    features: [
      "Unlimited events",
      "Unlimited attendees",
      "Advanced analytics",
      "Payment collection",
      "Automated reminders",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Ministry Plus",
    price: "$199",
    period: "per month",
    description: "Enterprise-grade solution",
    features: [
      "Everything in Growth",
      "Custom branding",
      "API access",
      "Dedicated support",
      "Custom integrations",
      "Advanced reporting",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="px-6 py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Choose the perfect plan for your ministry
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all relative ${
                plan.highlighted
                  ? "border-primary bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg md:scale-105"
                  : "border-gray-200 bg-white hover:shadow-md hover:border-primary/30"
              } p-8`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted text-sm mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted ml-2">
                  {plan.period}
                </span>
              </div>

              <Link
                href="/signup"
                className={`block text-center font-semibold py-3 rounded-lg mb-8 transition-all ${
                  plan.highlighted
                    ? "btn-primary"
                    : "btn-outline"
                }`}
              >
                Get Started
              </Link>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
