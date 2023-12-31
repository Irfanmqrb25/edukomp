import Swiper from "./swiper";
import Container from "../container";

const RecommendedCourse = () => {
  return (
    <div className="flex flex-col gap-y-8 bg-brand/10 mt-20">
      <Container className="pt-10 lg:pt-20 lg:pb-20 pb-6 space-y-8">
        <div className="space-y-2">
          <h2 className="font-bold text-3xl">Our Best Course</h2>
          <p className="lg:w-1/2 font-medium text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            dolore voluptates maiores voluptate quis et omnis nostrum, error
            commodi ut distinctio ipsum magnam.
          </p>
        </div>
        <Swiper />
      </Container>
    </div>
  );
};

export default RecommendedCourse;
