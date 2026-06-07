import { deleteEvent } from "@/actions/events";
import { prisma } from "@/lib/prisma";
import DeleteEventButton from "@/components/ui/delete-event-button";
import StatusBadge from "@/components/ui/status-badge";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";

interface EventPageProps {
    params: Promise<{ id: string }>;
}

export default async function EventPage({ params }: EventPageProps) {
    const { id } = await params;

    const event = await prisma.event.findUnique({
        where: { id },
        include: { church: true },
    });

    if (!event) notFound();

    return (
        <div className="max-w-2xl space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{event.title}</h1>
                <div className="flex items-center gap-3">
                    <Link
                        href={`/portal/events/${id}/edit`}
                        className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                    >
                        Edit
                    </Link>
                    <DeleteEventButton action={deleteEvent.bind(null, id)} variant="button" />
                    <Link
                        href="/portal/events"
                        className="text-sm text-gray-500 hover:text-gray-900"
                    >
                        ← Back
                    </Link>
                </div>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
                {event.description && (
                    <div>
                        <p className="font-medium text-gray-700 mb-1">Description</p>
                        <p className="text-gray-600 whitespace-pre-wrap">{event.description}</p>
                    </div>
                )}

                <div className="grid gap-3 sm:grid-cols-2 text-sm">
                    <div>
                        <p className="font-medium text-gray-700">Status</p>
                        <div className="mt-1"><StatusBadge status={event.status} /></div>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700">Start</p>
                        <p className="text-gray-500">{format(event.startDate, "PPP p")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700">End</p>
                        <p className="text-gray-500">{format(event.endDate, "PPP p")}</p>
                    </div>
                    {event.location && (
                        <div>
                            <p className="font-medium text-gray-700">Location</p>
                            <p className="text-gray-500">{event.location}</p>
                        </div>
                    )}
                    <div>
                        <p className="font-medium text-gray-700">Capacity</p>
                        <p className="text-gray-500">{event.capacity ?? "Unlimited"}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700">Church</p>
                        <p className="text-gray-500">{event.church.name}</p>
                    </div>
                    {event.price && (
                        <div>
                            <p className="font-medium text-gray-700">Price</p>
                            <p className="text-gray-500">${event.price.toString()}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
