export function getPageTitle(pathname: string) {
    const titles: Record<string, string> = {
        "/portal": "Dashboard",
        "/portal/events": "Events",
        "/portal/registrations": "Registrations",
        "/portal/payments": "Payments",
        "/portal/settings": "Settings",
    };
    return titles[pathname] || "Portal";
}