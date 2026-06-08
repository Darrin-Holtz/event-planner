import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="px-6 py-20 md:py-32 bg-gradient-to-r from-primary/5 via-white to-secondary/5">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready to Transform Your Ministry Events?
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
          Join hundreds of ministry leaders who&apos;ve simplified their event management and recovered valuable time for ministry work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="inline-block px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Start Free Trial
          </Link>
          <Link
            href="/events"
            className="inline-block px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
          >
            Explore Events
          </Link>
        </div>
        <p className="mt-8 text-sm text-muted">No credit card required. 14-day free trial.</p>
      </div>
    </section>
  );
}
