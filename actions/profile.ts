"use server";

import { revalidatePath } from "next/cache";

import db from "@/lib/db";
import bcrypt from "bcrypt";
import getCurrentUser from "./getCurrentUser";

export async function updateProfile(userId: string, data: any) {
  await db.user.update({
    where: {
      id: userId,
    },
    data: data,
  });

  revalidatePath("/courses");
}

export async function changePassword(data: any) {
  const user = await getCurrentUser();

  const isPasswordMatch = await bcrypt.compare(
    data.currentPassword,
    user?.hashedPassword as string
  );

  if (!isPasswordMatch) {
    return new Error("Invalid password");
  }

  const hashedPassword = await bcrypt.hash(data.newPassword, 10);

  await db.user.update({
    where: {
      id: user?.id,
    },
    data: {
      hashedPassword: hashedPassword,
    },
  });
}
