"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const church = await prisma.church.findFirst();

  if (!church) {
    throw new Error("Church not found");
  }

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;

  const description =
    (formData.get("description") as string) || null;

  const location =
    (formData.get("location") as string) || null;

  const startDate = new Date(
    formData.get("startDate") as string
  );

  const endDate = new Date(
    formData.get("endDate") as string
  );

  const capacity = formData.get("capacity")
    ? Number(formData.get("capacity"))
    : null;

  await prisma.event.create({
    data: {
      churchId: church.id,
      title,
      slug,
      description,
      location,
      startDate,
      endDate,
      capacity,
    },
  });

  redirect("/portal/events");
}