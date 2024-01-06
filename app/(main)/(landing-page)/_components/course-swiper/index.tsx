import Swiper from "./swiper";
import Container from "../container";

import db from "@/lib/db";

const RecommendedCourse = async () => {
  const courses = await db.course.findMany();

  return (
    <div className="flex flex-col gap-y-8 bg-brand/10 mt-20">
      <Container className="pt-10 lg:pt-20 lg:pb-20 pb-6 space-y-8">
        <div className="space-y-2">
          <h2 className="font-bold text-3xl">Our Best Course</h2>
          <p className="lg:w-1/2 font-medium text-muted-foreground">
            Providing high-quality learning experiences to help you master the
            skills and knowledge required in today&apos;s industries. Join us
            and enhance your abilities to achieve career success and fulfill
            your personal goals.
          </p>
        </div>
        <Swiper courses={courses} />
      </Container>
    </div>
  );
};

export default RecommendedCourse;
