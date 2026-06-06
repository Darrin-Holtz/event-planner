"use client";

import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";

interface DatePickerProps {
    name: string;
    placeholder?: string;
    required?: boolean;
}

export default function DatePicker({ name, placeholder, required }: DatePickerProps) {
    const [selected, setSelected] = useState<Date | undefined>();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative">
            <input
                type="hidden"
                name={name}
                value={selected ? selected.toISOString() : ""}
                required={required}
            />
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between rounded border border-gray-300 p-3 text-left text-sm"
            >
                <span className={selected ? "text-gray-900" : "text-gray-400"}>
                    {selected ? format(selected, "PPP") : (placeholder ?? "Pick a date")}
                </span>
                <CalendarDays className="h-4 w-4 text-gray-400" />
            </button>
            {open && (
                <div className="absolute z-50 mt-1 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={(date) => {
                            setSelected(date);
                            setOpen(false);
                        }}
                        captionLayout="dropdown"
                        classNames={{
                            root: "text-sm text-gray-900",
                            months: "flex flex-col",
                            month: "space-y-3",
                            month_caption: "flex items-center justify-center gap-2 px-1 py-1",
                            caption_label: "hidden",
                            dropdowns: "flex gap-2",
                            dropdown: "rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900",
                            nav: "flex items-center justify-between mb-1",
                            button_previous: "rounded p-1 hover:bg-gray-100 text-gray-600",
                            button_next: "rounded p-1 hover:bg-gray-100 text-gray-600",
                            weeks: "w-full border-collapse",
                            weekdays: "flex",
                            weekday: "w-9 text-center text-xs font-medium text-gray-500 py-1",
                            week: "flex",
                            day: "w-9 h-9 text-center text-sm",
                            day_button: "w-9 h-9 rounded hover:bg-gray-100 text-gray-900",
                            selected: "bg-black! text-white! rounded",
                            today: "font-bold text-black",
                            outside: "text-gray-300",
                            disabled: "text-gray-300 cursor-not-allowed",
                        }}
                    />
                </div>
            )}
        </div>
    );
}
