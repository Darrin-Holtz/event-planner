import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { CalendarDays, Clock, MapPin, Users, ChevronLeft } from "lucide-react";
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/events"
            className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> Back to Events
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
            {event.church.name}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {event.title}
          </h1>
          {event.description && (
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              {event.description}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Details sidebar */}
          <div className="order-first lg:order-last">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-5">
              <h2 className="text-base font-semibold text-gray-900">Event Details</h2>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-3">
                  <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {sameDay
                        ? format(event.startDate, "EEEE, MMMM d, yyyy")
                        : `${format(event.startDate, "MMM d")} – ${format(event.endDate, "MMM d, yyyy")}`}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {format(event.startDate, "h:mm a")}
                      {sameDay && ` – ${format(event.endDate, "h:mm a")}`}
                    </p>
                  </div>
                </div>

                {event.location && (
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                    <div>
                      <p className="font-medium text-gray-900">{event.location}</p>
                    </div>
                  </div>
                )}

                {event.capacity && (
                  <div className="flex gap-3">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {event.capacity} spots available
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {event.price ? (
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Registration</p>
                  <p className="mt-1 text-3xl font-bold text-slate-900">
                    ${event.price.toString()}
                  </p>
                </div>
              ) : (
                <div className="rounded-xl bg-green-50 p-4 text-center">
                  <p className="text-xs text-green-600 uppercase tracking-wider font-medium">Registration</p>
                  <p className="mt-1 text-2xl font-bold text-green-700">Free</p>
                </div>
              )}

              <button className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Register Now
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">About This Event</h2>
              {event.description ? (
                <p className="mt-3 leading-relaxed text-gray-600 whitespace-pre-wrap">
                  {event.description}
                </p>
              ) : (
                <p className="mt-3 text-gray-400 italic">No description provided.</p>
              )}
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Hosted by
              </h3>
              <p className="mt-2 text-xl font-bold text-gray-900">{event.church.name}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
