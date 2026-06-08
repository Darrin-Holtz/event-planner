"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ExpandableFAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqs = [
    {
      id: "1",
      question: "What is included in the event registration?",
      answer:
        "Your registration includes access to all keynote sessions, breakout workshops, meals (breakfast, lunch, and dinner), coffee breaks, and all event materials. You'll also receive a digital workbook and post-event recording access for 30 days.",
    },
    {
      id: "2",
      question: "Can I attend just one day instead of the full retreat?",
      answer:
        "Yes, we offer day passes at a discounted rate. Contact us at events@ministry.com for day-pass pricing and availability.",
    },
    {
      id: "3",
      question: "What should I bring to the retreat?",
      answer:
        "Please bring comfortable clothing, a notebook, and any personal items you need (medications, sunscreen, etc.). We provide all meals and conference materials. If you have dietary restrictions, please let us know during registration.",
    },
    {
      id: "4",
      question: "Is there accommodation included?",
      answer:
        "Accommodations are available for an additional fee. Upon registration, you'll receive information about nearby hotels and partner accommodation options with special rates for attendees.",
    },
    {
      id: "5",
      question: "What is your cancellation policy?",
      answer:
        "We offer full refunds for cancellations made up to 14 days before the event. Cancellations within 14 days will receive a 50% refund. No refunds will be issued within 7 days of the event.",
    },
    {
      id: "6",
      question: "Will there be networking opportunities?",
      answer:
        "Absolutely! We've built in dedicated networking sessions, including a welcome dinner on Friday evening, lunch on Saturday, and coffee breaks throughout the retreat. These are perfect opportunities to connect with fellow attendees and speakers.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="rounded-xl border border-gray-200 hover:border-primary/30 transition-all hover:shadow-md overflow-hidden bg-white"
          >
            <button
              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
            >
              <h3 className="font-semibold text-foreground text-lg">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                  expandedId === faq.id ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedId === faq.id && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
