export default function MissionSection() {
  return (
    <section className="px-6 py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our Mission</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transforming Ministry Through Technology
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              We&apos;re on a mission to remove the administrative burden from ministry leaders so they can focus entirely on what they do best: pastoring, teaching, and building authentic community. Every feature we build is designed with one question in mind: How can we save our customers time and reduce their stress?
            </p>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our Vision</p>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Every church has the tools they need to thrive
            </h3>
            <p className="text-lg text-muted leading-relaxed">
              We envision a world where churches of all sizes—from small home groups to megachurches—have access to professional-grade event management tools. Technology should serve ministry, not hinder it. Our platform exists to level the playing field and empower every leader to run better events.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our Values</p>
            <p className="text-lg text-muted leading-relaxed">
              Integrity guides everything we do. We believe in transparent pricing, honest communication, and software that actually solves problems. We&apos;re committed to being good stewards of our customers&apos; time, data, and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
