import { Suspense } from "react";
import { unstable_cache as cache } from "next/cache";
import { unstable_noStore as noStore } from "next/cache";

import CoursePageClient from "./client";
import Wrapper from "../_components/wrapper";

import db from "@/lib/db";
import { Course } from "@prisma/client";
import getCurrentUser from "@/actions/getCurrentUser";
import { coursesSearchParamsSchema } from "@/lib/validation/course";
import { getCourses } from "@/lib/fetcher/course";

interface CoursePageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const CoursePage = async ({ searchParams }: CoursePageProps) => {
  const user = await getCurrentUser();

  const { page, per_page, sort, category, price_range } =
    coursesSearchParamsSchema.parse(searchParams);

  // Courses transaction
  const pageAsNumber = Number(page);
  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 1 ? 1 : pageAsNumber;
  const perPageAsNumber = Number(per_page);
  // Number of items per page
  const limit = isNaN(perPageAsNumber) ? 10 : perPageAsNumber;
  // Number of items to skip
  const offset = fallbackPage > 0 ? (fallbackPage - 1) * limit : 0;

  noStore();
  const coursesTransaction = await getCourses({
    limit,
    offset,
    sort,
    category,
    price_range,
  });

  const pageCount = Math.ceil(coursesTransaction?.count / limit);

  return (
    <Wrapper>
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Courses List
        </h2>
        <CoursePageClient
          courses={coursesTransaction.items as any}
          user={user!}
          pageCount={pageCount}
        />
      </div>
    </Wrapper>
  );
};

export default CoursePage;
