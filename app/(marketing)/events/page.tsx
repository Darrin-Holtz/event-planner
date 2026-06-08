import { format } from "date-fns";
import { CalendarDays, MapPin, Users, Search } from "lucide-react";
import Link from "next/link";

// Demo events for when database is not available
const DEMO_EVENTS = [
  {
    id: "1",
    title: "Spring Retreat 2024",
    slug: "spring-retreat-2024",
    description: "Join us for an inspiring weekend retreat focused on spiritual growth and community building.",
    location: "Mountain View Conference Center",
    startDate: new Date(2024, 3, 15),
    endDate: new Date(2024, 3, 17),
    capacity: 100,
    price: 149,
    status: "PUBLISHED",
    church: { id: "1", name: "Grace Church", slug: "grace-church" },
  },
  {
    id: "2",
    title: "Youth Conference",
    slug: "youth-conference",
    description: "Empowering the next generation with faith, purpose, and community connection.",
    location: "Downtown Convention Center",
    startDate: new Date(2024, 5, 20),
    endDate: new Date(2024, 5, 22),
    capacity: 250,
    price: 99,
    status: "PUBLISHED",
    church: { id: "1", name: "Grace Church", slug: "grace-church" },
  },
  {
    id: "3",
    title: "Leadership Workshop",
    slug: "leadership-workshop",
    description: "Learn modern leadership principles for effective ministry management.",
    location: "Online",
    startDate: new Date(2024, 6, 10),
    endDate: new Date(2024, 6, 10),
    capacity: 50,
    price: 0,
    status: "PUBLISHED",
    church: { id: "1", name: "Grace Church", slug: "grace-church" },
  },
  {
    id: "4",
    title: "Family Camp",
    slug: "family-camp",
    description: "A fun-filled weekend for the whole family with activities, worship, and fellowship.",
    location: "Pine Ridge Camp Ground",
    startDate: new Date(2024, 7, 5),
    endDate: new Date(2024, 7, 9),
    capacity: 200,
    price: 399,
    status: "PUBLISHED",
    church: { id: "1", name: "Grace Church", slug: "grace-church" },
  },
  {
    id: "5",
    title: "Worship Workshop",
    slug: "worship-workshop",
    description: "Deepen your worship experience with advanced techniques and modern praise.",
    location: "Music Hall",
    startDate: new Date(2024, 8, 12),
    endDate: new Date(2024, 8, 12),
    capacity: 75,
    price: 0,
    status: "PUBLISHED",
    church: { id: "1", name: "Grace Church", slug: "grace-church" },
  },
];

export default async function PublicEventsPage() {
  let events = DEMO_EVENTS;
  
  try {
    const { prisma } = await import("@/lib/prisma");
    const dbEvents = await prisma.event.findMany({
      where: { status: "PUBLISHED" },
      include: { church: true },
      orderBy: { startDate: "asc" },
    });
    if (dbEvents.length > 0) {
      events = dbEvents;
    }
  } catch (error) {
    // Silently fall back to demo events if database is unavailable
  }

  // Categorize events
  const categorizedEvents = {
    retreats: events.filter(e => e.title.toLowerCase().includes('retreat')),
    conferences: events.filter(e => e.title.toLowerCase().includes('conference')),
    camps: events.filter(e => e.title.toLowerCase().includes('camp')),
    workshops: events.filter(e => e.title.toLowerCase().includes('workshop')),
    other: events.filter(e => 
      !e.title.toLowerCase().includes('retreat') &&
      !e.title.toLowerCase().includes('conference') &&
      !e.title.toLowerCase().includes('camp') &&
      !e.title.toLowerCase().includes('workshop')
    ),
  };

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Discover Ministry Events
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Browse and register for upcoming retreats, conferences, camps, and gatherings in your community
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition">
            <Search size={20} className="text-muted flex-shrink-0" />
            <input
              type="text"
              placeholder="Search by event name or location..."
              className="flex-1 bg-transparent outline-none text-foreground placeholder-muted"
            />
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {events.length > 0 && (
        <section className="px-6 py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Event</h2>
            <Link
              href={`/events/${events[0].slug}`}
              className="group flex flex-col md:flex-row gap-6 rounded-xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
                  {events[0].church.name}
                </p>
                <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {events[0].title}
                </h3>
                <p className="text-lg text-muted mb-6 line-clamp-3">
                  {events[0].description}
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} className="text-primary flex-shrink-0" />
                    <span>{format(events[0].startDate, "EEEE, MMMM d")}</span>
                  </div>
                  {events[0].location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary flex-shrink-0" />
                      <span>{events[0].location}</span>
                    </div>
                  )}
                  {events[0].capacity && (
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-primary flex-shrink-0" />
                      <span>{events[0].capacity} spots available</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center md:min-w-48">
                <div className="inline-block px-6 py-3 rounded-lg bg-primary text-white font-semibold group-hover:bg-primary/90 transition-all">
                  View Details →
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Events by Category */}
      <section className="px-6 py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl">
          {events.length === 0 ? (
            <div className="py-24 text-center">
              <CalendarDays className="mx-auto mb-4 h-12 w-12 text-gray-400" />
              <p className="text-lg font-medium text-foreground">No upcoming events right now.</p>
              <p className="mt-1 text-muted">Check back soon for new opportunities to grow together.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Retreats */}
              {categorizedEvents.retreats.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-8">Retreats</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorizedEvents.retreats.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              )}

              {/* Conferences */}
              {categorizedEvents.conferences.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-8">Conferences</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorizedEvents.conferences.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              )}

              {/* Camps */}
              {categorizedEvents.camps.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-8">Camps</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorizedEvents.camps.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              )}

              {/* Workshops */}
              {categorizedEvents.workshops.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-8">Workshops</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorizedEvents.workshops.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              )}

              {/* Other Events */}
              {categorizedEvents.other.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming Events</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorizedEvents.other.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// Event Card Component
function EventCard({ event }: any) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-primary/30 transition-all overflow-hidden"
    >
      {/* Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary group-hover:shadow-lg transition-all" />

      <div className="flex flex-1 flex-col p-6">
        {/* Church Badge */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
          {event.church.name}
        </p>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
          {event.title}
        </h3>

        {/* Description */}
        {event.description && (
          <p className="flex-1 text-sm text-muted line-clamp-2 mb-4">
            {event.description}
          </p>
        )}

        {/* Meta Information */}
        <div className="space-y-2 border-t border-gray-100 pt-4 text-sm text-muted">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary flex-shrink-0" />
            <span>{format(new Date(event.startDate), "MMM d, yyyy")}</span>
          </div>
          {event.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          )}
          {event.capacity && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{event.capacity} spots</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-4">
          <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm group-hover:bg-primary group-hover:text-white transition-all">
            Register Now →
          </span>
        </div>
      </div>
    </Link>
  );
}
