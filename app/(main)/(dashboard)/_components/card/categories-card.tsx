import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CategoriesCardProps {
  name: string;
  imageUrl: string;
  href: string;
  className: string;
}

const CategoriesCard = ({
  name,
  imageUrl,
  href,
  className,
}: CategoriesCardProps) => {
  return (
    <Card
      className={cn(
        "p-4 flex flex-col w-full items-center justify-center gap-4 hover:-translate-y-1 transition-all duration-500 group cursor-pointer text-white shadow-sm",
        className
      )}
    >
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt="company image"
        className="object-cover grayscale group-hover:-translate-x-2 transition-all duration-500 group-hover:grayscale-0"
      />
      <p className="font-medium">{name}</p>
    </Card>
  );
};

export default CategoriesCard;
