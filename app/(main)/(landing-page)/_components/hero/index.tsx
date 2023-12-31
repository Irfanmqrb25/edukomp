import Link from "next/link";

import Photo from "./photo";
import Container from "../container";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col gap-y-8">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
          <div className="lg:w-[40%] flex flex-col space-y-4">
            <div className="space-y-4 mb-4">
              <h2 className="text-3xl lg:text-6xl font-bold leading-tight">
                Grow your professional skill with best mentor
              </h2>
              <p className="lg:text-lg text-justify">
                Embark on a transformative learning journey with the ultimate
                online course platform! Uncover the perfect course tailored just
                for you and dive into a world of seamless and enriching
                education. Your pathway to knowledge begins here. Discover,
                learn, and thrive!
              </p>
            </div>
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ size: "lg", variant: "primary" }),
                "rounded-full lg:w-fit group"
              )}
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </div>
          <div className="lg:w-[50%]">
            <Photo />
          </div>
        </div>
        <div className="md:mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 border-2 border-brand rounded-lg">
          <div className="flex flex-col items-center py-8 border-b-2 md:border-b-0 md:border-r-2 border-brand">
            <h2 className="text-4xl font-semibold text-brand">1028+</h2>
            <p className="mt-2 font-medium">Active Student</p>
          </div>
          <div className="flex flex-col items-center py-8 border-b-2 md:border-b-0 md:border-r-2 border-brand">
            <h2 className="text-4xl font-semibold text-brand">300</h2>
            <p className="mt-2 font-medium">Skilled Mentor</p>
          </div>
          <div className="flex flex-col items-center py-8 border-b-2 md:border-b-0 md:border-r-2 border-brand">
            <h2 className="text-4xl font-semibold text-brand">260</h2>
            <p className="mt-2 font-medium">Total Course</p>
          </div>
          <div className="flex flex-col items-center py-8">
            <h2 className="text-4xl font-semibold text-brand">50+</h2>
            <p className="mt-2 font-medium">Awards</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
