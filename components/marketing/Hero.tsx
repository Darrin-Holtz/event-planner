"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>Simplify Your Ministry Events</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground text-center leading-tight mb-6">
          Event Management for
          <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Churches & Ministries
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-xl text-muted text-center mb-8 max-w-2xl mx-auto">
          Manage retreats, conferences, camps, and gatherings in one powerful platform. 
          Streamline registration, track attendance, and maximize your event impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/signup"
            className="btn-primary inline-flex items-center gap-2"
          >
            Start Free Trial
            <ArrowRight size={18} />
          </Link>
          <button className="btn-outline inline-flex items-center gap-2">
            <Play size={18} />
            View Demo
          </button>
        </div>

        {/* Product Showcase */}
        <div className="relative rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="relative h-80 md:h-96 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <p className="text-muted">Product Dashboard Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
