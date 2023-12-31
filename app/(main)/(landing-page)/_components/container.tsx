import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("px-4 md:px-8 lg:px-36 pt-24 lg:pt-40", className)}>
      {children}
    </div>
  );
};

export default Container;
