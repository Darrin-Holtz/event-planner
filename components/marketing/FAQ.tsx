"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to set up an event?",
    answer: "You can create and publish an event in just 5 minutes. Our intuitive interface makes event setup straightforward, and you can customize everything from registration forms to email confirmations.",
  },
  {
    question: "Can I import attendees from a previous event?",
    answer: "Yes! You can easily import attendee lists from CSV files or copy attendees from previous events. This is especially useful for recurring events like annual conferences.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support all major credit cards, debit cards, and Apple Pay through Stripe. You'll receive payments directly to your bank account within 2-3 business days.",
  },
  {
    question: "Is there a limit to the number of events I can create?",
    answer: "On the Starter plan, you can create up to 5 events. Growth and Ministry Plus plans include unlimited events, so you can manage as many as you need.",
  },
  {
    question: "Can I customize the registration form?",
    answer: "Absolutely! You can add custom fields, make fields optional or required, and include custom questions specific to your event.",
  },
  {
    question: "Do you offer email support?",
    answer: "Yes, all plans include email support. Growth and Ministry Plus plans also get priority support and access to phone support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted">
            Have questions? We&apos;ve got answers
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-lg text-foreground">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-200 text-muted leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
