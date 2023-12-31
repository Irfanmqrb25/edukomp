"use client";

import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/PasswordInput";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const authSignUpSchema = z.object({
  name: z.string().min(5, {
    message: "Username must be at least 5 characters long",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100)
    .regex(/^(?=.*[A-Z]).{8,}$/, {
      message: "Password must contain at least one uppercase letter.",
    }),
});

export type Inputs = z.infer<typeof authSignUpSchema>;

interface RegisterFormProps {
  action: (data: Inputs) => void;
}

const RegisterForm = ({ action }: RegisterFormProps) => {
  const router = useRouter();

  const form = useForm<Inputs>({
    resolver: zodResolver(authSignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: Inputs) => {
    action(data);
    router.refresh();
    router.push("/sign-in");
    form.reset();
    toast.success("Account created");
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  className="focus-visible:ring-brand"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  className="focus-visible:ring-brand"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="**********"
                  {...field}
                  className="focus-visible:ring-brand"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-brand hover:bg-brand/80 dark:text-white"
        >
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
