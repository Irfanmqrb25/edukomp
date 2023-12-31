import Container from "../container";
import PricingCard from "./pricing-card";

const Pricing = () => {
  return (
    <Container className="pt-12 lg:pt-20 space-y-12">
      <div className="text-center">
        <h2 className="font-bold text-3xl">Our Pricing</h2>
        <p className="font-medium text-muted-foreground">
          Choose the services you want and need from our offerings
        </p>
      </div>
      <PricingCard />
    </Container>
  );
};

export default Pricing;
