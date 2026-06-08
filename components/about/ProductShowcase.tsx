export default function ProductShowcase() {
  const features = [
    {
      title: "Dashboard",
      description: "Comprehensive overview of all your events at a glance with key metrics and upcoming activities",
    },
    {
      title: "Event Pages",
      description: "Beautiful, mobile-responsive event pages that drive registrations and engagement",
    },
    {
      title: "Registration Flow",
      description: "Smooth, frictionless registration experience that attendees love",
    },
  ];

  return (
    <section className="px-6 py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Product</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features Built for Ministry
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Explore the tools that make Ministry Events the choice for thousands of leaders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center text-muted">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-sm font-medium">{feature.title} Preview</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
