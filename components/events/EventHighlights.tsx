import { Zap } from "lucide-react";

export default function EventHighlights() {
  const highlights = [
    {
      icon: "🎤",
      title: "Expert Speakers",
      description: "Learn from industry-leading voices with 100+ years of combined experience",
    },
    {
      icon: "👥",
      title: "Networking",
      description: "Connect with 200+ ministry leaders and innovators from across the region",
    },
    {
      icon: "📚",
      title: "Resources",
      description: "Receive digital workbooks, templates, and recordings to take home",
    },
    {
      icon: "🎯",
      title: "Practical Skills",
      description: "Walk away with actionable strategies you can implement immediately",
    },
    {
      icon: "🌟",
      title: "Community",
      description: "Join a supportive network of ministry professionals committed to growth",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Discover cutting-edge approaches to timeless ministry challenges",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-8">Why Attend?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((highlight, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary/30 hover:bg-primary/5 transition-all"
          >
            <div className="text-4xl mb-4">{highlight.icon}</div>
            <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
            <p className="text-muted">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
