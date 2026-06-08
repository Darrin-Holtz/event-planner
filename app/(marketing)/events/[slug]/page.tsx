import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { CalendarDays, Clock, MapPin, Users, ChevronLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PublicEventPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PublicEventPage({ params }: PublicEventPageProps) {
  const { slug } = await params;

  const event = await prisma.event.findFirst({
    where: { slug, status: "PUBLISHED" },
    include: { church: true },
  });

  if (!event) notFound();

  const sameDay =
    format(event.startDate, "yyyy-MM-dd") === format(event.endDate, "yyyy-MM-dd");

  return (
    <>
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="mx-auto max-w-6xl">
          {/* Back Button */}
          <Link
            href="/events"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> Back to Events
          </Link>

          {/* Church Badge */}
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            {event.church.name}
          </p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {event.title}
          </h1>

          {/* Description */}
          {event.description && (
            <p className="text-xl text-muted max-w-3xl mb-8 leading-relaxed">
              {event.description}
            </p>
          )}

          {/* Key Stats */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays className="text-primary h-5 w-5" />
              <span className="font-medium text-foreground">
                {sameDay
                  ? format(event.startDate, "EEEE, MMMM d, yyyy")
                  : `${format(event.startDate, "MMM d")} – ${format(event.endDate, "MMM d, yyyy")}`}
              </span>
            </div>
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="text-primary h-5 w-5" />
                <span className="font-medium text-foreground">{event.location}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="px-6 py-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-gray-200 flex items-center justify-center">
            <div className="text-center text-muted">
              <div className="text-5xl mb-4">📷</div>
              <p>Event Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Event Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Event Overview</h2>
              <div className="prose prose-lg text-muted leading-relaxed max-w-none">
                <p>
                  {event.description || "Join us for an incredible ministry event designed to inspire, connect, and transform. This gathering brings together passionate individuals ready to grow spiritually and build meaningful connections."}
                </p>
              </div>
            </div>

            {/* Event Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Event Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-gray-200 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-2">Date</p>
                      <p className="text-lg font-medium text-foreground">
                        {sameDay
                          ? format(event.startDate, "EEEE, MMMM d, yyyy")
                          : `${format(event.startDate, "MMMM d")} – ${format(event.endDate, "MMMM d, yyyy")}`}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border border-gray-200 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-2">Time</p>
                      <p className="text-lg font-medium text-foreground">
                        {format(event.startDate, "h:mm a")}
                        {sameDay && ` – ${format(event.endDate, "h:mm a")}`}
                      </p>
                    </div>
                  </div>
                </div>

                {event.location && (
                  <div className="p-6 rounded-lg border border-gray-200 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-2">Location</p>
                        <p className="text-lg font-medium text-foreground">{event.location}</p>
                      </div>
                    </div>
                  </div>
                )}

                {event.capacity && (
                  <div className="p-6 rounded-lg border border-gray-200 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-3">
                      <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-2">Capacity</p>
                        <p className="text-lg font-medium text-foreground">{event.capacity} spots available</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">What&apos;s Included</h2>
              <div className="space-y-3">
                {[
                  "Full day of inspiring sessions and worship",
                  "Access to all workshops and breakout sessions",
                  "Lunch and refreshments included",
                  "Networking opportunities with ministry leaders",
                  "Digital resources and materials sent post-event",
                  "Certificate of attendance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Questions?</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-foreground mb-2">Who can attend?</h3>
                  <p className="text-muted">Anyone interested in this ministry event is welcome to join us. No prior experience necessary.</p>
                </div>
                <div className="p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-foreground mb-2">What should I bring?</h3>
                  <p className="text-muted">Bring a notepad, comfortable clothing, and an open heart. We&apos;ll provide all materials and refreshments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Sticky Registration Card */}
          <div className="md:col-span-1">
            <div className="sticky top-24 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-foreground mb-2">Register Now</h3>
                <p className="text-sm text-muted">Secure your spot for this incredible event</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Price Section */}
                {event.price ? (
                  <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-2">Registration Price</p>
                    <p className="text-4xl font-bold text-foreground">
                      ${event.price.toString()}
                    </p>
                    <p className="text-xs text-muted mt-2">One-time payment</p>
                  </div>
                ) : (
                  <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                    <p className="text-xs text-green-600 uppercase tracking-widest font-semibold mb-2">Registration</p>
                    <p className="text-3xl font-bold text-green-700">FREE</p>
                  </div>
                )}

                {/* Remaining Spots */}
                {event.capacity && (
                  <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm font-medium text-primary">✨ {event.capacity} spots remaining</p>
                  </div>
                )}

                {/* Registration Button */}
                <button className="btn-primary w-full py-4 text-lg font-semibold rounded-lg transition-all">
                  Register Now
                </button>

                {/* Secondary CTA */}
                <button className="btn-outline w-full py-3 font-semibold rounded-lg">
                  Share This Event
                </button>

                {/* Trust Indicators */}
                <div className="space-y-3 text-sm text-muted text-center pt-4 border-t border-gray-200">
                  <p>✓ Instant confirmation email</p>
                  <p>✓ Secure payment processing</p>
                  <p>✓ 24-hour cancellation policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Host Info */}
      <section className="px-6 py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-6xl">
          <div className="p-8 rounded-xl border border-gray-200 bg-white">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Hosted By</h3>
            <h2 className="text-3xl font-bold text-foreground">{event.church.name}</h2>
            <p className="text-muted mt-2">Trusted by thousands of attendees for quality ministry events</p>
          </div>
        </div>
      </section>
    </>
  );
}
