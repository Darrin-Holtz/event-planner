import { registerForEvent } from "@/actions/registrations";

export default function EventRegistrationForm({
  eventId,
}: {
  eventId: string;
}) {
  return (
    <form action={registerForEvent} className="space-y-3">
      <input type="hidden" name="eventId" value={eventId} />

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">First Name</label>
          <input
            name="firstName"
            placeholder="Jane"
            required
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Last Name</label>
          <input
            name="lastName"
            placeholder="Doe"
            required
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600">Email</label>
        <input
          name="email"
          type="email"
          placeholder="jane@example.com"
          required
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600">Phone <span className="text-gray-400">(optional)</span></label>
        <input
          name="phone"
          type="tel"
          placeholder="(555) 000-0000"
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Register Now
      </button>
    </form>
  );
}