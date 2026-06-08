"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function registerForEvent(
  formData: FormData
) {
  const eventId = formData.get("eventId") as string;

  const event = await prisma.event.findUnique({
    where: { id: eventId },
    select: { capacity: true },
  });

  if (event?.capacity !== null && event?.capacity !== undefined) {
    const count = await prisma.registration.count({
      where: { eventId },
    });

    if (count >= event.capacity) {
      throw new Error("Event is full");
    }
  }

  await prisma.registration.create({
    data: {
      eventId,

      firstName:
        formData.get("firstName") as string,

      lastName:
        formData.get("lastName") as string,

      email:
        formData.get("email") as string,

      phone:
        (formData.get("phone") as string) || null,
    },
  });

  redirect("/registration-success");
}