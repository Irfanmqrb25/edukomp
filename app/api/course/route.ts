import { NextResponse } from "next/server";

import db from "@/lib/db";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  const {
    title,
    description,
    imageUrl,
    duration,
    difficulty,
    isPremium,
    category,
    price,
    mentor,
  } = await req.json();

  //   if (user?.role !== "ADMIN") {
  //     return new Response("Unauthorized", { status: 401 });
  //   }

  // if (
  //   !title ||
  //   !description ||
  //   !duration ||
  //   !difficulty ||
  //   !isPremium ||
  //   !category ||
  //   !price ||
  //   !mentor
  // ) {
  //   return NextResponse.json("Missing required fields", { status: 400 });
  // }

  try {
    const course = await db.course.create({
      data: {
        title,
        description,
        imageUrl,
        duration,
        difficulty,
        isPremium,
        category,
        price,
        mentor,
      },
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
