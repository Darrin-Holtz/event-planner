import { deleteEvent } from "@/actions/events";
import DeleteEventButton from "@/components/ui/delete-event-button";
import StatusBadge from "@/components/ui/status-badge";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import Link from "next/link";

export default async function EventsPage() {
  const events: any[] = [];
  
  try {
    const dbEvents = await prisma.event.findMany({
      orderBy: { startDate: "asc" },
    });
    events.push(...dbEvents);
  } catch (error) {
    console.error("[v0] Failed to fetch events from database:", error);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Events</h1>
        <Link
          href="/portal/events/new"
          className="rounded-lg bg-black py-2 px-4 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Create New Event
        </Link>
      </div>

      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b bg-slate-800 text-left text-slate-200 font-medium">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Start Date</th>
              <th className="px-4 py-3">Capacity</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {events.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                  No events yet. Create your first event.
                </td>
              </tr>
            )}
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  {event.title}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={event.status} />
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {event.location ?? "—"}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {format(event.startDate, "MMM d, yyyy")}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {event.capacity ?? "Unlimited"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/portal/events/${event.id}`}
                      className="text-gray-600 hover:text-gray-900 font-medium"
                    >
                      View
                    </Link>
                    <Link
                      href={`/portal/events/${event.id}/edit`}
                      className="text-gray-600 hover:text-gray-900 font-medium"
                    >
                      Edit
                    </Link>
                    <DeleteEventButton action={deleteEvent.bind(null, event.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
