import Container from "../container";
import CopyLink from "@/components/copy-link";

import Iframe from "react-iframe";

const Event = () => {
  return (
    <Container className="pt-12 lg:pt-20 space-y-8">
      <div className="space-y-2">
        <h2 className="font-bold text-3xl">Recent Events</h2>
        <p className="lg:w-1/2 font-medium text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolore
          voluptates maiores voluptate quis et omnis nostrum.
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <Iframe
          url="https://www.youtube.com/embed/vww8-z6xMxY?si=a8nfjQYl30p9UplG"
          id=""
          className="w-full h-[200px] md:h-[400px] lg:h-[650px] rounded-md"
          display="block"
          position="relative"
        />
        <CopyLink src="https://www.youtube.com/embed/vww8-z6xMxY?si=a8nfjQYl30p9UplG" />
      </div>
    </Container>
  );
};

export default Event;
