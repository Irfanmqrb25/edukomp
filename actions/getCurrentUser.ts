import { getServerSession } from "next-auth";
import db from "@/lib/db";

async function getSession() {
  const session = await getServerSession();
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  return session;
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }

    const user = await db.user.findUnique({
      where: {
        email: session.user.email as string,
      },
      include: {
        enrollments: true,
      },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
    };
  } catch (error) {
    return null;
  }
}
