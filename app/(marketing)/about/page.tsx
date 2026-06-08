import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import ProblemSection from "@/components/about/ProblemSection";
import SolutionSection from "@/components/about/SolutionSection";
import HighlightsSection from "@/components/about/HighlightsSection";
import ImpactStats from "@/components/about/ImpactStats";
import CoreValues from "@/components/about/CoreValues";
import ProductShowcase from "@/components/about/ProductShowcase";
import ExpandableFAQ from "@/components/events/ExpandableFAQ";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Ministry Events - Empower Your Ministry",
  description: "Learn how Ministry Events is transforming event management for churches and ministries worldwide.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <AboutHero />

      {/* Mission Section */}
      <MissionSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Highlights Section */}
      <HighlightsSection />

      {/* Impact Stats */}
      <ImpactStats />

      {/* Core Values */}
      <CoreValues />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* FAQ Section */}
      <section className="px-6 py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted">Got questions? We&apos;ve got answers.</p>
          </div>
          <ExpandableFAQ />
        </div>
      </section>

      {/* Final CTA */}
      <AboutCTA />

      {/* Team Section */}
      <section className="px-6 py-20 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Meet the Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built by Ministry Leaders, for Ministry Leaders
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Our team has decades of combined experience in both technology and ministry. We understand your challenges because we&apos;ve lived them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Pastor James Mitchell", role: "Co-Founder & CEO", focus: "Vision & Ministry Leadership" },
              { name: "Sarah Chen", role: "Co-Founder & CTO", focus: "Product & Engineering" },
              { name: "Marcus Johnson", role: "Head of Customer Success", focus: "Customer Support & Education" },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-muted">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
