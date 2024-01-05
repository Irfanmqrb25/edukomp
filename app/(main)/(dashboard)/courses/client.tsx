"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

import CourseCard from "../_components/card/course-card";
import { PaginationButton } from "../_components/pagination-button";

import { Course, User } from "@prisma/client";

interface CoursePageClientProps {
  courses: Course[] & {
    users: User[];
  };
  user: User;
  pageCount: number;
}

const CoursePageClient = ({
  courses,
  user,
  pageCount,
}: CoursePageClientProps) => {
  const searchParams = useSearchParams();

  // Search params
  const page = searchParams?.get("page") ?? "1";
  const per_page = searchParams?.get("per_page") ?? "8";

  // Create query string
  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course as any}
            user={user as any}
          />
        ))}
      </div>
      {courses.length ? (
        <PaginationButton
          pageCount={pageCount}
          page={page}
          per_page={per_page}
          createQueryString={createQueryString}
        />
      ) : null}
    </div>
  );
};

export default CoursePageClient;
