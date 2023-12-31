import Hero from "./_components/hero";
import Event from "./_components/event";
import Mentor from "./_components/mentor";
import Pricing from "./_components/pricing";
import RecommendedCourse from "./_components/course-swiper";

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <RecommendedCourse />
      <Event />
      <Mentor />
      <Pricing />
    </div>
  );
}
