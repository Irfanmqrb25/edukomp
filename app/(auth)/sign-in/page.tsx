import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./client";

const SignInPage = () => {
  return (
    <Card className="w-full md:w-[450px] dark:bg-black shadow-md">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="underline hover:text-brand">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInPage;
