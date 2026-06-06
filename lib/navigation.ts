import {CalendarDays, CreditCard, LayoutDashboard, Settings, Users} from "lucide-react"

export const portalNavigation = [
    {
        name: "Dashboard",
        href: "/portal",
        icon: LayoutDashboard
    },
    {
        name: "Events",
        href: "/portal/events",
        icon: CalendarDays,
    },
    {
        name: "Registrations",
        href: "/portal/registrations",
        icon: Users,
    },
    {
        name: "Payments",
        href: "/portal/payments",
        icon: CreditCard,
    },
    {
        name: "Settings",
        href: "/portal/settings",
        icon: Settings,
    },
];
