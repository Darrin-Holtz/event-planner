import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({
  adapter,
  errorFormat: "pretty",
});

async function main() {
  console.log("Starting database seed...");

  // First, create or get the church
  let church = await prisma.church.findFirst();

  if (!church) {
    console.log("Creating Grace Church...");
    church = await prisma.church.create({
      data: {
        name: "Grace Church",
        slug: "grace-church",
        description: "A vibrant community of faith dedicated to spiritual growth and ministry.",
      },
    });
  }

  console.log(`Using church: ${church.name}`);

  // Clear existing events
  await prisma.event.deleteMany({});

  // Create events
  const events = [
    {
      title: "Spring Retreat 2024",
      slug: "spring-retreat-2024",
      description:
        "Join us for an inspiring weekend retreat focused on spiritual growth, community building, and personal transformation. This three-day event brings together ministry leaders from across the region for keynote sessions, interactive workshops, networking opportunities, and powerful worship experiences.",
      location: "Mountain View Conference Center, Asheville, NC",
      startDate: new Date(2024, 3, 15),
      endDate: new Date(2024, 3, 17),
      capacity: 100,
      price: 149,
      status: "PUBLISHED",
    },
    {
      title: "Youth Conference",
      slug: "youth-conference",
      description: "Empowering the next generation with faith, purpose, and community connection.",
      location: "Downtown Convention Center",
      startDate: new Date(2024, 5, 20),
      endDate: new Date(2024, 5, 22),
      capacity: 250,
      price: 99,
      status: "PUBLISHED",
    },
    {
      title: "Leadership Workshop",
      slug: "leadership-workshop",
      description: "Learn modern leadership principles for effective ministry management.",
      location: "Online",
      startDate: new Date(2024, 6, 10),
      endDate: new Date(2024, 6, 10),
      capacity: 50,
      price: 0,
      status: "PUBLISHED",
    },
    {
      title: "Family Camp",
      slug: "family-camp",
      description: "A fun-filled weekend for the whole family with activities, worship, and fellowship.",
      location: "Pine Ridge Camp Ground",
      startDate: new Date(2024, 7, 5),
      endDate: new Date(2024, 7, 9),
      capacity: 200,
      price: 399,
      status: "PUBLISHED",
    },
    {
      title: "Worship Workshop",
      slug: "worship-workshop",
      description: "Deepen your worship experience with advanced techniques and modern praise.",
      location: "Music Hall",
      startDate: new Date(2024, 8, 12),
      endDate: new Date(2024, 8, 12),
      capacity: 75,
      price: 0,
      status: "PUBLISHED",
    },
  ];

  for (const event of events) {
    const created = await prisma.event.create({
      data: {
        ...event,
        churchId: church.id,
      },
    });
    console.log(`Created event: ${created.title}`);
  }

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
