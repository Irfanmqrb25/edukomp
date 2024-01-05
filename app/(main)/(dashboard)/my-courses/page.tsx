import Wrapper from "../_components/wrapper";
import CourseCard from "../_components/card/course-card";

import db from "@/lib/db";
import getCurrentUser from "@/actions/getCurrentUser";

const MyCoursesPage = async () => {
  const user = await getCurrentUser();

  const myCourses = await db.course.findMany({
    where: {
      enrollments: {
        some: {
          userId: user?.id,
        },
      },
    },
    include: {
      enrollments: true,
    },
  });

  return (
    <Wrapper>
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Enrolled Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {myCourses.map((course) => (
            <CourseCard key={course.id} course={course as any} user={user!} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MyCoursesPage;
