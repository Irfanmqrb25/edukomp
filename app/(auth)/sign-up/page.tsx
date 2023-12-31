import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm, { Inputs } from "./client";

import db from "@/lib/db";
import bcrypt from "bcrypt";

const SignUpPage = () => {
  const handleRegister = async (data: Inputs) => {
    "use server";

    const hashedPassword = await bcrypt.hash(data.password, 10);

    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        hashedPassword: hashedPassword,
      },
    });
  };

  return (
    <Card className="w-full md:w-[450px] dark:bg-black shadow-md">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm action={handleRegister} />
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline hover:text-brand">
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignUpPage;
