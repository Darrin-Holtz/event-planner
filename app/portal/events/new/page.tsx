import DatePicker from "@/components/ui/date-picker";

export default function NewEventPage() {
    return (
        <div className="max-w-2xl">
            <h1 className="mb-6 text-3xl font-bold">
                Create New Event
            </h1>
            <form className="space-y-4">
                <input 
                    name="title"
                    type="text"
                    placeholder="Event Title"
                    className="w-full rounded border border-gray-300 p-3"
                    required
                />
                <input 
                    name="slug"
                    type="text"
                    placeholder="event-slug"
                    className="w-full rounded border border-gray-300 p-3"
                    required
                />
                <input 
                    name="location"
                    type="text"
                    placeholder="Event Location"
                    className="w-full rounded border border-gray-300 p-3"
                />
                <input
                    name="capacity"
                    type="number"
                    placeholder="Event Capacity"
                    className="w-full rounded border border-gray-300 p-3"
                />
                <DatePicker
                    name="startDate"
                    placeholder="Event Start Date"
                    required
                />
                <DatePicker
                    name="endDate"
                    placeholder="Event End Date"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Event Description"
                    className="w-full rounded border border-gray-300 p-3"
                    rows={4}
                />
                <button
                    type="submit"
                    className="rounded bg-black py-2 px-4 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                    Create Event
                </button>
            </form>
        </div>
    );
}