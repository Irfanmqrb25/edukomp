import getCurrentUser from "@/actions/getCurrentUser";
import Container from "../container";
import PricingCard from "./pricing-card";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

const Pricing = async () => {
  const user = await getCurrentUser();

  const subscribeAction = async () => {
    "use server";

    await db.user.update({
      where: {
        id: user?.id,
      },
      data: {
        isPremium: true,
      },
    });
    revalidatePath("/pricing");
  };

  return (
    <Container className="pt-12 lg:pt-20 space-y-12">
      <div className="text-center">
        <h2 className="font-bold text-3xl">Our Pricing</h2>
        <p className="font-medium text-muted-foreground">
          Choose the services you want and need from our offerings
        </p>
      </div>
      <PricingCard user={user!} action={subscribeAction} />
    </Container>
  );
};

export default Pricing;
