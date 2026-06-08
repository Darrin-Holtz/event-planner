import Link from "next/link";

export default function EventDetailsCTA() {
  return (
    <section className="px-6 py-16 md:py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Ready to Transform Your Ministry?
        </h2>
        <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
          Join 200+ ministry leaders for three days of inspiring sessions, meaningful connections, and
          practical strategies you can implement right away.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold">
            Secure Your Spot Today
          </button>
          <Link
            href="/events"
            className="btn-outline px-8 py-4 rounded-lg text-lg font-semibold"
          >
            View Other Events
          </Link>
        </div>
        <p className="text-sm text-muted mt-8">Early bird pricing available for next 48 hours only</p>
      </div>
    </section>
  );
}
