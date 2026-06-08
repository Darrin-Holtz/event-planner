import { Heart, Lightbulb, Handshake, Award } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Heart,
      title: "Stewardship",
      description: "We treat your time, data, and trust as sacred responsibilities",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly improving to solve real problems ministry leaders face",
    },
    {
      icon: Handshake,
      title: "Community",
      description: "We're building a supportive network of ministry leaders together",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Every detail matters, from code quality to customer support",
    },
  ];

  return (
    <section className="px-6 py-20 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Core Values</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built on Principles That Matter
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Everything we build reflects our commitment to serving ministry leaders with integrity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <div key={idx} className="p-8 rounded-xl border border-primary/20 bg-white hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
