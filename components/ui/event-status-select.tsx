interface EventStatusSelectProps {
    defaultValue?: string;
}

const statuses = [
    { value: "DRAFT", label: "Draft" },
    { value: "PUBLISHED", label: "Published" },
    { value: "CLOSED", label: "Closed" },
    { value: "CANCELLED", label: "Cancelled" },
];

export default function EventStatusSelect({ defaultValue = "DRAFT" }: EventStatusSelectProps) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <select
                name="status"
                defaultValue={defaultValue}
                className="w-full rounded border border-gray-300 p-3 bg-white"
            >
                {statuses.map((s) => (
                    <option key={s.value} value={s.value}>
                        {s.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
