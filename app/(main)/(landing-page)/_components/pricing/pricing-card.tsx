import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

const PricingCard = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Card className="w-full border-dashed">
        <CardHeader>
          <div className="bg-muted-foreground px-4 py-1 rounded-full w-fit text-white text-[12px] font-medium mb-2">
            Free
          </div>
          <CardTitle>Start For Free</CardTitle>
          <CardDescription>
            Get a free course offer from our class.
          </CardDescription>
          <div className="flex flex-col pt-8 pb-4">
            <div className="flex gap-1">
              <p>Rp.</p>
              <p className="line-through">50.000</p>
            </div>
            <div className="flex gap-1">
              <p className="font-medium">Rp.</p>
              <p className="text-4xl font-semibold">0</p>
            </div>
          </div>
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "w-fit rounded-full"
            )}
          >
            Try Now
          </Link>
          <CardContent className="flex flex-col gap-4 p-0 pt-10">
            <div className="flex items-center justify-between">
              <p className="text-sm">Free class access</p>
              <CheckCircle2 color="white" fill="green" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">Access to all classes</p>
              <XCircle color="white" fill="red" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">QnA with mentor</p>
              <XCircle color="white" fill="red" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">Live session with mentor</p>
              <XCircle color="white" fill="red" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">Lifetime class access</p>
              <XCircle color="white" fill="red" />
            </div>
          </CardContent>
        </CardHeader>
      </Card>
      <Card className="w-full border-dashed">
        <CardHeader>
          <div className="bg-brand px-4 py-1 rounded-full w-fit text-white text-[12px] font-medium mb-2">
            Premium
          </div>
          <CardTitle>Fast Learning</CardTitle>
          <CardDescription>
            Learn quickly and access unlimited classes.
          </CardDescription>
          <div className="flex flex-col pt-8 pb-4">
            <div className="flex gap-1">
              <p>Rp.</p>
              <p className="line-through">399.000</p>
            </div>
            <div className="flex gap-1">
              <p className="font-medium">Rp.</p>
              <p className="text-4xl font-semibold">250.000</p>
            </div>
          </div>
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "w-fit rounded-full"
            )}
          >
            Subscribe
          </Link>
          <CardContent className="flex flex-col gap-4 p-0 pt-10">
            <div className="flex items-center justify-between">
              <p className="text-sm">Free class access</p>
              <CheckCircle2 color="white" fill="green" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">Access to all classes</p>
              <CheckCircle2 color="white" fill="green" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">QnA with mentor</p>
              <CheckCircle2 color="white" fill="green" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">Live session with mentor</p>
              <XCircle color="white" fill="red" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">Lifetime class access</p>
              <XCircle color="white" fill="red" />
            </div>
          </CardContent>
        </CardHeader>
      </Card>
      <Card className="w-full border-dashed">
        <CardHeader>
          <div className="bg-[#FFD700] px-4 py-1 rounded-full w-fit text-white text-[12px] font-medium mb-2">
            Super
          </div>
          <CardTitle>Zero To Hero</CardTitle>
          <CardDescription>
            Learn anytime and anywhere without time limits.
          </CardDescription>
          <div className="flex flex-col pt-8 pb-4">
            <div className="flex gap-1">
              <p>Rp.</p>
              <p className="line-through">999.000</p>
            </div>
            <div className="flex gap-1">
              <p className="font-medium">Rp.</p>
              <p className="text-4xl font-semibold">500.000</p>
            </div>
          </div>
          <Link
            href=""
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "w-fit rounded-full"
            )}
          >
            Subscribe
          </Link>
          <CardContent className="flex flex-col gap-4 p-0 pt-10">
            <div className="flex items-center justify-between">
              <p className="text-sm">Free class access</p>
              <CheckCircle2 color="white" fill="green" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">Access to all classes</p>
              <CheckCircle2 color="white" fill="green" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">QnA with mentor</p>
              <CheckCircle2 color="white" fill="green" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">Live session with mentor</p>
              <CheckCircle2 color="white" fill="green" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">Lifetime class access</p>
              <CheckCircle2 color="white" fill="green" />
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default PricingCard;
