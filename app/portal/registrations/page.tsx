import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { formatPhone } from "@/lib/format-phone";

export default async function RegistrationsPage() {
  const registrations = await prisma.registration.findMany({
    orderBy: { createdAt: "desc" },
    include: { event: { select: { title: true } } },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">All Registrations</h1>

      {registrations.length === 0 ? (
        <p className="text-gray-500">No registrations yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Email</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Phone</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Event</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Registered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {registrations.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">{r.firstName} {r.lastName}</td>
                  <td className="px-4 py-3 text-gray-600">{r.email}</td>
                  <td className="px-4 py-3 text-gray-600">{formatPhone(r.phone)}</td>
                  <td className="px-4 py-3 text-gray-600">{r.event.title}</td>
                  <td className="px-4 py-3 text-gray-500">{format(r.createdAt, "MMM d, yyyy")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
