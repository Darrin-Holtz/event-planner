import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const church = await prisma.church.upsert({
            where: { slug: "first-church" },
            update: {},
            create: {
                name: "First Church",
                slug: "first-church",
            },
        });

        const event = await prisma.event.upsert({
            where: { slug: "mens-retreat-2026" },
            update: {},
            create: {
                churchId: church.id,
                title: "Men's Retreat 2026",
                slug: "mens-retreat-2026",
                description: "Join us for a weekend of fellowship, fun, and spiritual growth at our annual Men's Retreat.",
                location: "Mountain View Conference Center",
                startDate: new Date("2026-09-18"),
                endDate: new Date("2026-09-20"),
                capacity: 150,
            },
        });

        return NextResponse.json({ church, event });
    } catch (error) {
        console.error("[SEED ERROR]", error);
        return NextResponse.json(
            { error: String(error) },
            { status: 500 }
        );
    }
}