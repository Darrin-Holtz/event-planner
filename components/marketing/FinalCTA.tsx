"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="px-6 py-20 md:py-32 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready to Transform Your Events?
        </h2>

        <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
          Join hundreds of churches and ministries already using Ministry Events 
          to manage their most important gatherings.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/signup"
            className="btn-primary inline-flex items-center gap-2"
          >
            Start Free Trial
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/events"
            className="btn-outline inline-flex items-center gap-2"
          >
            Browse Sample Events
            <ArrowRight size={18} />
          </Link>
        </div>

        <p className="text-muted text-sm">
          No credit card required • Free for 14 days • Cancel anytime
        </p>
      </div>
    </section>
  );
}
