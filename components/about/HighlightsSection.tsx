import { Zap, Shield, Smile, Rocket } from "lucide-react";

export default function HighlightsSection() {
  const highlights = [
    { icon: Zap, title: "Lightning Fast Setup", description: "Create your first event in under 5 minutes" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption protects all attendee data" },
    { icon: Smile, title: "Delightful UX", description: "Intuitive interface that requires minimal training" },
    { icon: Rocket, title: "Powerful Features", description: "From simple events to complex multi-day conferences" },
    { icon: Users, title: "Dedicated Support", description: "Real humans ready to help when you need them" },
    { icon: TrendingUp, title: "Insights & Reports", description: "Beautiful dashboards showing exactly what matters" },
  ];

  return (
    <section className="px-6 py-20 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Leaders Choose Us</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Thousands of ministry leaders trust Ministry Events to power their events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, idx) => {
            const IconComponent = highlight.icon;
            return (
              <div key={idx} className="p-8 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <IconComponent className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{highlight.title}</h3>
                <p className="text-muted">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Users, TrendingUp } from "lucide-react";
