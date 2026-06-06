import DashboardCard from "@/components/ui/dashboard-card";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { startDate: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Events
        </h1>
        <Link
          href="/portal/events/new"
          className="rounded-lg bg-gray-400 py-2 px-4 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Create New Event
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {events.map((event) => (
          <DashboardCard
            title={event.title} 
            key={event.id}
          >
            <div className="space-y-1 text-gray-500">
              <p>
                {event.location}
              </p>
              <p>
                Capacity:{" "}
                {event.capacity ?? "Unlimited"}
              </p>
            </div>
            
          </DashboardCard>
        ))}
      </div>
    </div>
    
  );
}
