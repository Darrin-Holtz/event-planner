import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="px-6 py-20 md:py-32 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">About Ministry Events</p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Empower Your Ministry with Effortless Event Management
        </h1>
        <p className="text-xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
          We believe ministry leaders shouldn&apos;t spend hours managing spreadsheets and emails. Ministry Events makes event planning simple, so you can focus on what matters: building community and serving your congregation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="inline-block px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Start Free Trial
          </Link>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
          >
            Schedule Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
