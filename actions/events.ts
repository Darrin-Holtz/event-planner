"use server";

import { prisma } from "@/lib/prisma";
import { EventStatus } from "@/lib/generated/prisma/client";
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

  const status = (formData.get("status") as EventStatus) ?? EventStatus.DRAFT;

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
      status,
    },
  });

  redirect("/portal/events");
}

export async function updateEvent(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = (formData.get("description") as string) || null;
  const location = (formData.get("location") as string) || null;
  const startDate = new Date(formData.get("startDate") as string);
  const endDate = new Date(formData.get("endDate") as string);
  const capacity = formData.get("capacity")
    ? Number(formData.get("capacity"))
    : null;

  const status = (formData.get("status") as EventStatus) ?? EventStatus.DRAFT;

  await prisma.event.update({
    where: { id },
    data: { title, slug, description, location, startDate, endDate, capacity, status },
  });

  redirect(`/portal/events/${id}`);
}

export async function deleteEvent(id: string) {
  await prisma.event.delete({ where: { id } });
  redirect("/portal/events");
}