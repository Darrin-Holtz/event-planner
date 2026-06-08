export default function ImpactStats() {
  const stats = [
    { number: "5,000+", label: "Events Managed", description: "Thousands of successful events powered by our platform" },
    { number: "250,000+", label: "Registrations Processed", description: "From small groups to large conferences" },
    { number: "500+", label: "Churches & Ministries", description: "Growing community of ministry leaders" },
    { number: "10,000+", label: "Hours Saved", description: "Time our customers recovered for ministry work" },
  ];

  return (
    <section className="px-6 py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our Impact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Trusted by Ministry Leaders</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{stat.label}</h3>
              <p className="text-muted">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
