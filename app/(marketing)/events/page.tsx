import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { CalendarDays, MapPin, Users } from "lucide-react";
import Link from "next/link";

export default async function PublicEventsPage() {
  const events = await prisma.event.findMany({
    where: { status: "PUBLISHED" },
    include: {
      church: true,
      _count: { select: { registrations: true } },
    },
    orderBy: { startDate: "asc" },
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
            Upcoming Events
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Gather. Worship. Grow.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Browse events from churches and ministries in your community.
          </p>
        </div>
      </section>

      {/* Events grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {events.length === 0 ? (
          <div className="py-24 text-center text-gray-400">
            <CalendarDays className="mx-auto mb-4 h-12 w-12 opacity-30" />
            <p className="text-lg font-medium">No upcoming events right now.</p>
            <p className="mt-1 text-sm">Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                {/* Color accent bar */}
                <div className="h-2 w-full rounded-t-2xl bg-gradient-to-r from-slate-700 to-slate-500" />

                <div className="flex flex-1 flex-col p-6">
                  {/* Church */}
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {event.church.name}
                  </p>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-slate-700 transition-colors">
                    {event.title}
                  </h2>

                  {/* Description */}
                  {event.description && (
                    <p className="mt-2 flex-1 text-sm text-gray-500 line-clamp-2">
                      {event.description}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="mt-5 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 shrink-0 text-slate-400" />
                      <span>{format(event.startDate, "EEEE, MMMM d, yyyy")}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 shrink-0 text-slate-400" />
                      <span>
                        {event._count.registrations} registered
                        {event.capacity ? ` / ${event.capacity} spots` : ""}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-5">
                    <span className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-slate-700">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
