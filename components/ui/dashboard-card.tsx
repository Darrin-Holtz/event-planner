import { ReactNode } from "react";

interface DashboardCardProps{
    title: string;
    children: React.ReactNode;
}

export default function DashboardCard({
    title,
    children,
}: DashboardCardProps) {
    return (
        <div className="rounded -xl border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-sm font-medium text-gray-800">
                {title}
            </h3>
            {children}
        </div>
    );
}