import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { formatPhone } from "@/lib/format-phone";

interface RegistrationsPageProps {
  params: Promise<{ id: string }>;
}

export default async function RegistrationsPage({ params }: RegistrationsPageProps) {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: { id },
    include: {
      registrations: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!event) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Registrations — {event.title}</h1>

      {event.registrations.length === 0 ? (
        <p className="text-gray-500">No registrations yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Email</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {event.registrations.map((registration) => (
                <tr key={registration.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">
                    {registration.firstName} {registration.lastName}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{registration.email}</td>
                  <td className="px-4 py-3 text-gray-600">{formatPhone(registration.phone)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
