"use server";

import { revalidatePath } from "next/cache";
import getCurrentUser from "./getCurrentUser";
import db from "@/lib/db";

export async function enrollCourse(courseId: string) {
  "use server";

  const user = await getCurrentUser();

  if (!user) {
    return new Error("Unauthorized");
  }

  await db.enrollment.create({
    data: {
      userId: user.id,
      courseId,
    },
  });

  revalidatePath("/courses");
}

export async function unenrollCourse(courseId: string) {
  const user = await getCurrentUser();

  if (!user) {
    return new Error("Unauthorized");
  }

  const isOwner = await db.enrollment.findFirst({
    where: {
      userId: user.id,
      courseId,
    },
  });

  if (!isOwner) {
    return new Error("Unauthorized");
  }

  await db.enrollment.deleteMany({
    where: {
      userId: isOwner.userId,
      courseId: isOwner.courseId,
    },
  });

  revalidatePath("/courses");
}
