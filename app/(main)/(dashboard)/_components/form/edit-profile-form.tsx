"use client";

import { useEffect, useTransition } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UploadThingInput from "../uploadthing-input";

import * as z from "zod";
import { toast } from "sonner";
import { Crown } from "lucide-react";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import { updateProfile } from "@/actions/profile";
import { zodResolver } from "@hookform/resolvers/zod";

const formScehema = z.object({
  image: z.string().optional(),
  name: z
    .string()
    .min(5, { message: "Username must be at least 5 characters long" }),
});

interface EditProfileFormProps {
  user: User;
}

const EditProfileForm = ({ user }: EditProfileFormProps) => {
  const [isPending, setTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(formScehema),
    defaultValues: {
      image: user?.image ?? "/blank-user.jpg",
      name: user?.name,
    },
  });

  const imageWatch = form.watch("image");

  useEffect(() => {
    if (imageWatch) {
      form.setValue("image", imageWatch);
    }
  }, [imageWatch, form]);

  const handleSubmit = (data: z.infer<typeof formScehema>) => {
    setTransition(async () => {
      toast.promise(updateProfile(user.id, data), {
        loading: "Updating profile...",
        success: "Profile updated!",
        error: "Something went wrong",
      });
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex md:items-center justify-between md:flex-row gap-1 flex-col-reverse">
          <CardTitle>Personal Information</CardTitle>
          {user?.isPremium ? (
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFD700] text-white text-[11px] font-medium w-fit">
              <Crown className="w-3 h-3 md:w-4 md:h-4" />
              Premium
            </div>
          ) : (
            <div className="px-2 py-1 rounded-full bg-muted text-[11px] md:text-sm font-medium">
              Free
            </div>
          )}
        </div>
        <CardDescription>Update your profile information.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <UploadThingInput
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <label>Email</label>
              <Input disabled value={user?.email} />
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end">
              <Button type="submit" disabled={isPending}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EditProfileForm;
