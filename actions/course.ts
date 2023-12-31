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

  await db.course.update({
    where: {
      id: courseId,
    },
    data: {
      users: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  revalidatePath("/courses");
}

export async function unenrollCourse(courseId: string) {
  const user = await getCurrentUser();

  if (!user) {
    return new Error("Unauthorized");
  }

  await db.course.update({
    where: {
      id: courseId,
    },
    data: {
      users: {
        disconnect: {
          id: user.id,
        },
      },
    },
  });

  revalidatePath("/courses");
}
