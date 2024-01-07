"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <Card
      className={cn(
        "py-4 px-3 flex flex-col w-full items-center justify-center gap-4 hover:-translate-y-1 transition-all duration-500 group cursor-pointer text-white shadow-sm",
        className
      )}
      onClick={() => router.push(href)}
    >
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt="category image"
        className="object-cover grayscale group-hover:-translate-x-2 transition-all duration-500 group-hover:grayscale-0"
      />
      <p className="font-medium lg:text-center xl:text-start">{name}</p>
    </Card>
  );
};

export default CategoriesCard;
