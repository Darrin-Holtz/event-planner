"use client";

interface DeleteEventButtonProps {
    action: () => Promise<never>;
    variant?: "button" | "link";
}

export default function DeleteEventButton({ action, variant = "link" }: DeleteEventButtonProps) {
    return (
        <form action={action}>
            <button
                type="submit"
                onClick={(e) => {
                    if (!confirm("Are you sure you want to delete this event?")) {
                        e.preventDefault();
                    }
                }}
                className={
                    variant === "button"
                        ? "rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                        : "font-medium text-red-600 hover:text-red-800"
                }
            >
                Delete
            </button>
        </form>
    );
}
