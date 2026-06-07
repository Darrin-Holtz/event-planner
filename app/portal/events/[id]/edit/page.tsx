import { updateEvent } from "@/actions/events";
import EventStatusSelect from "@/components/ui/event-status-select";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";

interface EditEventPageProps {
    params: Promise<{ id: string }>;
}

function toDatetimeLocal(date: Date) {
    return format(date, "yyyy-MM-dd'T'HH:mm");
}

export default async function EditEventPage({ params }: EditEventPageProps) {
    const { id } = await params;

    const event = await prisma.event.findUnique({ where: { id } });
    if (!event) notFound();

    const updateEventWithId = updateEvent.bind(null, id);

    return (
        <div className="max-w-2xl">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Edit Event</h1>
                <Link
                    href={`/portal/events/${id}`}
                    className="text-sm text-gray-500 hover:text-gray-900"
                >
                    ← Cancel
                </Link>
            </div>

            <form action={updateEventWithId} className="space-y-4">
                <input
                    name="title"
                    type="text"
                    defaultValue={event.title}
                    placeholder="Event Title"
                    className="w-full rounded border border-gray-300 p-3"
                    required
                />
                <input
                    name="slug"
                    type="text"
                    defaultValue={event.slug}
                    placeholder="event-slug"
                    className="w-full rounded border border-gray-300 p-3"
                    required
                />
                <input
                    name="location"
                    type="text"
                    defaultValue={event.location ?? ""}
                    placeholder="Event Location"
                    className="w-full rounded border border-gray-300 p-3"
                />
                <input
                    name="capacity"
                    type="number"
                    defaultValue={event.capacity ?? ""}
                    placeholder="Event Capacity"
                    className="w-full rounded border border-gray-300 p-3"
                />
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Start Date &amp; Time</label>
                    <input
                        type="datetime-local"
                        name="startDate"
                        defaultValue={toDatetimeLocal(event.startDate)}
                        required
                        className="w-full rounded border border-gray-300 p-3"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">End Date &amp; Time</label>
                    <input
                        type="datetime-local"
                        name="endDate"
                        defaultValue={toDatetimeLocal(event.endDate)}
                        required
                        className="w-full rounded border border-gray-300 p-3"
                    />
                </div>
                <textarea
                    name="description"
                    defaultValue={event.description ?? ""}
                    placeholder="Event Description"
                    className="w-full rounded border border-gray-300 p-3"
                    rows={4}
                />
                <EventStatusSelect defaultValue={event.status} />
                <button
                    type="submit"
                    className="rounded bg-black py-2 px-4 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}
