const styles: Record<string, string> = {
    DRAFT: "bg-blue-100 text-blue-700",
    PUBLISHED: "bg-green-100 text-green-700",
    CLOSED: "bg-yellow-100 text-yellow-700",
    CANCELLED: "bg-red-100 text-red-700",
};

const labels: Record<string, string> = {
    DRAFT: "Draft",
    PUBLISHED: "Published",
    CLOSED: "Closed",
    CANCELLED: "Cancelled",
};

export default function StatusBadge({ status }: { status: string }) {
    return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status] ?? "bg-gray-100 text-gray-600"}`}>
            {labels[status] ?? status}
        </span>
    );
}
