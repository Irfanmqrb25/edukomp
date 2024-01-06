import Link from "next/link";

import Wrapper from "../_components/wrapper";
import CategoriesCard from "../_components/card/categories-card";
import TopCourseCarousel from "../_components/carousel/top-course-carousel";

import {
  Building2,
  Code2,
  Figma,
  Paintbrush2,
  PercentSquare,
} from "lucide-react";
import db from "@/lib/db";
import { cn } from "@/lib/utils";

const DahsboardPage = async () => {
  const topCourses = await db.course.findMany({
    where: {
      isPremium: true,
    },
    take: 6,
  });

  const freeCourses = await db.course.findMany({
    where: {
      isPremium: false,
    },
    take: 6,
  });

  const categoriesData = [
    {
      name: "Graphics Design",
      imageUrl: "/categories-illustration-design.svg",
      className: "bg-[#F18BA0]",
      icon: <Paintbrush2 size={35} className="md:w-20 md:h-20" />,
    },
    {
      name: "UI/UX Design",
      imageUrl: "/categories-illustration-uiux.svg",
      className: "bg-[#FF7170]",
      icon: <Figma size={35} className="md:w-20 md:h-20" />,
    },
    {
      name: "Business Management",
      imageUrl: "/categories-illustration-business.svg",
      className: "bg-[#9383EE]",
      icon: <Building2 size={35} className="md:w-20 md:h-20" />,
    },
    {
      name: "Software Development",
      imageUrl: "/categories-illustration-development.svg",
      className: "bg-[#6299F4]",
      icon: <Code2 size={35} className="md:w-20 md:h-20" />,
    },
    {
      name: "Digital Marketing",
      imageUrl: "/categories-illustration-marketing.svg",
      className: "bg-[#45CBCA]",
      icon: <PercentSquare size={35} className="md:w-20 md:h-20" />,
    },
  ];

  return (
    <Wrapper>
      <div className="space-y-8">
        <div className="space-y-4">
          <h5 className="font-semibold text-lg md:text-xl text-muted-foreground">
            Course Categories
          </h5>
          <div className="gap-4 hidden lg:flex">
            {categoriesData.map((category) => (
              <CategoriesCard
                key={category.name}
                name={category.name}
                imageUrl={category.imageUrl}
                href={`/courses?category=${category.name.toLowerCase()}`}
                className={category.className}
              />
            ))}
          </div>
          <div className="flex items-center justify-between lg:hidden bg-black p-4 rounded-md">
            {categoriesData.map((category) => (
              <Link
                key={category.name}
                href={`/courses?category=${category.name.toLowerCase()}`}
                className={cn("p-2 md:p-4 rounded-md", category.className)}
              >
                {category.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full space-y-4">
          <h5 className="font-semibold text-lg md:text-xl text-muted-foreground">
            For You
          </h5>
          <TopCourseCarousel topCourses={freeCourses} />
        </div>
        <div className="w-full space-y-4">
          <h5 className="font-semibold text-lg md:text-xl text-muted-foreground">
            Top Course This Week
          </h5>
          <TopCourseCarousel topCourses={topCourses} />
        </div>
      </div>
    </Wrapper>
  );
};

export default DahsboardPage;
