import { unstable_noStore as noStore } from "next/cache";

import * as z from "zod";
import { getCourseSchema, getCoursesSchema } from "../validation/course";
import { Course } from "@prisma/client";
import db from "../db";

export async function getCourses(rawInput: z.infer<typeof getCoursesSchema>) {
  noStore();
  try {
    const input = getCoursesSchema.parse(rawInput);
    const [column, order] = (input.sort?.split(".") as [
      keyof Course | undefined,
      "asc" | "desc" | undefined
    ]) ?? ["createdAt", "desc"];
    const [minPrice, maxPrice] = input.price_range?.split("-") ?? [];
    const categories =
      (input.categories?.split(".") as Course["category"][]) ?? [];

    const { items, count } = await db.$transaction(async (tx) => {
      const items = await db.course.findMany({
        take: input.limit,
        skip: input.offset,
        where: {
          category: categories.length > 0 ? { in: categories } : undefined,
          price: {
            gte: minPrice ? Number(minPrice) : undefined,
            lte: maxPrice ? Number(maxPrice) : undefined,
          },
        },
        select: {
          id: true,
          title: true,
          description: true,
          imageUrl: true,
          duration: true,
          difficulty: true,
          isPremium: true,
          category: true,
          price: true,
          mentor: true,
          createdAt: true,
          updatedAt: true,
          users: true,
        },
        orderBy: {
          [column ?? "createdAt"]: order ?? "desc",
        },
      });

      const count = await tx.course.count({
        where: {
          category: categories.length > 0 ? { in: categories } : undefined,
          price: {
            gte: minPrice ? Number(minPrice) : undefined,
            lte: maxPrice ? Number(maxPrice) : undefined,
          },
        },
      });

      return {
        items,
        count,
      };
    });

    return {
      items,
      count,
    };
  } catch (err) {
    console.error(err);
    throw err instanceof Error
      ? err.message
      : err instanceof z.ZodError
      ? err.issues.map((issue) => issue.message).join("\n")
      : new Error("Unknown error.");
  }
}
